import logo from '../../../assets/logo.png';
import s from './Logo.module.scss';

function Logo() {
	return (
		<a href='#' className='logo'>
			<img className={s.logoIcon} src={logo} alt='pages Logo' />
		</a>
	);
}

export default Logo;
