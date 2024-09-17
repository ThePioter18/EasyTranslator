import s from './Header.module.scss';
import Hamburger from './Hamburger/Hamburger';
import Logo from './Logo/Logo';

function Header() {
	return (
		<header className={s.headerContainer}>
			<Logo></Logo>
			<Hamburger></Hamburger>
		</header>
	);
}

export default Header;
