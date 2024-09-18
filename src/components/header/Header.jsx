import s from './Header.module.scss';
import Hamburger from './Hamburger/Hamburger';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import LogActions from './LogActions/LogActions';

function Header() {
	return (
		<header className={s.headerContainer}>
			<Logo></Logo>
			<Hamburger></Hamburger>
			<Menu></Menu>
			<LogActions></LogActions>
		</header>
	);
}

export default Header;
