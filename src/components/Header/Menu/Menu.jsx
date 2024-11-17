import s from './Menu.module.scss';
import { Link } from 'react-scroll';

function Menu() {
	return (
		<ul className={s.menuList}>
			<li className={s.menuList__menuItem}>
				<Link to='languages' smooth={true} duration={300} easing='easeInOutCubic'>
					Languages
				</Link>
			</li>
			<li className={s.menuList__menuItem}>
				<Link to='translations' smooth={true} duration={300} easing='easeInOutCubic'>
					Translations
				</Link>
			</li>
			<li className={s.menuList__menuItem}>
				<Link to='price-list' smooth={true} duration={300} easing='easeInOutCubic'>
					Price list
				</Link>
			</li>
			<li className={s.menuList__menuItem}>
				<Link to='contact' smooth={true} duration={300} easing='easeInOutCubic'>
					Contact
				</Link>
			</li>
		</ul>
	);
}

export default Menu;
