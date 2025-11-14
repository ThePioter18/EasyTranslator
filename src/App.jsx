import { Routes, Route, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import Legal from './pages/Legal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import HowToTranslateSection from './components/HowToTranslateSection/HowToTranslateSection';
import LanguageSection from './components/LanguageSection/LanguageSection';
import PriceSection from './components/PriceSection/PriceSection';
import ClientsSection from './components/ClientsSection/ClientsSection';
import ContactFormSection from './components/ContactFormSection/ContactFormSection';
import Footer from './components/Footer/Footer';

import { useState, useEffect } from 'react';
import Toggle from './components/Toggle/Toggle';

function App() {
	const location = useLocation();

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

		if (location.state?.scrollTo) {
			const targetId = location.state.scrollTo;

			// Watch DOM until the element appears
			const observer = new MutationObserver(() => {
				const el = document.getElementById(targetId);
				const offsets = {
					languages: -80,
					translations: 700,
					'price-list': 700,
					'contact-form': 700,
				};
				if (el) {
					scroller.scrollTo(targetId, {
						duration: 300,
						smooth: true,
						easing: 'easeInOutCubic',
						offset: offsets[targetId] ?? -80,
					});
					observer.disconnect(); // stoped watching DOM
				}
			});

			// Watched all document (direct children and subtree)
			observer.observe(document.body, { childList: true, subtree: true });

			// Cleanup function to stop watching
			return () => observer.disconnect();
		}
	}, [isDarkMode, location]);

	return (
		<div className='App'>
			<Header></Header>
			<Toggle isDarkMode={isDarkMode} onToggle={handleDarkModeToggle} />

			<Routes>
				{/* Main pages */}
				<Route
					path='/'
					element={
						<>
							<Home isDarkMode={isDarkMode} onToggle={handleDarkModeToggle} />
							<LanguageSection></LanguageSection>
							<HowToTranslateSection></HowToTranslateSection>
							<PriceSection></PriceSection>
							<ClientsSection></ClientsSection>
							<ContactFormSection></ContactFormSection>
						</>
					}
				/>

				{/* Legal pages */}
				<Route path='/legal' element={<Legal />} />
				<Route path='/privacy-policy' element={<PrivacyPolicy />} />
				<Route path='/terms-and-conditions' element={<TermsAndConditions />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
