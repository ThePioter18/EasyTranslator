import { useState } from 'react';
import hamburger from '../../../assets/hamburger.svg';

import s from '../Hamburger/Hamburger.module.scss';
import MobileMenu from './MobileMenu';

function Hamburger() {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const clickToggleHandler = () => {
		setMenuOpen(prevState => !prevState);
	};

	return (
		<>
			<img onClick={clickToggleHandler} className={s.hamburgerIcon} src={hamburger} alt='hamburger icons' />

			{isMenuOpen ? <MobileMenu clickToggleHandler={clickToggleHandler} /> : null}
		</>
	);
}

export default Hamburger;
