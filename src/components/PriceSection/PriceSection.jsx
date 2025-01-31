import s from './PriceSection.module.scss';
import bronzeCoin from '../../assets/bronze-coin.png';
import silverCoin from '../../assets/silver-coin.png';
import goldCoin from '../../assets/pro-coin.png';

function PriceSection() {
	return (
		<>
			<section className={s.container} id='price-list'>
				<h2 className={s.container__title}>Price list</h2>
				<div className={s.wrapper}>
					<div className={s.card}>
						{/* === CARD 1 === */}
						<article className={s.content}>
							<div className={s.content__card_pricing}>
								<div className={s.content__card_pricing_number}>
									<span className={s.content__card_pricing_symbol}>$</span>0
								</div>
								<span className={s.content__card_pricing_month}>/month</span>
							</div>

							<header className={s.card__header}>
								<div className={s.card__header__icon}>
									<img className={s.card__header__icon_img} src={bronzeCoin} alt='icon bronze coin' />
								</div>

								<span className={s.card__header_subtitle}>Free plan</span>

								<h3 className={s.card__header_title}>Basic offert</h3>
							</header>

							<ul className={s.content__list}>
								<li className={s.content__list__item}>
									<span className={s.content__list__item__icon}>
										<i className='ti ti-check'></i>
									</span>
									<p className={s.content__list__item__text}>Translate short text (200 words)</p>
								</li>
								<li className={s.content__list__item}>
									<span className={s.content__list__item__icon}>
										<i className='ti ti-check'></i>
									</span>
									<p className={s.content__list__item__text}>Only traslate one language (English to Polish)</p>
								</li>
								<li className={s.content__list__item}>
									<span className={s.content__list__item__icon}>
										<i className='ti ti-check'></i>
									</span>
									<p className={s.content__list__item__text}>Finished translation sent within 30 minutes.</p>
								</li>
								<li className={s.content__list__item}>
									<span className={s.content__list__item__icon}>
										<i className='ti ti-check'></i>
									</span>
									<p className={s.content__list__item__text}>The free translation can be used only 3 times.</p>
								</li>
							</ul>
							<button className={s.card__btn}>Choose this plan</button>
						</article>

						{/* === CARD 2 === */}
						<article className={s.content}>
							<div className={s.content__card_pricing}>
								<div className={s.content__card_pricing_number}>
									<span className={s.content__card_pricing_symbol}>$</span>20
								</div>
								<span className={s.content__card_pricing_month}>/month</span>
							</div>

							<header className={s.card__header}>
								<div className={s.card__header__icon}>
									<img className={s.card__header__icon_img} src={goldCoin} alt='icon gold coin' />
								</div>

								<span className={s.card__header_subtitle}>Most popular</span>

								<h3 className={s.card__header_title}>Professional offert</h3>
							</header>

							<ul className={s.content__list}>
								<li className={s.content__list__item}>
									<span className={s.content__list__item__icon}>
										<i className='ti ti-check'></i>
									</span>
									<p className={s.content__list__item__text}>Translate text (1000 words)</p>
								</li>
								<li className={s.content__list__item}>
									<span className={s.content__list__item__icon}>
										<i className='ti ti-check'></i>
									</span>
									<p className={s.content__list__item__text}>
										Translation of all languages (English, Polish, German, French, Italian, Spanish)
									</p>
								</li>
								<li className={s.content__list__item}>
									<span className={s.content__list__item__icon}>
										<i className='ti ti-check'></i>
									</span>
									<p className={s.content__list__item__text}>Finished translation sent as soon as possible.</p>
								</li>
								<li className={s.content__list__item}>
									<span className={s.content__list__item__icon}>
										<i className='ti ti-check'></i>
									</span>
									<p className={s.content__list__item__text}>No translation limits.</p>
								</li>
							</ul>
							<button className={s.card__btn}>Choose this plan</button>
						</article>

						{/* === CARD 3 === */}
						<article className={s.content}>
							<div className={s.content__card_pricing}>
								<div className={s.content__card_pricing_number}>
									<span className={s.content__card_pricing_symbol}>$</span>10
								</div>
								<span className={s.content__card_pricing_month}>/month</span>
							</div>

							<header className={s.card__header}>
								<div className={s.card__header__icon}>
									<img className={s.card__header__icon_img} src={silverCoin} alt='icon silver coin' />
								</div>

								<span className={s.card__header_subtitle}>Best plan</span>

								<h3 className={s.card__header_title}>Medium plan offert</h3>
							</header>

							<ul className={s.content__list}>
								<li className={s.content__list__item}>
									<span className={s.content__list__item__icon}>
										<i className='ti ti-check'></i>
									</span>
									<p className={s.content__list__item__text}>Translate text (700 words)</p>
								</li>
								<li className={s.content__list__item}>
									<span className={s.content__list__item__icon}>
										<i className='ti ti-check'></i>
									</span>
									<p className={s.content__list__item__text}>
										Translation of all languages (English, Polish, German, French, Italian, Spanish)
									</p>
								</li>
								<li className={s.content__list__item}>
									<span className={s.content__list__item__icon}>
										<i className='ti ti-check'></i>
									</span>
									<p className={s.content__list__item__text}>Finished translation sent within 30 minutes.</p>
								</li>
								<li className={s.content__list__item}>
									<span className={s.content__list__item__icon}>
										<i className='ti ti-check'></i>
									</span>
									<p className={s.content__list__item__text}>No translation limits.</p>
								</li>
							</ul>
							<button className={s.card__btn}>Choose this plan</button>
						</article>
					</div>
				</div>
			</section>
		</>
	);
}

export default PriceSection;
