import React from 'react';

const PriceList = (props) => {
	return (
		<div className='tab-pane container fade col-12 border' id='priceList'>
			<h1 className='display-3 justify-content-center d-flex'>
				{props.pricelist.priceListHeader}
			</h1>
			<h3>
				<small>{props.pricelist.priceListDescription}</small>
			</h3>
			<h3>
				Свалете ценовата листа
				<a href={props.pricelist.priceListUrl}>тук</a>
			</h3>
		</div>
	);
};

export default PriceList;
