import React from 'react'
import Header from '../header'
import Navigation from '../navigation'

const PageLayout = (props) => {

    return (
        <React.Fragment>
            <Header />
            <Navigation />
            {props.children}
        </React.Fragment>
    )
}

export default PageLayout