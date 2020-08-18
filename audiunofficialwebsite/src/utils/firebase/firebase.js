import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import "@firebase/firestore";


const firebaseConfig = {
	apiKey: 'AIzaSyB4zD7vjAq81eI8rlNNa9ZukAI2_8B37S0',
	authDomain: 'audiunofficialwebsite.firebaseapp.com',
	databaseURL: 'https://audiunofficialwebsite.firebaseio.com',
	projectId: 'audiunofficialwebsite',
	storageBucket: 'audiunofficialwebsite.appspot.com',
	messagingSenderId: '928209935191',
	appId: '1:928209935191:web:9fa1091afd877b00927c12',
	measurementId: 'G-VWJ6TM23F9',
};

class Firebase{
	constructor() {
		app.initializeApp(firebaseConfig);
		this.auth = app.auth();
		this.db = app.firestore();
	}

	doCreateUserWithEmailAndPassword = async (
		email,
		password,
		firstName,
		lastName
	) => {
		await this.auth
			.createUserWithEmailAndPassword(email, password)
			.then((data) => {
				data.user
					.updateProfile({
						displayName: `${firstName} ${lastName}`,
					})

			});

		return await this.doSignInWithEmailAndPassword(email, password)
		
	};

	doSignInWithEmailAndPassword = async (email, password) => {
		return await this.auth.signInWithEmailAndPassword(email, password);
	};

	doSignOut = async () => {
		return await this.auth.signOut();
	};

	doPasswordUpdate = async (password) => {
		return await this.auth.currentUser.updatePassword(password);
	};

	doNamesChange = async (firstName, lastName) => {
		return await this.auth.currentUser.updateProfile({displayName: `${firstName} ${lastName}`})
	}


}

export default Firebase;
