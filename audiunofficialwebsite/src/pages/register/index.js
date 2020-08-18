import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../utils/userContext';
import FirebaseContext from '../../utils/firebase/firebaseContext';

const Register = (props) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rePassword, setRePassword] = useState('');
	const history = useHistory();
	const { logIn } = useContext(UserContext);
	const firebase = useContext(FirebaseContext);

	const isInvalid =
		password !== rePassword ||
		password === '' ||
		rePassword === '' ||
		email === '' ||
		firstName === '' ||
		lastName === '';

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
				history.push('/home');
			})
			.catch((e) => {
				setFirstName('');
				setLastName('');
				setEmail('');
				setPassword('');
				setRePassword('');
				console.log(e);
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
									className='form-control'
									id='firstName'
									onChange={(e) => setFirstName(e.target.value)}
									// @blur="$v.firstName.$touch"
									// :className="{
									// 	'is-invalid': $v.firstName.$error,
									// 	'is-valid': !$v.firstName.$invalid,
									// }"
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
									className='form-control'
									id='lastName'
									onChange={(e) => setLastName(e.target.value)}
									// @blur="$v.lastName.$touch"
									// :className="{
									// 	'is-invalid': $v.lastName.$error,
									// 	'is-valid': !$v.lastName.$invalid,
									// }"
									autoComplete='off'
								/>
							</div>
						</div>

						{/* <div className="row">
						<div className="col mt-3">
							<div
								className="alert alert-danger alert-dismissible fade show"
								v-if="$v.firstName.$dirty && $v.firstName.$invalid"
							>
								Моля, въведете валидно име!
							</div>
						</div>
						<div className="col mt-3">
							<div
								className="alert alert-danger alert-dismissible fade show"
								v-if="$v.lastName.$dirty && $v.lastName.$invalid"
							>
								Моля, въведете валидна фамилия!
							</div>
						</div>
					</div> */}

						<div className='form-group'>
							<label htmlFor='email' className='h4'>
								Имейл
							</label>
							<input
								name='email'
								placeholder='Valid GMAIL account'
								type='text'
								className='form-control'
								id='email'
								onChange={(e) => setEmail(e.target.value)}
								// @blur="$v.email.$touch"
								// :className="{
								// 	'is-invalid': $v.email.$error,
								// 	'is-valid': !$v.email.$invalid,
								// }"
								autoComplete='off'
							/>
						</div>
						{/* <div
						className="alert alert-danger alert-dismissible fade show"
						v-if="$v.email.$dirty && $v.email.$invalid"
					>
						Моля, въведете валиден Gmail имейл!
					</div> */}
						<div className='form-group'>
							<label htmlFor='password' className='h4'>
								Парола
							</label>
							<input
								name='password'
								placeholder='Password > 8 characters'
								type='password'
								className='form-control'
								id='password'
								onChange={(e) => setPassword(e.target.value)}
								// @blur="$v.password.$touch"
								// :className="{
								// 	'is-invalid': $v.password.$error,
								// 	'is-valid': !$v.password.$invalid,
								// }"
							/>
						</div>
						{/* <div
						className="alert alert-danger alert-dismissible fade show"
						v-if="$v.password.$dirty && $v.password.$invalid"
					>
						Моля, въведете валидна парола!
					</div> */}
						<div className='form-group'>
							<label htmlFor='rePassword' className='h4'>
								Повторна парола
							</label>
							<input
								name='rePassword'
								placeholder='Password > 8 characters'
								type='password'
								className='form-control'
								id='rePassword'
								onChange={(e) => setRePassword(e.target.value)}
								// @blur="$v.rePassword.$touch"
								// :className="{
								// 	'is-invalid': $v.rePassword.$error,
								// 	'is-valid': !$v.rePassword.$invalid && $v.rePassword.sameAs,
								// }"
							/>
						</div>
						{/* <div
						className="alert alert-danger alert-dismissible fade show"
						v-if="$v.rePassword.$dirty && $v.rePassword.$invalid"
					>
						Двете пароли не съвпадат!
					</div> */}
						<button disabled={isInvalid} className='btn btn-primary'>
							<h5>Регистрация</h5>
						</button>
					</form>
					{/* <div className="row">
					<div className="container" v-if="loading">
						<div className="row">
							<div id="loader">
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="dot"></div>
								<div className="loading"></div>
							</div>
						</div>
					</div>
				</div> */}
				</div>
				<div className='col'></div>
			</div>
		</div>
	);
};

export default Register;
