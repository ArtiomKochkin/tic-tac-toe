import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/pages/menu/Menu";
import "./assets/styles/global.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Menu />
	</React.StrictMode>,
)
