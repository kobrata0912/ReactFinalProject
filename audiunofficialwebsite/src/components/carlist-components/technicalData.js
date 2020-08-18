import React from 'react';

const TechnicalData = (props) => {
	return (
		<div className='tab-pane container fade col-12 border' id='technicalData'>
			<h1 className='display-3 justify-content-center d-flex'>
				{props.technicalData.technicalDataHeader}
			</h1>
			<h3>
				<small>{props.technicalData.technicalDataDescription}</small>
			</h3>

			{props.technicalData.description.map((paragraph, index) => {
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

export default TechnicalData;
