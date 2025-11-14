import logo from '../../../assets/logo.png';
import s from './Logo.module.scss';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function Logo() {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	return (
		<>
			{isHomePage ? (
				<a href='/' className={s.logo} aria-label='Go to home page'>
					<img className={s.logoIcon} src={logo} alt='EasyTranslator Logo brand' />
				</a>
			) : (
				<RouterLink to='/' className={s.logo} aria-label='Go to home page'>
					<img className={s.logoIcon} src={logo} alt='EasyTranslator Logo brand' />
				</RouterLink>
			)}
		</>
	);
}

export default Logo;
