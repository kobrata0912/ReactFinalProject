import React, { useState, useContext, useEffect, useMemo } from 'react';
import FirebaseContext from '../../utils/firebase/firebaseContext';

import Slideshow from '../../components/configurator/slideshow';
import InputForm from '../../components/configurator/inputForm'

const Configurator = () => {
	const firebase = useContext(FirebaseContext);
	const [availableConfig, setAvailableConfig] = useState([]);
	const [currentConfig, setCurrentConfig] = useState([]);

	const renderConfigurator = useMemo(() => {
		if (availableConfig[0] !== undefined) {
			return (<>
            <Slideshow mainPicture={availableConfig[0].mainPicture} />
            <InputForm {...availableConfig[0]} currentConfig={currentConfig} setCurrentConfig={setCurrentConfig} />
            </>
            );
		}
		return;
	}, [availableConfig, currentConfig, setCurrentConfig]);

	useEffect(() => {
		const unsub = firebase.db
			.collection('configurator')
			.onSnapshot((snapshot) => {
				const availableConfigFromDb = snapshot.docs.map((doc) => ({
					...doc.data(),
				}));
				setAvailableConfig(availableConfigFromDb);
			});
		return () => {
			unsub();
		};
	}, [firebase.db]);

	return <div className='container-fluid'>{renderConfigurator}</div>;
};

export default Configurator;
