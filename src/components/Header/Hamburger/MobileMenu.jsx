import { Link } from 'react-scroll';
import closeIcon from '../../../assets/close.svg';
import s from './MobileMenu.module.scss';
import Logo from '../Logo/Logo';

function MobileMenu({ clickToggleHandler }) {
	return (
		<>
			<section className={s.container}>
				<div className={s.header}>
					<div className={s.header__logo} onClick={clickToggleHandler}>
						<Logo></Logo>
					</div>

					<img
						onClick={clickToggleHandler}
						className={s.header__closeIcon}
						src={closeIcon}
						alt='hamburger close icons'
					/>
				</div>
				<ul className={s.container___menuList}>
					<li className={s.container__menuList__menuItem}>
						<Link onClick={clickToggleHandler} to='languages' smooth={true} duration={300} easing='easeInOutCubic'>
							Languages
						</Link>
					</li>
					<li className={s.container__menuList__menuItem}>
						<Link onClick={clickToggleHandler} to='translations' smooth={true} duration={300} easing='easeInOutCubic'>
							Traslations
						</Link>
					</li>
					<li className={s.container__menuList__menuItem}>
						<Link onClick={clickToggleHandler} to='price-list' smooth={true} duration={300} easing='easeInOutCubic'>
							Price list
						</Link>
					</li>
					<li className={s.container__menuList__menuItem}>
						<Link onClick={clickToggleHandler} to='contact-form' smooth={true} duration={300} easing='easeInOutCubic'>
							Contact
						</Link>
					</li>
				</ul>
				<ul className={s.container__logActionsList}>
					<li className={`${s.container__logActionsList__item} ${s.container__logActionsList__item_signup}`}>
						Sign up
					</li>
					<li className={`${s.container__logActionsList__item} ${s.container__logActionsList__item_login}`}>Log in</li>
				</ul>
			</section>
		</>
	);
}

export default MobileMenu;
