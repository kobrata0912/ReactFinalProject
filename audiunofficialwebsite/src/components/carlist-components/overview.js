import React from 'react';

const Overview = (props) => {
	return (
		<div className='tab-pane container active col-12 border' id='overview'>
			<h1 className='display-3 justify-content-center d-flex'>
				{props.overview.overviewHeader}
			</h1>
			<h3>
				<small>{props.overview.overviewDescription}</small>
			</h3>
			<br />
			{props.overview.description.map((paragraph, index) => {
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

export default Overview;
