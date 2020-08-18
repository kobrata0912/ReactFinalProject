import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import UserContext from '../../utils/userContext';
import FirebaseContext from '../../utils/firebase/firebaseContext'

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const userContext = useContext(UserContext);
	const firebase = useContext(FirebaseContext)
	const isInvalid = email === '' || password === ''

	const handleLogin = (event) => {
		event.preventDefault();
		firebase
			.doSignInWithEmailAndPassword(email, password)
			.then((authUser) => {
				setEmail('');
				setPassword('');
				userContext.logIn(authUser)
				history.push('/home')
			})				
			.catch((e) => {
				setEmail('');
				setPassword('');
				console.log(e);
			});
	};

	return (
		<div className="container pt-5">
		<div className="row">
			<div className="col-sm"></div>
			<div className="col-sm border shadow-lg p-3 mb-5 bg-white rounded">
				<div className="row"></div>
				<form onSubmit={handleLogin} >
					<div className="form-group">
						<label htmlFor="email" className="h4">Имейл</label>
						<input
							name="email"
							placeholder="Valid GMAIL account"
							type="text"
							className="form-control"
							id="email"
							onChange={e => setEmail(e.target.value)}
							// @blur="$v.email.$touch"
							// :className="{
							// 	'is-invalid': $v.email.$error,
							// 	'is-valid': !$v.email.$invalid,
							// }"
							autoComplete="off"
						/>
					</div>
					{/* <div
						className="alert alert-danger alert-dismissible fade show"
						v-if="$v.email.$dirty && $v.email.$invalid"
					>
						Моля, въведете валиден Gmail имейл!
					</div> */}

					<div className="form-group">
						<label htmlFor="password" className="h4">Парола</label>
						<input
							name="password"
							placeholder="Password > 8 characters"
							type="password"
							className="form-control"
							id="password"
							onChange={e => setPassword(e.target.value)}
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

					<button	 disabled={isInvalid} className="btn btn-primary">
						<h5>Вход</h5>
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
			<div className="col-sm"></div>
		</div>
	</div>
	);
};

export default Login;
