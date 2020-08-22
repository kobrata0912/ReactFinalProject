import React, { useState, useContext } from 'react';
import FirebaseContext from '../../utils/firebase/firebaseContext';
import { toast } from 'react-toastify';
import LoadingContext from '../../utils/loadingContext';

const NamesChange = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const firebase = useContext(FirebaseContext);
	const loadingContext = useContext(LoadingContext);

	const [firstNameValid, setFirstNameValid] = useState('');
	const [firstNameClass, setFirstNameClass] = useState('form-control');
	const [lastNameValid, setLastNameValid] = useState('');
	const [lastNameClass, setLastNameClass] = useState('form-control');
	const isFormValid = firstNameValid && lastNameValid;

	const validator = (e) => {
		switch (e.target.name) {
			case 'firstName':
				{
					const validation = RegExp(/^[А-Яа-яA-Za-z\-']{2,}$/).test(firstName);
					if (validation) {
						setFirstNameValid(true);
						setFirstNameClass('form-control is-valid');
					} else {
						setFirstNameValid(false);
						setFirstNameClass('form-control is-invalid');
					}
				}
				break;
			case 'lastName':
				{
					const validation = RegExp(/^[А-Яа-яA-Za-z\-']{2,}$/).test(lastName);
					if (validation) {
						setLastNameValid(true);
						setLastNameClass('form-control is-valid');
					} else {
						setLastNameValid(false);
						setLastNameClass('form-control is-invalid');
					}
				}
				break;
			default:
				break;
		}
	};

	const handleNamesChange = (event) => {
		event.preventDefault();
		loadingContext.showLoading();
		const newNames = `${firstName} ${lastName}`;
		firebase.auth.currentUser
			.updateProfile({ displayName: newNames })
			.then(() => {
				setFirstName('');
				setLastName('');
				loadingContext.hideLoading();
				toast.success(`Successfully changed names to ${newNames}`);
			})
			.catch((e) => {
				toast.error(e);
			});
	};

	return (
		<div className='col-lg-5 p-2 m-1 justify-content-center d-flex'>
			<div className='container'>
				<form onSubmit={handleNamesChange}>
					<div className='form-group row'>
						<label htmlFor='firstName' className='col-sm-2 col-form-label'>
							Име
						</label>
						<div className='col-sm-10'>
							<input
								name='firstName'
								placeholder='Моля, въведете име'
								type='text'
								className={firstNameClass}
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								onBlur={validator}
							/>
						</div>
					</div>
					{firstNameValid === false ? (
						<div className='alert alert-danger alert-dismissible fade show'>
							Моля, въведете валиднo име!
						</div>
					) : (
						''
					)}

					<div className='form-group row'>
						<label htmlFor='lastName' className='col-sm-2 col-form-label'>
							Фамилия
						</label>
						<div className='col-sm-10'>
							<input
								name='lastName'
								placeholder='Моля, въведете фамилия'
								type='text'
								className={lastNameClass}
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								onBlur={validator}
							/>
						</div>
					</div>
					{lastNameValid === false ? (
						<div className='alert alert-danger alert-dismissible fade show'>
							Моля, въведете валиднo име!
						</div>
					) : (
						''
					)}

					<button
						disabled={!isFormValid}
						className='btn btn-primary'
					>
						<h5>Смяна на имената</h5>
					</button>
				</form>
			</div>
		</div>
	);
};

export default NamesChange;
