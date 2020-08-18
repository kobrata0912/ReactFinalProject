import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/aboutus';
import Contacts from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import News from './pages/news';
import Configurator from './pages/configurator';
import Repairs from './pages/repairs';
import Carlist from './pages/carlist';
import Error from './pages/error';

const MyRouter = () => {
	return (
		<Switch>
			<Route path='/home' exact component={Home} />
			<Route path='/aboutus' component={About} />
			<Route path='/contacts' component={Contacts} />
			<Route path='/user/login' component={Login} />
			<Route path='/user/register' component={Register} />
			<Route path='/user/profile/' component={Profile} />
			<Route path='/news' component={News} />
			<Route path='/configurator' component={Configurator} />
			<Route path='/repairs' component={Repairs} />
			<Route path='/models/:modelName' component={Carlist} />
			<Route path='/' component={Home} />
			<Route component={Error} />
		</Switch>
	);
};

export default MyRouter;
