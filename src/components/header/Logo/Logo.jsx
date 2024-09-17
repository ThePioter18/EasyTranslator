import logo from '../../../assets/logo.png';
import s from '../Logo/Logo.module.scss';

function Logo() {
	return <img className={s.logoIcon} src={logo} alt='pages Logo' />;
}

export default Logo;
