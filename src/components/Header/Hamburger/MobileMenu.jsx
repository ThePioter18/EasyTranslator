import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import closeIcon from '../../../assets/close.svg';
import s from './MobileMenu.module.scss';
import Logo from '../Logo/Logo';

function MobileMenu({ clickToggleHandler }) {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
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
						{isHomePage ? (
							<ScrollLink
								onClick={clickToggleHandler}
								to='languages'
								smooth={true}
								duration={300}
								easing='easeInOutCubic'>
								Languages
							</ScrollLink>
						) : (
							<RouterLink onClick={clickToggleHandler} to='/' state={{ scrollTo: 'languages' }}>
								Languages
							</RouterLink>
						)}
					</li>
					<li className={s.container__menuList__menuItem}>
						{isHomePage ? (
							<ScrollLink
								onClick={clickToggleHandler}
								to='translations'
								smooth={true}
								duration={300}
								easing='easeInOutCubic'>
								Translations
							</ScrollLink>
						) : (
							<RouterLink onClick={clickToggleHandler} to='/' state={{ scrollTo: 'translations' }}>
								Translations
							</RouterLink>
						)}
					</li>
					<li className={s.container__menuList__menuItem}>
						{isHomePage ? (
							<ScrollLink
								onClick={clickToggleHandler}
								to='price-list'
								smooth={true}
								duration={300}
								easing='easeInOutCubic'>
								Price list
							</ScrollLink>
						) : (
							<RouterLink onClick={clickToggleHandler} to='/' state={{ scrollTo: 'price-list' }}>
								Price list
							</RouterLink>
						)}
					</li>
					<li className={s.container__menuList__menuItem}>
						{isHomePage ? (
							<ScrollLink
								onClick={clickToggleHandler}
								to='contact-form'
								smooth={true}
								duration={300}
								easing='easeInOutCubic'>
								Contact
							</ScrollLink>
						) : (
							<RouterLink onClick={clickToggleHandler} to='/' state={{ scrollTo: 'contact-form' }}>
								Contact
							</RouterLink>
						)}
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
