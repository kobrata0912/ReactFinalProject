import React from 'react';

const Slideshow = (props) => {
	return (
		<div className='row justify-content-center d-flex mt-4'>
			<div
				name='carPicture'
				className='col-md-10 justify-content-center d-flex'
			>
				<div id='carPictures' className='carousel slide' data-ride='carousel'>
					<div className='carousel-inner'>
                    <div className='carousel-item active'>
						<img src={props.mainPicture} alt='Los Angeles' />
					</div>
                        </div>

					<a
						className='carousel-control-prev'
						href='#carPictures'
						data-slide='prev'
					>
						<span className='carousel-control-prev-icon'></span>
					</a>
					<a
						className='carousel-control-next'
						href='#carPictures'
						data-slide='next'
					>
						<span className='carousel-control-next-icon'></span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Slideshow;
