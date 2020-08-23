import React, { useState, useContext, useEffect, useMemo } from 'react';
import FirebaseContext from '../../utils/firebase/firebaseContext';
import UserContext from '../../utils/userContext';
import OneConfiguration from './oneConfiguration';
import NoConfigurations from './noConfigurations';

const ConfigurationsChange = () => {
	const firebase = useContext(FirebaseContext);
	const userContext = useContext(UserContext);
	const [configurations, setConfigurations] = useState([]);

	const renderConfigurations = useMemo(() => {
		if (configurations.length === 0) {
			return <NoConfigurations />;
		}
		return configurations.map((oneConfiguration, index) => {
			return <OneConfiguration key={oneConfiguration.id} index={index} {...oneConfiguration} />;
		});
	}, [configurations]);

	useEffect(() => {
		const unsub = firebase.db
			.collection('configurations')
			.where('creator', '==', userContext.user.user.email)
			.onSnapshot((snapshot) => {
				const allConfigurations = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setConfigurations(allConfigurations);
			});

		return () => {
			unsub();
		};
	}, [firebase.db, userContext.user.user.email]);

	return (
		<div className='col-lg-5 p-2 m-1 border'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-12 justify-content-center d-flex'>
						<h4>Вашите конфигурации</h4>
					</div>
				</div>
				{renderConfigurations}
			</div>
		</div>
	);
};

export default ConfigurationsChange;
