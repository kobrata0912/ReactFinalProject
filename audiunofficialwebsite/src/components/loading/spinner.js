import React, { useContext } from 'react';
import { Ripple } from 'react-css-spinners';
import LoadingContext from '../../utils/loadingContext';
import styles from './spinner.module.css'

const Spinner = ({ children }) => {
	const { shouldBeLoading } = useContext(LoadingContext);
	return (
		<>
			{shouldBeLoading ? (
				<div className='container-fluid'>
					<div className='row align-items-center'>
						<div className={`col ${styles.loader}`}>
						<div className='d-flex justify-content-center '>
							<Ripple color='#d36ac2' size={165} thickness={12} />
						</div>
						</div>
					</div>
				</div>
			) : (
				children
			)}
		</>
	);
};

export default Spinner;
