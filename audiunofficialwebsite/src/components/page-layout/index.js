import React from 'react'
import Header from '../header'
import Navigation from '../navigation'
import { FirebaseContext } from '../../utils/firebase'

const PageLayout = (props) => {

    return (
        <React.Fragment>
            <Header />
            <FirebaseContext.Consumer>
            {firebase => <Navigation firebase={firebase} />}
            </FirebaseContext.Consumer>
            {props.children}
        </React.Fragment>
    )
}

export default PageLayout