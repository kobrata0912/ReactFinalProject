import React from 'react';

const Navtabs = () => {
	return (
		<ul className='nav nav-tabs p-1'>
			<li className='nav-item'>
				<a className='nav-link active' data-toggle='tab' href='#overview'>
					Преглед
				</a>
			</li>
			<li className='nav-item'>
				<a className='nav-link' data-toggle='tab' href='#technicalData'>
					Технически данни
				</a>
			</li>
			<li className='nav-item'>
				<a className='nav-link' data-toggle='tab' href='#dimensions'>
					Размери
				</a>
			</li>
			<li className='nav-item'>
				<a className='nav-link' data-toggle='tab' href='#interior'>
					Интериор
				</a>
			</li>
			<li className='nav-item'>
				<a className='nav-link' data-toggle='tab' href='#extras'>
					Оборудване
				</a>
			</li>
			<li className='nav-item'>
				<a className='nav-link' data-toggle='tab' href='#priceList'>
					Ценова Листа
				</a>
			</li>
		</ul>
	);
};

export default Navtabs;
