import closeIcon from '../../../assets/close.svg';

import s from './MobileMenu.module.scss';
import Logo from '../Logo/Logo';

function MobileMenu({ clickToggleHandler }) {
	return (
		<>
			<section className={s.container}>
				<div className={s.header}>
					<div className={s.header__logo}>
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
					<li className={s.container__menuList__menuItem}>Traslations</li>
					<li className={s.container__menuList__menuItem}>Languages</li>
					<li className={s.container__menuList__menuItem}>Price list</li>
					<li className={s.container__menuList__menuItem}>Contact</li>
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
