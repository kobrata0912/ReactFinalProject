import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserContext from './utils/userContext';

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
	const userContext = useContext(UserContext);
	const loggedIn = userContext.user && userContext.user.loggedIn;

	return (
		<Switch>
			<Route exact path='/home' component={Home} />
			<Route exact path='/aboutus' component={About} />
			<Route exact path='/contacts' component={Contacts} />
			<Route exact path='/user/login'>
				{loggedIn ? <Redirect to='/home' /> : <Login />}
			</Route>
			<Route exact path='/user/register'>
				{loggedIn ? <Redirect to='/home' /> : <Register />}
			</Route>
			<Route exact path='/user/profile/'>
				{!loggedIn ? <Redirect to='/home' /> : <Profile />}
			</Route>
			<Route exact path='/news' component={News} />
			<Route exact path='/configurator'>
				{!loggedIn ? <Redirect to='/home' /> : <Configurator />}
			</Route>
			<Route exact path='/repairs'>
				{!loggedIn ? <Redirect to='/home' /> : <Repairs />}
			</Route>
			<Route exact path='/models/:modelName' component={Carlist} />
			<Route exact path='/' component={Home} />
			<Route component={Error} />
		</Switch>
	);
};

export default MyRouter;
