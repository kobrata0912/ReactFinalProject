import React, { useState, useContext, useEffect, useMemo } from 'react';
import FirebaseContext from '../../utils/firebase/firebaseContext';
import UserContext from '../../utils/userContext';
import OneRepair from './oneRepair';
import NoRepairs from './noRepairs';

const RepairsChange = () => {
    const firebase = useContext(FirebaseContext);
    const userContext = useContext(UserContext);
	const [repairs, setRepairs] = useState([]);


	const renderRepairs = useMemo(() => {
		if (repairs.length === 0) {
			return <NoRepairs />;
		}
		return repairs.map((oneRepair, index) => {
			return <OneRepair key={oneRepair.id} index={index} {...oneRepair} />;
		});
    }, [repairs]);


    useEffect(() => {
        const unsub = firebase.db.collection('repairs')
            .where('email', '==', userContext.user.user.email)
            .onSnapshot((snapshot) => {
                const allRepairs = snapshot.docs.map((doc) => 
                ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setRepairs(allRepairs);
            });
            return () => {
                unsub();
            };
    }, [firebase.db, userContext.user.user.email])

	return (
		<div className='col-lg-5 p-2 m-1 border'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-12 justify-content-center d-flex'>
						<h4>Вашите заявки за сервизно обслужване</h4>
					</div>
				</div>
				{renderRepairs}
			</div>
		</div>
	);
};

export default RepairsChange;
