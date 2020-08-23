import React, { useEffect } from 'react'
import {toast} from 'react-toastify'

const Error = (props) => {
	
    useEffect(() => {
		toast.error('There was an error loading the page, you will be redirected to the home page!')
        setTimeout(() => {
			props.history.push('/home')
		}, 3000)
    }, [props.history])

    return (
        <div className="container-fluid">
		<div className="row">
			<div className="col-12 justify-content-center d-flex">
				<h1 className="display-1">
					ERROR 404 - Page not found
				</h1>
			</div>
		</div>
		<div className="row">
			<div className="col-12 justify-content-center d-flex">
				<h3 className="display-3">
					You will be redirected to the Home Page in 3 seconds!
				</h3>
			</div>
		</div>
	</div>
    )
}

export default Error