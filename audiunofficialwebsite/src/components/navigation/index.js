import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <nav
		class="navbar navbar-expand-sm bg-light navbar-light sticky-top justify-content-center border"
	>
		<ul class="navbar-nav">
			<li class="nav-item border mx-1 shadow">
                <Link to='/home' className="nav-link h4">Начало</Link> 
			</li>
			<li class="nav-item dropdown mx-1 shadow">
				<a
					class="nav-link dropdown-toggle h4"
					id="navbardrop"
					data-toggle="dropdown"
				>
					Модели
				</a>
				<div class="dropdown-menu">
                    <Link to='/models/Q2' className="dropdown-item">Q2</Link>
                    <Link to='/models/Q3' className="dropdown-item">Q3</Link>
				</div>
			</li>
			<li class="nav-item mx-1 shadow">
                <Link to='/configurator' className="nav-link h4">Конфигуратор</Link>
			</li>
			<li class="nav-item mx-1 shadow">
                <Link to='/repairs' className="nav-link h4">Заявка за сервиз</Link>
			</li>
			<li class="nav-item mx-1 shadow">
                <Link to='/news' className="nav-link h4">Новини</Link>
			</li>
			<li class="nav-item mx-1 shadow">
                <Link to='/aboutus' className="nav-link h4">За нас</Link>
			</li>
			<li class="nav-item mx-1 shadow">
                <Link to='/contacts' className="nav-link h4">Контакти</Link>
			</li>
			<li class="nav-item mx-1 shadow">
                <Link to='/user/login' className="nav-link h4">Вход</Link>
			</li>
			<li class="nav-item mx-1 shadow">
                <Link to='/user/register' className="nav-link h4">Регистрация</Link>
			</li>
			<li class="nav-item mx-1 shadow">
                <Link to='/user/profile' className="nav-link h4">Профил</Link>
			</li>
			<li class="nav-item mx-1 shadow">
				<a class="nav-link h4">Изход</a>
			</li>
		</ul>
	</nav>
    )
}

export default Navigation