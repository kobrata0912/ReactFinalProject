import React from 'react';

const Dimensions = (props) => {
	return (
		<div className='tab-pane container fade col-12 border' id='dimensions'>
			<h1 className='display-3 justify-content-center d-flex'>Размери</h1>
			<h3 className='display-4 justify-content-center d-flex'>
				<small>Изглед отстрани</small>
			</h3>
			<img
				className='rounded mx-auto d-block p-2'
				src={props.dimensions.sideView}
				alt='Изглед отстрани'
			/>
			<h3 className='display-4 justify-content-center d-flex'>
				<small>Изглед отгоре</small>
			</h3>
			<img
				className='rounded mx-auto d-block p-2'
				src={props.dimensions.topView}
				alt='Изглед отгоре'
			/>
			<h3 className='display-4 justify-content-center d-flex'>
				<small>Изглед отпред и отзад</small>
			</h3>
			<img
				className='rounded mx-auto d-block p-2'
                src={props.dimensions.frontAndBackView}
                alt='Изглед отпред и отзад'
			/>
		</div>
	);
};

export default Dimensions;
