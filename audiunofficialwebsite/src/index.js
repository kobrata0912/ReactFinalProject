import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from './router';
import PageLayout from './components/page-layout';
import Firebase, { FirebaseContext } from './utils/firebase';

ReactDOM.render(
	<React.StrictMode>
		<FirebaseContext.Provider value={new Firebase()}>
			<FirebaseContext.Consumer>
			{firebase => <App firebase={firebase}>
				<BrowserRouter>
					<PageLayout>
						<MyRouter />
					</PageLayout>
				</BrowserRouter>
			</App>
			}
			</FirebaseContext.Consumer>
		</FirebaseContext.Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
