import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router';
import { SettingsProvider } from './providers/SettingsProvider';
import "./assets/styles/global.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<SettingsProvider>
			<Router />
		</SettingsProvider>
	</React.StrictMode>,
)