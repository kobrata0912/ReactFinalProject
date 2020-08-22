import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserContext from '../../utils/userContext';
import FirebaseContext from '../../utils/firebase/firebaseContext';
import LoadingContext from '../../utils/loadingContext';

const Login = (props) => {
	const { logIn } = useContext(UserContext);
	const firebase = useContext(FirebaseContext);
	const loadingContext = useContext(LoadingContext)
	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailValid, setEmailValid] = useState('');
	const [emailClass, setEmailClass] = useState('form-control');
	const [passwordValid, setPasswordValid] = useState('');
	const [passwordClass, setPasswordClass] = useState('form-control');
	const isFormValid = emailValid && passwordValid

	const validator = (e) => {
		switch (e.target.name) {
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
			default:
				break;
		}
	};

	const handleLogin = (event) => {
		event.preventDefault();
		loadingContext.showLoading();
		firebase
			.doSignInWithEmailAndPassword(email, password)
			.then((authUser) => {
				loadingContext.hideLoading();
				logIn(authUser);
				toast.success(`Logged in successfully as ${email}`);
				history.push('/home');
			})
			.catch((e) => {
				setEmail('');
				setPassword('');
				loadingContext.hideLoading();
				toast.error(e.message);
			});
	};

	return (
		<div className='container pt-5'>
			<div className='row'>
				<div className='col-sm'></div>
				<div className='col-sm border shadow-lg p-3 mb-5 bg-white rounded'>
					<div className='row'></div>
					<form onSubmit={handleLogin}>
						<div className='form-group'>
							<label htmlFor='email' className='h4'>
								Имейл
							</label>
							<input
								name='email'
								placeholder='Gmail account'
								type='text'
								className={emailClass}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								onBlur={validator}
								autoComplete='off'
							/>
						</div>
						{emailValid === false ? (
							<div
								className='alert alert-danger alert-dismissible fade show'
								v-if='$v.email.$dirty && $v.email.$invalid'
							>
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
							<div
								className='alert alert-danger alert-dismissible fade show'
								v-if='$v.password.$dirty && $v.password.$invalid'
							>
								Моля, въведете валидна парола!
							</div>
						) : (
							''
						)}

						<button
							disabled={!isFormValid}
							className='btn btn-primary'
						>
							<h5>Вход</h5>
						</button>
					</form>
				</div>
				<div className='col-sm'></div>
			</div>
		</div>
	);
};

export default Login;
