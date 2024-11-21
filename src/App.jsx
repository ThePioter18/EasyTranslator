import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import HowToTranslateSection from './components/HowToTranslateSection/HowToTranslateSection';
import LanguageSection from './components/LanguageSection/LanguageSection';
import PriceSection from './components/PriceSection/PriceSection';

function App() {
	return (
		<>
			<Header></Header>
			<Home></Home>
			<LanguageSection></LanguageSection>
			<HowToTranslateSection></HowToTranslateSection>
			<PriceSection></PriceSection>
		</>
	);
}

export default App;
