import React from 'react';

const Login = () => {
	return (
		<div className="container pt-5">
		<div className="row">
			<div className="col-sm"></div>
			<div className="col-sm border shadow-lg p-3 mb-5 bg-white rounded">
				<div className="row"></div>
				<form >
					<div className="form-group">
						<label for="email" className="h4">Имейл</label>
						<input
							name="email"
							placeholder="Valid GMAIL account"
							type="text"
							className="form-control"
							id="email"
							// @blur="$v.email.$touch"
							// :className="{
							// 	'is-invalid': $v.email.$error,
							// 	'is-valid': !$v.email.$invalid,
							// }"
							autocomplete="off"
						/>
					</div>
					{/* <div
						className="alert alert-danger alert-dismissible fade show"
						v-if="$v.email.$dirty && $v.email.$invalid"
					>
						Моля, въведете валиден Gmail имейл!
					</div> */}

					<div className="form-group">
						<label for="password" className="h4">Парола</label>
						<input
							name="password"
							placeholder="Password > 8 characters"
							type="password"
							className="form-control"
							id="password"
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

					<button
						
						className="btn btn-primary"
					>
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
