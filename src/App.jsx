import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import HowToTranslateSection from './components/HowToTranslateSection/HowToTranslateSection';
import LanguageSection from './components/LanguageSection/LanguageSection';
import PriceSection from './components/PriceSection/PriceSection';
import ClientsSection from './components/ClientsSection/ClientsSection';

import { useState, useEffect } from 'react';
import Toggle from './components/Toggle/Toggle';

function App() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = localStorage.getItem('dark-mode');
		return savedMode ? JSON.parse(savedMode) : false;
	});

	const handleDarkModeToggle = enabled => {
		setIsDarkMode(enabled);
		localStorage.setItem('dark-mode', JSON.stringify(enabled));
	};

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}, [isDarkMode]);

	return (
		<div className='App'>
			<Header></Header>
			<Toggle isDarkMode={isDarkMode} onToggle={handleDarkModeToggle} />
			<Home isDarkMode={isDarkMode} onToggle={handleDarkModeToggle} />
			<LanguageSection></LanguageSection>
			<HowToTranslateSection></HowToTranslateSection>
			<PriceSection></PriceSection>
			<ClientsSection></ClientsSection>
		</div>
	);
}

export default App;
