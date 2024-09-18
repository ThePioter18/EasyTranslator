import s from '../Menu/Menu.module.scss';

function Menu() {
	return (
		<ul className={s.menuList}>
			<li className={s.menuList__menuItem}>Traslations</li>
			<li className={s.menuList__menuItem}>Languages</li>
			<li className={s.menuList__menuItem}>Price list</li>
			<li className={s.menuList__menuItem}>Contact</li>
		</ul>
	);
}

export default Menu;
