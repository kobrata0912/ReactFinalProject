import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../../utils/firebase/firebaseContext';
import UserContext from '../../utils/userContext';
import { toast } from 'react-toastify';
import LoadingContext from '../../utils/loadingContext';

const PasswordChange = () => {
	const history = useHistory();
	const firebase = useContext(FirebaseContext);
	const userContext = useContext(UserContext);
	const loadingContext = useContext(LoadingContext);
	const { logOut } = userContext;
	const [newPassword, setNewPassword] = useState('');
	const [rePassword, setRePassword] = useState('');

	const [newPasswordValid, setNewPasswordValid] = useState('');
	const [newPasswordClass, setNewPasswordClass] = useState('form-control');
	const [rePasswordValid, setRePasswordValid] = useState('');
	const [rePasswordClass, setRePasswordClass] = useState('form-control');
	const isFormValid = newPasswordValid && rePasswordValid;

	const validator = (e) => {
		switch (e.target.name) {
			case 'password':
				{
					const validation = RegExp(/^[A-Za-z0-9.-_]{8,}$/).test(newPassword);
					if (validation) {
						setNewPasswordValid(true);
						setNewPasswordClass('form-control is-valid');
					} else {
						setNewPasswordValid(false);
						setNewPasswordClass('form-control is-invalid');
					}
				}
				break;
			case 'rePassword':
				{
					const validation = newPassword === rePassword && newPassword !== '';
					if (validation) {
						setRePasswordValid(true);
						setRePasswordClass('form-control is-valid');
					} else {
						setRePasswordValid(false);
						setRePasswordClass('form-control is-invalid');
					}
				}
				break;
			default:
				break;
		}
	}

	const handlePasswordChange = (event) => {
		event.preventDefault();
		loadingContext.showLoading();
		firebase.auth.currentUser
			.updatePassword(newPassword)
			.then(() => {
				logOut();
				loadingContext.hideLoading();
				toast.success('Successfully changed password. Please Log In again!');
				history.push('/home');
			})
			.catch((e) => {
				loadingContext.hideLoading();
				toast.error(e.message);
			});
	};

	return (
		<div className='row justify-content-center d-flex'>
			<div className='col-lg-5 p-2 m-1 justify-content-center d-flex'>
				<div className='container'>
					<form onSubmit={handlePasswordChange}>
						<div className='form-group row'>
							<label htmlFor='password' className='col-sm-2 col-form-label'>
								Нова парола
							</label>
							<div className='col-sm-10'>
								<input
									name='password'
									type='password'
									placeholder='Моля, въведете нова парола'
									className={newPasswordClass}
									value={newPassword}
									onChange={(e) => {
										setNewPassword(e.target.value);
									}}
									onBlur={validator}
								/>
							</div>
						</div>
						{newPasswordValid === false ? (
							<div className='alert alert-danger alert-dismissible fade show'>
								Моля, въведете валидна парола!
							</div>
						) : (
							''
						)}

						<div className='form-group row'>
							<label htmlFor='rePassword' className='col-sm-2 col-form-label'>
								Нова парола
							</label>
							<div className='col-sm-10'>
								<input
									name='rePassword'
									type='password'
									placeholder='Моля, въведете пак новата парола'
									className={rePasswordClass}
									value={rePassword}
									onChange={(e) => {
										setRePassword(e.target.value);
									}}
									onBlur={validator}
								/>
							</div>
						</div>
						{rePasswordValid === false ? (
							<div className='alert alert-danger alert-dismissible fade show'>
								Двете пароли не съвпадат!
							</div>
						) : (
							''
						)}

						<button
							disabled={!isFormValid}
							className='btn btn-primary'
						>
							<h5>Смяна на паролата</h5>
						</button>
					</form>
				</div>
			</div>
			<div className='col-lg-5 p-2 m-1 border justify-content-center d-flex'>
				TODO: Saved configurations
			</div>
		</div>
	);
};

export default PasswordChange;
