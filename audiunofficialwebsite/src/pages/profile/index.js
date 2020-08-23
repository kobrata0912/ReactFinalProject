import React from 'react';
import NamesChange from '../../components/profile-components/namesChange';
import PasswordChange from '../../components/profile-components/passwordChange';
import RepairsChange from '../../components/profile-components/repairsChange';
import ConfigurationsChange from '../../components/profile-components/configurationsChange';

const Profile = () => {
	return (
		<div className='container-fluid'>
			<div className='row justify-content-center d-flex'>
				<PasswordChange />
				<ConfigurationsChange />
			</div>
			<div className='row justify-content-center d-flex'>
				<NamesChange />
				<RepairsChange />
			</div>
		</div>
	);
};

export default Profile;
