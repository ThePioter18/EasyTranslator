import s from './Home.module.scss';
import smileIcon from '../../assets/smile.png';
import pencilIcon from '../../assets/pencil.png';
import calendarIcon from '../../assets/calendar.png';
import imageSide from '../../assets/mainimages.svg';

function Home({ onToggle, isDarkMode }) {
	return (
		<section className={s.container}>
			<section className={s.container__containerLeft}>
				<section className={s.container__containerLeft__top}>
					<section className={s.container__containerLeft__info}>
						<h1 className={s.container__containerLeft__info__desc}>
							Translate anything you need, all you have to do is
							<span className={s.container__containerLeft__info__desc_contactMe}> contact me</span>.<br></br>I will take
							care of the <br></br>rest
							<img className={s.container__containerLeft__info__desc_smileIcon} src={smileIcon} alt='smile icon' />
						</h1>
						<div className={s.container__containerLeft__info__pencilIcon}>
							<img className={s.container__containerLeft__info__pencilIcon__img} src={pencilIcon} alt='pencil icon' />
						</div>
					</section>
				</section>
				<section className={s.container__containerLeft__bottom}>
					<section className={s.container__containerLeft__action}>
						<div className={s.container__containerLeft__action__calendarIcon}>
							<img
								className={s.container__containerLeft__action__calendarIcon__img}
								src={calendarIcon}
								alt='calendar icon'
							/>
						</div>
						<h2 className={s.container__containerLeft__action__title}>Fast and Easy</h2>
						<p className={s.container__containerLeft__action__desc}>Contact me and let is start working together.</p>
						<button className={s.container__containerLeft__action__btn}>Get Started</button>
					</section>
				</section>
			</section>

			<section className={s.container__containerRight}>
				<section className={s.container__containerRight__iconToggleLight}>
					<p className={s.container__containerRight__iconToggleLight__sunText}>
						{isDarkMode ? 'Dark Mode Enabled' : 'Light Mode Enabled'}
					</p>

					<button
						onClick={() => onToggle(!isDarkMode)}
						className={s.container__containerRight__iconToggleLight__sunBtn}>
						☀︎
					</button>
				</section>
				<section className={s.container__containerRight__imageSide}>
					<img className={s.container__containerRight__imageSide__img} src={imageSide} alt='home page image' />
				</section>
			</section>
		</section>
	);
}

export default Home;
