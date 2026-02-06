import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // ← 🔹 import routera
import App from './App.jsx';
import './index.scss';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router>
			<ScrollToTop />
			<App />
		</Router>
	</StrictMode>,
);
