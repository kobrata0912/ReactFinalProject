import React from 'react';

const Extras = (props) => {
	return (
		<div className='tab-pane container fade col-12 border' id='extras'>
			<h1 className='display-3 justify-content-center d-flex'>
				{props.extras.extrasHeader}
			</h1>
			<h3>
				<small>{props.extras.extrasDescription}</small>
			</h3>

			{props.extras.description.map((paragraph, index) => {
				return (
					<div key={index}>
						<h1 className='display-4 justify-content-center d-flex'>
							{paragraph.heading}
						</h1>
						<h3>
							<small>{paragraph.description}</small>
						</h3>
					</div>
				);
			})}
		</div>
	);
};

export default Extras;
