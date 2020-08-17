import React, { useState, useEffect } from 'react';
import UserContext from './utils/userContext';

const App = (props) => {
	const [user, setUser] = useState(
		props.user
			? {
					...props.user,
					loggedIn: true,
			  }
			: null
	);

	const logIn = (userObject) => {
		setUser({
			...userObject,
			loggedIn: true,
		});
	};

	const logOut = () => {
		props.firebase.doSignOut();
		setUser({
			loggedIn: false,
		});
	};

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