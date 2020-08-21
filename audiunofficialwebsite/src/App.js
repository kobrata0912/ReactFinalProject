import React, { useState, useContext, useEffect } from 'react';
import UserContext from './utils/userContext';
import FirebaseContext from './utils/firebase/firebaseContext';

const App = (props) => {
	const [user, setUser] = useState(
		props.user
			? {
					...props.user,
					loggedIn: true,
			  }
			: {
					loggedIn: false,
			  }
	);
	const firebase = useContext(FirebaseContext);

	const logIn = (userObject) => {
		setUser({
			...userObject,
			loggedIn: true,
		});
	};

	const logOut = () => {
		firebase.doSignOut();
		setUser({
			loggedIn: false,
		});
	};

	const shouldAutoLogIn = () => {
		const email = localStorage.getItem('email')
		const password = localStorage.getItem('password');
		if ((email && email !== '') && (password && password !== '')) {
			firebase.doSignInWithEmailAndPassword(email, password)
			.then(user => {
				logIn(user);
			})
		}
	}

	useEffect(() => {
		shouldAutoLogIn();
	}, [])

	return (
		<UserContext.Provider
			value={{
				user,
				logIn,
				logOut,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default App;
