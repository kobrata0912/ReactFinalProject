import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserContext from '../../utils/userContext';
import FirebaseContext from '../../utils/firebase/firebaseContext';

const Register = (props) => {
	const { logIn } = useContext(UserContext);
	const firebase = useContext(FirebaseContext);
	const history = useHistory();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');

	const [firstNameValid, setFirstNameValid] = useState('');
	const [firstNameClass, setFirstNameClass] = useState('form-control');
	const [lastNameValid, setLastNameValid] = useState('');
	const [lastNameClass, setLastNameClass] = useState('form-control');
	const [emailValid, setEmailValid] = useState('');
	const [emailClass, setEmailClass] = useState('form-control');
	const [passwordValid, setPasswordValid] = useState('');
	const [passwordClass, setPasswordClass] = useState('form-control');
	const [rePasswordValid, setRePasswordValid] = useState('');
	const [rePasswordClass, setRePasswordClass] = useState('form-control');
	const isFormValid =
		firstNameValid &&
		lastNameValid &&
		emailValid &&
		passwordValid &&
		rePasswordValid;

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
			case 'email':
				{
					const validation = RegExp(/^[a-zA-Z0-9.-_]{3,}@gmail.com$/).test(
						email
					);
					if (validation) {
						setEmailValid(true);
						setEmailClass('form-control is-valid');
					} else {
						setEmailValid(false);
						setEmailClass('form-control is-invalid');
					}
				}
				break;
			case 'password':
				{
					const validation = RegExp(/^[A-Za-z0-9.-_]{8,}$/).test(password);
					if (validation) {
						setPasswordValid(true);
						setPasswordClass('form-control is-valid');
					} else {
						setPasswordValid(false);
						setPasswordClass('form-control is-invalid');
					}
				}
				break;
			case 'rePassword':
				{
					const validation = password === rePassword && password !== '';
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
	};

	const handleRegister = (event) => {
		event.preventDefault();
		firebase
			.doCreateUserWithEmailAndPassword(email, password, firstName, lastName)
			.then((authUser) => {
				setFirstName('');
				setLastName('');
				setEmail('');
				setPassword('');
				setRePassword('');
				logIn(authUser);
				toast.success('Successfully registered!')
				history.push('/home');
			})
			.catch((e) => {
				setFirstName('');
				setLastName('');
				setEmail('');
				setPassword('');
				setRePassword('');
				toast.error(e);
			});
	};
	return (
		<div className='container pt-5'>
			<div className='row'>
				<div className='col'></div>
				<div className='col-8 border shadow-lg p-3 mb-5 bg-white rounded'>
					<form onSubmit={handleRegister}>
						<div className='row'>
							<div className='col'>
								<label htmlFor='firstName' className='h4'>
									Име
								</label>
								<input
									name='firstName'
									type='text'
									className={firstNameClass}
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									onBlur={validator}
									autoComplete='off'
								/>
							</div>

							<div className='col'>
								<label htmlFor='lastName' className='h4'>
									Фамилия
								</label>
								<input
									name='lastName'
									type='text'
									className={lastNameClass}
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									onBlur={validator}
									autoComplete='off'
								/>
							</div>
						</div>

						<div className='row'>
							{firstNameValid === false ? (
								<div className='col mt-3'>
									<div className='alert alert-danger alert-dismissible fade show'>
										Моля, въведете валидно име!
									</div>
								</div>
							) : (
								''
							)}
							{lastNameValid === false ? (
								<div className='col mt-3'>
									<div className='alert alert-danger alert-dismissible fade show'>
										Моля, въведете валидна фамилия!
									</div>
								</div>
							) : (
								''
							)}
						</div>

						<div className='form-group'>
							<label htmlFor='email' className='h4'>
								Имейл
							</label>
							<input
								name='email'
								placeholder='Valid GMAIL account'
								className={emailClass}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								onBlur={validator}
								autoComplete='off'
							/>
						</div>
						{emailValid === false ? (
							<div className='alert alert-danger alert-dismissible fade show'>
								Моля, въведете валиден Gmail имейл!
							</div>
						) : (
							''
						)}

						<div className='form-group'>
							<label htmlFor='password' className='h4'>
								Парола
							</label>
							<input
								name='password'
								placeholder='Password > 8 characters'
								type='password'
								className={passwordClass}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								onBlur={validator}
								autoComplete='off'
							/>
						</div>
						{passwordValid === false ? (
							<div className='alert alert-danger alert-dismissible fade show'>
								Моля, въведете валидна парола!
							</div>
						) : (
							''
						)}

						<div className='form-group'>
							<label htmlFor='rePassword' className='h4'>
								Повторна парола
							</label>
							<input
								name='rePassword'
								placeholder='Password > 8 characters'
								type='password'
								className={rePasswordClass}
								value={rePassword}
								onChange={(e) => setRePassword(e.target.value)}
								onBlur={validator}
							/>
						</div>

						{rePasswordValid === false ? (
							<div className='alert alert-danger alert-dismissible fade show'>
								Двете пароли не съвпадат!
							</div>
						) : (
							''
						)}

						<button disabled={!isFormValid} className='btn btn-primary'>
							<h5>Регистрация</h5>
						</button>
					</form>
				</div>
				<div className='col'></div>
			</div>
		</div>
	);
};

export default Register;
