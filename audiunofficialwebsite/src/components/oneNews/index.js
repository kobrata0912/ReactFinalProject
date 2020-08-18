import React from 'react';
import moment from 'moment';

const oneNews = ({ description, date, pictures, title, id }) => {
	const getDate = (value) => {
		if (value) {
			return moment.unix(String(value)).format('DD/MM/YYYY');
		}
	};
	return (
		<div className="row border-bottom">
			<p className='mx-auto mt-4 p-2 h3'>{getDate(date.seconds)}</p>
			<br />
			<p className='mx-auto h1'>{title}</p>

			{description.map((paragraph, index) => {
				return (
					<p key={index} className='justify'>
						<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
						{paragraph}
					</p>
				);
			})}

			<div
				id={'news_number' + id}
				className='carousel slide mb-3 mx-auto d-block'
				data-ride='carousel' data-interval='3000'
			>
				<div className='carousel-inner'>
					{pictures.map((picture, index) => {
						return (
							<div
								key={index}
								className={
									index === 1 ? 'carousel-item active' : 'carousel-item'
								}
							>
								<img
									className='d-block mx-auto img-fluid'
									src={picture}
									alt='Audi'
								/>
							</div>
						);
					})}
				</div>

				<a
					className='carousel-control-prev'
					href={'#news_number' + id}
					data-slide='prev'
				>
					<span className='carousel-control-prev-icon'></span>
				</a>
				<a
					className='carousel-control-next'
					href={'#news_number' + id}
					data-slide='next'
				>
					<span className='carousel-control-next-icon'></span>
				</a>
			</div>
		</div>
	);
};

export default oneNews;
