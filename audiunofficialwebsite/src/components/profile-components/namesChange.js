import React, { useState, useContext } from 'react'
import FirebaseContext from '../../utils/firebase/firebaseContext';
import UserContext from '../../utils/userContext';

const NamesChange = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const firebase = useContext(FirebaseContext);
    const userContext = useContext(UserContext);

    const handleNamesChange = (event) => {
        event.preventDefault();
        const newNames = `${firstName} ${lastName}`
        firebase.auth.currentUser.updateProfile({displayName: newNames})
        .then(() => {
            setFirstName('');
            setLastName('');
        })
    }

    return (
        <div className="col-lg-5 p-2 m-1 justify-content-center d-flex">
		<div className="container">
			<form onSubmit={handleNamesChange}>
				<div className="form-group row">
					<label htmlFor="firstName" className="col-sm-2 col-form-label">
						Име
					</label>
					<div className="col-sm-10">
						<input
							name="firstName"
							type="text"
							className="form-control"
							id="firstName"
							value={firstName}
							placeholder="Моля, въведете име"
							onChange={e => setFirstName(e.target.value)}
							// @blur="$v.firstName.$touch"
							// :className="{
							// 	'is-invalid': $v.firstName.$error,
							// 	'is-valid': !$v.firstName.$invalid
							// }"
						/>
					</div>
				</div>
				{/* <div
					className="alert alert-danger alert-dismissible fade show"
					v-if="$v.firstName.$dirty && $v.firstName.$invalid"
				>
					Моля, въведете валиднo име!
				</div> */}
				<div className="form-group row">
					<label htmlFor="lastName" className="col-sm-2 col-form-label">
						Фамилия
					</label>
					<div className="col-sm-10">
						<input
							name="lastName"
							type="text"
							className="form-control"
							id="lastName"
							value={lastName}
							placeholder="Моля, въведете фамилия"
							onChange={e => setLastName(e.target.value)}
							// @blur="$v.lastName.$touch"
							// :className="{
							// 	'is-invalid': $v.lastName.$error,
							// 	'is-valid': !$v.lastName.$invalid
							// }"
						/>
					</div>
				</div>
				{/* <div
					className="alert alert-danger alert-dismissible fade show"
					v-if="$v.lastName.$dirty && $v.lastName.$invalid"
				>
					Моля, въведете валиднo име!
				</div> */}
				<button
					// disabled="$v.firstName.$invalid || $v.lastName.$invalid"
					className="btn btn-primary"
				>
					<h5>Смяна на имената</h5>
				</button>
			</form>
		</div>
	</div>
    )
}

export default NamesChange