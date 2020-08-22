import React, { useState, useContext, useEffect } from 'react';
import UserContext from './utils/userContext';
import FirebaseContext from './utils/firebase/firebaseContext';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const App = (props) => {
	const firebase = useContext(FirebaseContext);
	const history = useHistory();
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
		toast.success('Logged out successfully');
		history.push('/home');
	};

	useEffect(() => {
		const email = localStorage.getItem('email')
		const password = localStorage.getItem('password');
		if ((email && email !== '') && (password && password !== '')) {
			firebase.doSignInWithEmailAndPassword(email, password)
			.then(user => {
				logIn(user);
				toast.success(`Logged in as ${email}`);
			})
			.catch(e => {
				toast.warning(e)
			})
		}
	}, [firebase])

	return (
		<UserContext.Provider
			value={{
				user,
				logIn,
				logOut,
			}}
		>
			<ToastContainer 
			position="bottom-right"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			/>
			{props.children}
		</UserContext.Provider>
	);
};

export default App;
