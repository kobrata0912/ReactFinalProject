import React from 'react';

const Interior = (props) => {
	return (
		<div className='tab-pane container fade col-12 border' id='interior'>
			<h1 className='display-3 justify-content-center d-flex'>
				{props.interior.interiorHeader}
			</h1>
			<h3>
				<small>{props.interior.interiorDescription}</small>
			</h3>
			{props.interior.description.map((paragraph, index) => {
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

export default Interior;
