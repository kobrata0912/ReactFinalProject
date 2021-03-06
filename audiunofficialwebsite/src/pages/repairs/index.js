import React, { useContext, useState } from 'react';
import FirebaseContext from '../../utils/firebase/firebaseContext';
import UserContext from '../../utils/userContext';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingContext from '../../utils/loadingContext';

const Repairs = () => {
	const history = useHistory();
	const firebase = useContext(FirebaseContext);
	const userContext = useContext(UserContext);
	const loadingContext = useContext(LoadingContext);
	const fullName = userContext.user.user.displayName;
	const email = userContext.user.user.email;
	const [phone, setPhone] = useState('');
	const [location, setLocation] = useState('');
	const [description, setDescription] = useState('');

	const [phoneNumberValid, setPhoneNumberValid] = useState('');
	const [phoneNumberClass, setPhoneNumberClass] = useState('form-control');
	const [locationValid, setLocationValid] = useState('');
	const [locationClass, setLocationClass] = useState('custom-select mr-sm-2');
	const [descriptionValid, setDescriptionValid] = useState('');
	const [descriptionClass, setDescriptionClass] = useState('form-control');
	const isFormValid = phoneNumberValid && locationValid && descriptionValid;

	const validator = (e) => {
		switch (e.target.name) {
			case 'phoneNumber':
				{
					const validation = RegExp(/^[+0-9 ]{10,}$/).test(phone);
					if (validation) {
						setPhoneNumberValid(true);
						setPhoneNumberClass('form-control is-valid');
					} else {
						setPhoneNumberValid(false);
						setPhoneNumberClass('form-control is-invalid');
					}
				}
				break;
			case 'location':
				{
					if (location !== '') {
						setLocationValid(true);
						setLocationClass('custom-select mr-sm-2 is-valid');
					} else {
						setLocationValid(false);
						setLocationClass('custom-select mr-sm-2 is-invalid');
					}
				}
				break;
			case 'description':
				{
					if (description !== '' && description.length > 10) {
						setDescriptionValid(true);
						setDescriptionClass('form-control is-valid');
					} else {
						setDescriptionValid(false);
						setDescriptionClass('form-control is-invalid');
					}
				}
				break;
			default:
				break;
		}
	};

	const handleRepair = (event) => {
		event.preventDefault();
		loadingContext.showLoading();
		firebase.db
			.collection('repairs')
			.doc()
			.set({
				name: fullName,
				email,
				location,
				description,
				phone,
			})
			.then(() => {
				toast.success('Successfully created the Repair Inquiry');
				loadingContext.hideLoading();
				history.push('/user/profile');
			})
			.catch((e) => {
				loadingContext.hideLoading();
				toast.error(e);
			});
	};

	return (
		<div>
			<div className='container-fluid'>
				<div className='row'>
					<img
						src='/repairs/repairs-picture.jpg'
						width='100%'
						height='563px'
						className='rounded mx-auto d-block'
						alt='Repairs'
					/>
					<span className='h2 display-1 top-left'>
						<strong>Заявка за сервиз</strong>
					</span>
				</div>
			</div>

			<div className='row justify-content-center'>
				<div className='col-8 m-5 justify-content-center d-flex '>
					<div className='container'>
						<form onSubmit={handleRepair}>
							<div className='form-group row'>
								<label htmlFor='fullName' className='col-sm-2 col-form-label'>
									Имена
								</label>
								<div className='col-sm-10'>
									<input
										name='fullName'
										type='text'
										className='form-control'
										value={fullName}
										disabled
									/>
								</div>
							</div>
							<div className='form-group row'>
								<label htmlFor='email' className='col-sm-2 col-form-label'>
									{' '}
									Имейл{' '}
								</label>
								<div className='col-sm-10'>
									<input
										name='email'
										type='text'
										className='form-control'
										value={email}
										disabled
									/>
								</div>
							</div>
							<div className='form-group row'>
								<label
									htmlFor='phoneNumber'
									className='col-sm-2 col-form-label'
								>
									Телефон
								</label>
								<div className='col-sm-10'>
									<input
										name='phoneNumber'
										type='text'
										placeholder='Моля, напишете телефон за обратна връзка'
										className={phoneNumberClass}
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										onBlur={validator}
										autoComplete='off'
									/>
								</div>
							</div>
							<div className='form-group row'>
								<label htmlFor='location' className='col-sm-2 col-form-label'>
									Сервиз
								</label>
								<div className='col-sm-10'>
									<select
										name='location'
										id='inlineFormCustomSelect'
										className={locationClass}
										value={location}
										onChange={(e) => setLocation(e.target.value)}
										onBlur={validator}
									>
										<option value='' disabled>
											Изберете сервиз...
										</option>
										<option value='ПОРШЕ СОФИЯ ЗАПАД'>ПОРШЕ СОФИЯ ЗАПАД</option>
										<option value='ПОРШЕ СОФИЯ ИЗТОК'>ПОРШЕ СОФИЯ ИЗТОК</option>
										<option value='ПОРШЕ ПЛОВДИВ'>ПОРШЕ ПЛОВДИВ</option>
										<option value='ПОРШЕ ВАРНА'>ПОРШЕ ВАРНА</option>
										<option value='АВТОХИТ 2000'>АВТОХИТ 2000</option>
										<option value='ВЕСТАУТО - М'>ВЕСТАУТО - М</option>
										<option value='АВТОТЕХНИКА - ПМ ЕООД'>
											АВТОТЕХНИКА - ПМ ЕООД
										</option>
										<option value='ХОБИ КАР ЕООД'>ХОБИ КАР ЕООД</option>
										<option value='АВТОЧОЙС'>АВТОЧОЙС</option>
									</select>
								</div>
							</div>
							<div className='form-group'>
								<div className='row'>
									<label
										htmlFor='description'
										className='col-sm-2 col-form-label'
									>
										Повреда
									</label>
									<div className='col-sm-10'>
										<textarea
											name='description'
											rows='3'
											placeholder='Моля, опишете накратко повредите по автомобила'
											className={descriptionClass}
											value={description}
											onChange={(e) => setDescription(e.target.value)}
											onBlur={validator}
										></textarea>
										{isFormValid === false ? (
											<div
												className='alert alert-danger alert-dismissible fade show'
											>
												Моля, опишете накратко повредите по автомобила
											</div>
										) : (
											''
										)}
									</div>
								</div>
							</div>
							<div className='form-group row'>
								<div className='col-sm-10'>
									<button disabled={!isFormValid} className='btn btn-primary'>Изпрати заявка</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Repairs;
