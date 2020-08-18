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
			<Route exact path='/home' component={Home} />
			<Route exact path='/aboutus' component={About} />
			<Route exact path='/contacts' component={Contacts} />
			<Route exact path='/user/login' component={Login} />
			<Route exact path='/user/register' component={Register} />
			<Route exact path='/user/profile/' component={Profile} />
			<Route exact path='/news' component={News} />
			<Route exact path='/configurator' component={Configurator} />
			<Route exact path='/repairs' component={Repairs} />
			<Route exact path='/models/:modelName' component={Carlist} />
			<Route exact path='/'  component={Home} />
			<Route component={Error} />
		</Switch>
	);
};

export default MyRouter;
