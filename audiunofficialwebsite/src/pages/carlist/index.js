import React, { useState, useEffect, useContext, useMemo } from 'react';
import FirebaseContext from '../../utils/firebase/firebaseContext';
import Slideshow from '../../components/carlist-components/slideshow';
import Navtabs from '../../components/carlist-components/navtabs';
import Overview from '../../components/carlist-components/overview'
import TechnicalData from '../../components/carlist-components/technicalData'
import Dimensions from '../../components/carlist-components/dimensions'
import Interior from '../../components/carlist-components/interior'
import Extras from '../../components/carlist-components/extras'
import PriceList from '../../components/carlist-components/priceList'

const Carlist = () => {
	const firebase = useContext(FirebaseContext);
	const [car, setCar] = useState([]);

	const renderCar = useMemo(() => {
		return car.modelName !== undefined ? (
			<div>
				<Slideshow pictures={car.pictures} />
				<div className='container-fluid mb-5'>
					<div className='container-fluid m-2 p-5 border shadow-lg'>
						<Navtabs />
						<div className='tab-content'>
							<Overview overview={car.overview} />
							<TechnicalData technicalData={car.technicalData} />
							<Dimensions dimensions={car.dimensions} />
							<Interior interior={car.interior} />
							<Extras extras={car.extras} />
							<PriceList pricelist={car.pricelist} />
						</div>
					</div>
				</div>
			</div>
		) : ( ''
		);
	}, [car]);

	useEffect(() => {
		const unsub = firebase.db
			.collection('cars')
			.where('modelName', '==', 'Q2')
			.get()
			.then((snap) => {
				snap.forEach(async (doc) => {
					setCar({ ...doc.data() });
				});
			});
		return () => {
			unsub();
		};
	}, [firebase.db]);

	return (
		<div>{renderCar}</div>
	);
};

export default Carlist;
