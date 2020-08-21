import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../../utils/firebase/firebaseContext';
import UserContext from '../../utils/userContext';


const PasswordChange = () => {
    const history = useHistory();
    const firebase = useContext(FirebaseContext);
    const userContext = useContext(UserContext);
    const {logOut} = userContext;
    const [newPassword, setNewPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handlePasswordChange = (event) => {
        event.preventDefault();
        firebase.auth.currentUser.updatePassword(newPassword)
        .then(() => {
            logOut();
            history.push('/home')
        })
        .catch(e => {
            console.log(e);
        })
    }

    return (
        <div className="row justify-content-center d-flex">
		<div className="col-lg-5 p-2 m-1 justify-content-center d-flex">
			<div className="container">
				<form onSubmit={handlePasswordChange}>
					<div className="form-group row">
						<label htmlFor="password" className="col-sm-2 col-form-label">
							Нова парола
						</label>
						<div className="col-sm-10">
							<input
								name="password"
								type="password"
								className="form-control"
                                id="password"
                                value={newPassword}
								onChange={e => {setNewPassword(e.target.value)}}
								placeholder="Моля, въведете нова парола"
								// @blur="$v.password.$touch"
								// :className="{
								// 	'is-invalid': $v.password.$error,
								// 	'is-valid': !$v.password.$invalid
								// }"
							/>
						</div>
					</div>
					{/* <div
						className="alert alert-danger alert-dismissible fade show"
						v-if="$v.password.$dirty && $v.password.$invalid"
					>
						Моля, въведете валидна парола!
					</div> */}
					<div className="form-group row">
						<label htmlFor="rePassword" className="col-sm-2 col-form-label">
							Нова парола
						</label>
						<div className="col-sm-10">
							<input
								name="rePassword"
								type="password"
								className="form-control"
								id="rePassword"
								value={rePassword}
								placeholder="Моля, въведете пак новата парола"
								onChange={e => {setRePassword(e.target.value)}}
								// @blur="$v.rePassword.$touch"
								// :className="{
								// 	'is-invalid': $v.rePassword.$error,
								// 	'is-valid': !$v.rePassword.$invalid
								// }"
							/>
						</div>
					</div>
					{/* <div
						className="alert alert-danger alert-dismissible fade show"
						v-if="$v.rePassword.$dirty && $v.rePassword.$invalid"
					>
						Двете пароли не съвпадат!
					</div> */}

					<button
						// :disabled="$v.password.$invalid || $v.rePassword.$invalid"
						className="btn btn-primary"
					>
						<h5>Смяна на паролата</h5>
					</button>
				</form>
			</div>
		</div>
		<div className="col-lg-5 p-2 m-1 border justify-content-center d-flex">
			TODO: Saved configurations
		</div>
	</div>
    )

}

export default PasswordChange