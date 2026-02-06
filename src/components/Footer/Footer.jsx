import FooterCopyright from './FooterCopyright.jsx';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import s from './Footer.module.scss';

export default function Footer() {
	return (
		<>
			<section className={s.container}>
				<div className={s.wrapper}>
					<div className={s.footerBrand}>

						{/*Back to home main */}
						{useLocation().pathname === '/' ? (
							<ScrollLink
								to='home'
								smooth={true}
								duration={300}
								easing='easeInOutCubic'
								aria-label='back to top'
								title='Back to top'
								className={s.footerBrand__link}>
								<img className={s.footerBrand__logo} src={logo} alt='EasyTranslator Logo Brand' />
							</ScrollLink>
						) : (
							<RouterLink to='/' state={{ scrollTo: 'home' }}>
								<img className={s.footerBrand__logo} src={logo} alt='EasyTranslator Logo Brand' />
							</RouterLink>
						)}
					</div>
					<div className={s.linkGroup}>
						<div className={s.linkGroup__containerLinks}>
							<div className={s.linkGroup__first}>
								<h2 className={s.linkGroup__title}>About</h2>
								<div className={s.linkGroup__links}>
									<ul className={s.linkGroup__orderList}>

										{/*Back to home main */}
										<li className={s.linkGroup__orderItem}>
											{useLocation().pathname === '/' ? (
												<ScrollLink to='home' smooth={true} duration={300} easing='easeInOutCubic'>
													EasyTranslator
												</ScrollLink>
											) : (
												<RouterLink to='/' state={{ scrollTo: 'home' }}>
													EasyTranslator
												</RouterLink>
											)}
										</li>

										{/*Back to price-list main */}
										<li className={s.linkGroup__orderItem}>
											{useLocation().pathname === '/' ? (
												<ScrollLink to='price-list' smooth={true} duration={300} easing='easeInOutCubic'>
													Translation Offers
												</ScrollLink>
											) : (
												<RouterLink to='/' state={{ scrollTo: 'price-list' }}>
													Translation Offers
												</RouterLink>
											)}
										</li>
									</ul>
								</div>
							</div>
							<div className={s.linkGroup__second}>
								<h2 className={s.linkGroup__title}>Follow us</h2>
								<div className={s.linkGroup__links}>
									<ul className={s.linkGroup__orderList}>
										<li>
											<a href='https://github.com/ThePioter18' target='_blank' rel='noopener noreferrer'>
												<i className='ti ti-brand-github-filled'></i>
												GitHub
											</a>
										</li>
										<li>
											<a href='https://discord.gg/BREvnZf9' target='_blank' rel='noopener noreferrer'>
												<i className='ti ti-brand-discord-filled'></i>
												Discord
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className={s.linkGroup__third}>
								<h2 className={s.linkGroup__title}>Legal</h2>
								<div className={s.linkGroup__links}>
									<ul className={s.linkGroup__orderList}>
										<li>
											<RouterLink to='/legal'>Legal</RouterLink>
										</li>

										<li>
											<RouterLink to='/privacy-policy'>Privacy Policy</RouterLink>
										</li>

										<li>
											<RouterLink to='/terms-and-conditions'>Terms & Conditions</RouterLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={s.footerDivider}>
					<hr className={s.footerDivider__solidLine}></hr>
				</div>

				<div className={s.linkGroup__socialmedia}>
					<h3 className={s.linkGroup__title}>Follow us</h3>
					<div className={s.linkGroup__links}>
						<ul className={s.linkGroup__orderList}>
							<li>
								<a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
									<i className='ti ti-brand-facebook'></i>
									Facebook
								</a>
							</li>
							<li>
								<a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
									<i className='ti ti-brand-instagram'></i>
									Instagram
								</a>
							</li>
							<li>
								<a href='https://x.com/' target='_blank' rel='noopener noreferrer'>
									<i className='ti ti-brand-x'></i>
									Twitter
								</a>
							</li>
							<li>
								<a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer'>
									<i className='ti ti-brand-tiktok'></i>
									TikTok
								</a>
							</li>
							<li>
								<a href='https://www.behance.net/piotrekrucced7' target='_blank' rel='noopener noreferrer'>
									<i className='ti ti-brand-behance'></i>
									Behance
								</a>
							</li>
						</ul>
					</div>
					<FooterCopyright />
				</div>
			</section>
		</>
	);
}
