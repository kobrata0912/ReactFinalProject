import React from 'react'

const Register = () => {
    return (
        <div className="container pt-5">
		<div className="row">
			<div className="col"></div>
			<div className="col-8 border shadow-lg p-3 mb-5 bg-white rounded">
				<form >
					<div className="row">
						<div className="col">
							<label for="firstName" className="h4">Име</label>
							<input
								name="firstName"
								type="text"
								className="form-control"
								id="firstName"
								// @blur="$v.firstName.$touch"
								// :className="{
								// 	'is-invalid': $v.firstName.$error,
								// 	'is-valid': !$v.firstName.$invalid,
								// }"
								autocomplete="off"
							/>
						</div>

						<div className="col">
							<label for="lastName" className="h4">Фамилия</label>
							<input
								name="lastName"
								type="text"
								className="form-control"
								id="lastName"
								// @blur="$v.lastName.$touch"
								// :className="{
								// 	'is-invalid': $v.lastName.$error,
								// 	'is-valid': !$v.lastName.$invalid,
								// }"
								autocomplete="off"
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
					<div className="form-group">
						<label for="rePassword" className="h4">Повторна парола</label>
						<input
							name="rePassword"
							placeholder="Password > 8 characters"
							type="password"
							className="form-control"
							id="rePassword"
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
					<button className="btn btn-primary">
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
			<div className="col"></div>
		</div>
	</div>
    )
}

export default Register