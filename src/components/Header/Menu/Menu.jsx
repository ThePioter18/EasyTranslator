import s from './Menu.module.scss';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function Menu() {
	const location = useLocation(); // sprawdzamy aktualną lokalizację (np. "/" albo "/legal")
	const isHomePage = location.pathname === '/';

	return (
		<ul className={s.menuList}>
			<li className={s.menuList__menuItem}>
				{isHomePage ? (
					<ScrollLink to='languages' smooth={true} duration={300} easing='easeInOutCubic'>
						Languages
					</ScrollLink>
				) : (
					<RouterLink to='/' state={{ scrollTo: 'languages' }}>
						Languages
					</RouterLink>
				)}
			</li>
			<li className={s.menuList__menuItem}>
				{isHomePage ? (
					<ScrollLink to='translations' smooth={true} duration={300} easing='easeInOutCubic'>
						Translations
					</ScrollLink>
				) : (
					<RouterLink to='/' state={{ scrollTo: 'translations' }}>
						Translations
					</RouterLink>
				)}
			</li>
			<li className={s.menuList__menuItem}>
				{isHomePage ? (
					<ScrollLink to='price-list' smooth={true} duration={300} easing='easeInOutCubic'>
						Price list
					</ScrollLink>
				) : (
					<RouterLink to='/' state={{ scrollTo: 'price-list' }}>
						Price list
					</RouterLink>
				)}
			</li>
			<li className={s.menuList__menuItem}>
				{isHomePage ? (
					<ScrollLink to='contact-form' smooth={true} duration={300} easing='easeInOutCubic'>
						Contact
					</ScrollLink>
				) : (
					<RouterLink to='/' state={{ scrollTo: 'contact-form' }}>
						Contact
					</RouterLink>
				)}
			</li>
		</ul>
	);
}

export default Menu;
