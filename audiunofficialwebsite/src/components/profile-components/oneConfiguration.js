import React, { useContext } from 'react';
import FirebaseContext from '../../utils/firebase/firebaseContext';
import LoadingContext from '../../utils/loadingContext';
import { toast } from 'react-toastify';

const OneConfiguration = (props) => {
	const firebase = useContext(FirebaseContext);
	const loadingContext = useContext(LoadingContext);

	const deleteConfiguration = (event, id) => {
		event.preventDefault();
		loadingContext.showLoading();
		if (id !== undefined) {
			firebase.db
				.collection('configurations')
				.doc(id)
				.delete()
				.then(() => {
					loadingContext.hideLoading();
					toast.success('Successfully deleted the Configuration');
				})
				.catch((e) => {
                    loadingContext.hideLoading();
                    toast.error(e)
                });
		}
	};

	return (
		<div className='row'>
			<div className='col-lg-12'>
				<div className='container-fluid border shadow-sm my-2 p-2'>
					<div className='row'>
						<div className='col-lg-12 justify-content-center d-flex'>
							<h5>Модел: Q2</h5>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12 justify-content-center d-flex'>
							<h5>Гориво: {props.fuelType}</h5>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12 justify-content-center d-flex'>
							<h5>Трансмисия: {props.transmission}</h5>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12 justify-content-center d-flex'>
							<h5>Двигател: {props.engine}</h5>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12 justify-content-center d-flex'>
							<h5>Цвят: {props.color}</h5>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12 justify-content-center d-flex'>
							<h5>Джанти: {props.rims}</h5>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12 justify-content-center d-flex'>
							<h5>Цена: {props.price} лв</h5>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12 justify-content-center d-flex'>
							<button
								type='button'
								className='btn btn-primary'
								onClick={(e) => deleteConfiguration(e, props.id)}
							>
								Изтрий заявката
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OneConfiguration;
