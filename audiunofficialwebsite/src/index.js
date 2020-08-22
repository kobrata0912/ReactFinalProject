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
			<BrowserRouter>
				<App>
					<PageLayout>
						<MyRouter />
					</PageLayout>
				</App>
			</BrowserRouter>
		</FirebaseContext.Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
