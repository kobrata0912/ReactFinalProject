import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from './router';
import PageLayout from './components/page-layout';

ReactDOM.render(
	<React.StrictMode>
		<App>
			<BrowserRouter>
				<PageLayout>
					<MyRouter />
				</PageLayout>
			</BrowserRouter>
		</App>
	</React.StrictMode>,
	document.getElementById('root')
);
