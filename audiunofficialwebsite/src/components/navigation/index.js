import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../../utils/store';

const Navigation = (props) => {
	const userContext = useContext(store);
	const {dispatch} = userContext;

	const logout = () => {
		dispatch({type: 'logout'})
	}

	return (
		<nav className='navbar navbar-expand-sm bg-light navbar-light sticky-top justify-content-center border'>
			<ul className='navbar-nav'>
				<li className='nav-item border mx-1 shadow'>
					<Link to='/home' className='nav-link h4'>
						Начало
					</Link>
				</li>
				<li className='nav-item dropdown mx-1 shadow'>
					<p
						className='nav-link dropdown-toggle h4'
						id='navbardrop'
						data-toggle='dropdown'
					>
						Модели
					</p>
					<div className='dropdown-menu'>
						<Link to='/models/Q2' className='dropdown-item'>
							Q2
						</Link>
						<Link to='/models/Q3' className='dropdown-item'>
							Q3
						</Link>
					</div>
				</li>
				<li className='nav-item mx-1 shadow'>
					<Link to='/configurator' className='nav-link h4'>
						Конфигуратор
					</Link>
				</li>
				<li className='nav-item mx-1 shadow'>
					<Link to='/repairs' className='nav-link h4'>
						Заявка за сервиз
					</Link>
				</li>
				<li className='nav-item mx-1 shadow'>
					<Link to='/news' className='nav-link h4'>
						Новини
					</Link>
				</li>
				<li className='nav-item mx-1 shadow'>
					<Link to='/aboutus' className='nav-link h4'>
						За нас
					</Link>
				</li>
				<li className='nav-item mx-1 shadow'>
					<Link to='/contacts' className='nav-link h4'>
						Контакти
					</Link>
				</li>
				{!userContext.state.loggedIn ? (
					<li className='nav-item mx-1 shadow'>
						<Link to='/user/login' className='nav-link h4'>
							Вход
						</Link>
					</li>
				) : (
					''
				)}
				{!userContext.state.loggedIn ? (
					<li className='nav-item mx-1 shadow'>
						<Link to='/user/register' className='nav-link h4'>
							Регистрация
						</Link>
					</li>
				) : (
					''
				)}
				{userContext.state.loggedIn ? (
					<li className='nav-item mx-1 shadow'>
						<Link to='/user/profile' className='nav-link h4'>
							Профил
						</Link>
					</li>
				) : (
					''
				)}
				{userContext.state.loggedIn ? (
				<li className='nav-item mx-1 shadow'>
					<p onClick={logout}className='nav-link h4'>Изход</p>
				</li>
				) : (
					''
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
