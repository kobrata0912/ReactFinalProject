import React from 'react';

const Slideshow = (props) => {
	return (
		<div id='carModel' className='carousel slide' data-ride='carousel'>
			<div className='carousel-inner'>
				{props.pictures.map((picture, index) => {
					return (
						<div
							key={index}
							index={index}
							className={index === 0 ? 'carousel-item active' : 'carousel-item'}
						>
							<img
								className='d-block mx-auto'
								src={picture}
								width='2000px'
								height='563px'
								alt='Audi'
							/>
						</div>
					);
				})}
			</div>
			<a className='carousel-control-prev' href='#carModel' data-slide='prev'>
				<span className='carousel-control-prev-icon'></span>
			</a>
			<a className='carousel-control-next' href='#carModel' data-slide='next'>
				<span className='carousel-control-next-icon'></span>
			</a>
		</div>
	);
};

export default Slideshow;
