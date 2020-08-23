import React, { useMemo, useContext } from 'react';
import LoadingContext from '../../utils/loadingContext';
import UserContext from '../../utils/userContext';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../../utils/firebase/firebaseContext';

const InputForm = ({
	colors,
	dieselEngines,
	fuelType,
	modelName,
	petrolEngines,
	rims,
	transmission,
	currentConfig,
	setCurrentConfig,
}) => {
	const firebase = useContext(FirebaseContext);
	const loadingContext = useContext(LoadingContext);
	const userContext = useContext(UserContext);
	const history = useHistory();

	const renderFuelType = useMemo(() => {
		return fuelType.map((oneType, index) => {
			return (
				<React.Fragment key={index}>
					<div className='form-check'>
						<label className='form-check-label'>
							<input
								type='radio'
								className='form-check-input'
								name='fuelType'
								value={oneType}
								onChange={(e) =>
									setCurrentConfig({
										...currentConfig,
										fuelType: e.target.value,
									})
								}
								required
							/>
							{oneType}
						</label>
					</div>
				</React.Fragment>
			);
		});
	}, [currentConfig, setCurrentConfig, fuelType]);

	const renderTransmission = useMemo(() => {
		return transmission.map((oneType, index) => {
			return (
				<React.Fragment key={index}>
					<div className='form-check'>
						<label className='form-check-label'>
							<input
								type='radio'
								className='form-check-input'
								name='transTypeInput'
								value={oneType}
								onChange={(e) =>
									setCurrentConfig({
										...currentConfig,
										transmission: e.target.value,
									})
								}
								required
							/>
							{oneType}
						</label>
					</div>
				</React.Fragment>
			);
		});
	}, [currentConfig, setCurrentConfig, transmission]);

	const renderEngines = useMemo(() => {
		if (
			currentConfig.fuelType === 'diesel' &&
			currentConfig.transmission === 'automatic'
		) {
			return dieselEngines.map((engine, index) => {
				if (engine.engineTransmission === 'automatic') {
					return (
						<React.Fragment key={index}>
							<div className='form-check'>
								<label className='form-check-label'>
									<input
										type='radio'
										className='form-check-input'
										name='engineModel'
										value={engine.enginePower}
										required
										onChange={(e) =>
											setCurrentConfig({
												...currentConfig,
												engine: e.target.value,
												price: Number(engine.basePrice),
											})
										}
									/>
									{`${engine.engineName} ${engine.enginePower}`}
									{` - Base Price: ${engine.basePrice}  лв`}
								</label>
							</div>
						</React.Fragment>
					);
				}
				return '';
			});
		} else if (
			currentConfig.fuelType === 'diesel' &&
			currentConfig.transmission === 'manual'
		) {
			return dieselEngines.map((engine, index) => {
				if (engine.engineTransmission === 'manual') {
					return (
						<React.Fragment key={index}>
							<div className='form-check'>
								<label className='form-check-label'>
									<input
										type='radio'
										className='form-check-input'
										name='engineModel'
										value={engine.enginePower}
										required
										onChange={(e) =>
											setCurrentConfig({
												...currentConfig,
												engine: e.target.value,
												price: Number(engine.basePrice),
											})
										}
									/>
									{`${engine.engineName} ${engine.enginePower}`}
									{` - Base Price: ${engine.basePrice}  лв`}
								</label>
							</div>
						</React.Fragment>
					);
				}
				return '';
			});
		} else if (
			currentConfig.fuelType === 'petrol' &&
			currentConfig.transmission === 'automatic'
		) {
			return petrolEngines.map((engine, index) => {
				if (engine.engineTransmission === 'automatic') {
					return (
						<React.Fragment key={index}>
							<div className='form-check'>
								<label className='form-check-label'>
									<input
										type='radio'
										className='form-check-input'
										name='engineModel'
										value={engine.enginePower}
										required
										onChange={(e) =>
											setCurrentConfig({
												...currentConfig,
												engine: e.target.value,
												price: Number(engine.basePrice),
											})
										}
									/>
									{`${engine.engineName} ${engine.enginePower}`}
									{` - Base Price: ${engine.basePrice}  лв`}
								</label>
							</div>
						</React.Fragment>
					);
				}
				return '';
			});
		} else if (
			currentConfig.fuelType === 'petrol' &&
			currentConfig.transmission === 'manual'
		) {
			return petrolEngines.map((engine, index) => {
				if (engine.engineTransmission === 'manual') {
					return (
						<React.Fragment key={index}>
							<div className='form-check'>
								<label className='form-check-label'>
									<input
										type='radio'
										className='form-check-input'
										name='engineModel'
										value={engine.enginePower}
										required
										onChange={(e) =>
											setCurrentConfig({
												...currentConfig,
												engine: e.target.value,
												price: Number(engine.basePrice),
											})
										}
									/>
									{`${engine.engineName} ${engine.enginePower}`}
									{` - Base Price: ${engine.basePrice} лв`}
								</label>
							</div>
						</React.Fragment>
					);
				}
				return '';
			});
		}
	}, [currentConfig, setCurrentConfig, petrolEngines, dieselEngines]);

	const renderColors = useMemo(() => {
		return colors.map((oneType, index) => {
			return (
				<React.Fragment key={index}>
					<div className='form-check'>
						<label className='form-check-label'>
							<input
								type='radio'
								className='form-check-input'
								name='transTypeInput'
								value={oneType.colorName}
								onChange={(e) =>
									setCurrentConfig({
										...currentConfig,
										color: e.target.value,
										price: currentConfig.price + Number(oneType.price),
									})
								}
								required
							/>
							{oneType.colorName}
							{` - Price: ${oneType.price} лв`}
						</label>
					</div>
				</React.Fragment>
			);
		});
	}, [currentConfig, setCurrentConfig, colors]);

	const renderRims = useMemo(() => {
		return rims.map((oneType, index) => {
			return (
				<React.Fragment key={index}>
					<div className='form-check'>
						<label className='form-check-label'>
							<input
								type='radio'
								className='form-check-input'
								name='transTypeInput'
								value={oneType.rimsName}
								onChange={(e) =>
									setCurrentConfig({
										...currentConfig,
										rims: e.target.value,
										price: currentConfig.price + Number(oneType.price),
									})
								}
								required
							/>
							{oneType.rimsName}
							{` - Price: ${oneType.price} лв`}
						</label>
					</div>
				</React.Fragment>
			);
		});
	}, [currentConfig, setCurrentConfig, rims]);

	const handleSubmit = (event) => {
		event.preventDefault();
		loadingContext.showLoading();
		firebase.db
			.collection('configurations')
			.doc()
			.set({
				creator: userContext.user.user.email,
				fuelType: currentConfig.fuelType,
				transmission: currentConfig.transmission,
				engine: currentConfig.engine,
				color: currentConfig.color,
				rims: currentConfig.rims,
				price: currentConfig.price,
			})
			.then(() => {
				toast.success('Successfully created the Configuration');
				loadingContext.hideLoading();
				history.push('/user/profile');
			})
			.catch((e) => {
				loadingContext.hideLoading();
				toast.error(e);
			});
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className='row justify-content-center d-flex'>
				<div className='col-md-5 justify-content-center d-flex'>
					<div className='container justify-content-center d-flex'>
						<h2 className='display-4'>{modelName}</h2>
					</div>
				</div>

				<div className='col-md-10 mt-2  mb-2 p-4 shadow-sm justify-content-left d-flex'>
					<div className='container justify-content-center d-flex'>Гориво</div>

					<div className='container'>{renderFuelType}</div>
				</div>
				{currentConfig.fuelType !== undefined ? (
					<div className='col-md-10 mt-2 p-4 shadow-sm justify-content-left d-flex'>
						<div className='container justify-content-center d-flex'>
							Трансмисия
						</div>

						<div className='container'>{renderTransmission}</div>
					</div>
				) : (
					''
				)}
				{currentConfig.transmission !== undefined ? (
					<div className='col-md-10 mt-2 p-4 shadow-sm justify-content-left d-flex'>
						<div className='container justify-content-center d-flex'>
							Двигател
						</div>
						<div className='container'>{renderEngines}</div>
					</div>
				) : (
					''
				)}
				{currentConfig.engine !== undefined ? (
					<div className='col-md-10 mt-2 p-4 shadow-sm justify-content-left d-flex'>
						<div className='container justify-content-center d-flex'>Цвят</div>
						<div className='container'>{renderColors}</div>
					</div>
				) : (
					''
				)}
				{currentConfig.color !== undefined ? (
					<div className='col-md-10 mt-2 p-4 shadow-sm justify-content-left d-flex'>
						<div className='container justify-content-center d-flex'>Джанти</div>
						<div className='container'>{renderRims}</div>
					</div>
				) : (
					''
				)}

				<div className='col-md-10 mt-2 p-4 shadow-sm justify-content-left d-flex'>
					<div className='container justify-content-center d-flex'>Цена</div>
					<div className='container'>Обща цена: {currentConfig.price} лв</div>
				</div>

                {
                currentConfig.rims !== undefined ? (
                    <button className='btn btn-primary'>Създай конфигурация</button>
                ) : ''
                }
			</div>
		</form>
	);
};

export default InputForm;
