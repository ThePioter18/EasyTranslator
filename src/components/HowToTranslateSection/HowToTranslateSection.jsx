import s from './HowToTranslateSection.module.scss';
import pdfIcon from '../../assets/file-plus.svg';
import flagIcon from '../../assets/flag.svg';
import clockIcon from '../../assets/clock.svg';
import sendIcon from '../../assets/send.svg';

function HowToTranslateSection() {
	return (
		<>
			<div className={s.howToTranslateSection__container} id='translations'>
				<h2 className={s.howToTranslateSection__container__title}>What steps to take to translate your document</h2>
				<div className={s.howToTranslateSection__wrapper}>
					<ul className={s.howToTranslateSection__list}>
						<li className={s.howToTranslateSection__list__item}>
							<div className={s.howToTranslateSection__list__item__icon}>
								<img className={s.howToTranslateSection__list__item__icon__img} src={pdfIcon} alt='document icon' />
							</div>
							<div className={s.howToTranslateSection__list__item__text}>
								<h3 className={s.howToTranslateSection__list__item__text__title}>1. Upload your document</h3>
								<p className={s.howToTranslateSection__list__item__text__description}>
									You send us a word document with the text to be translated by email. If they are paper documents, you
									can send us a scan or a clear photo of the document to be translated by email.
								</p>
								<p className={s.howToTranslateSection__list__item__text__email}>
									Our email: <span>easytranslator@gmail.com</span>
								</p>
							</div>
						</li>

						<li className={s.howToTranslateSection__list__item}>
							<div className={s.howToTranslateSection__list__item__icon}>
								<img
									className={
										s.howToTranslateSection__list__item__icon__img +
										' ' +
										s.howToTranslateSection__list__item__icon__img_other
									}
									src={flagIcon}
									alt='flag icon'
								/>
							</div>
							<div className={s.howToTranslateSection__list__item__text}>
								<h3 className={s.howToTranslateSection__list__item__text__title}>2. Choose your target language</h3>
								<p className={s.howToTranslateSection__list__item__text__description}>
									You must indicate to us the language into which we are to translate your document. It is best to
									include this information in an email along with the document to be translated.
								</p>
							</div>
						</li>
						<li className={s.howToTranslateSection__list__item}>
							<div className={s.howToTranslateSection__list__item__icon}>
								<img
									className={
										s.howToTranslateSection__list__item__icon__img +
										' ' +
										s.howToTranslateSection__list__item__icon__img_other
									}
									src={clockIcon}
									alt='clock icon'
								/>
							</div>
							<div className={s.howToTranslateSection__list__item__text}>
								<h3 className={s.howToTranslateSection__list__item__text__title}>3. Valuation</h3>
								<p className={s.howToTranslateSection__list__item__text__description}>
									Within 30 minutes you will receive a free quote from us with lead time information and online payment
									details.
								</p>
							</div>
						</li>
						<li className={s.howToTranslateSection__list__item}>
							<div className={s.howToTranslateSection__list__item__icon}>
								<img className={s.howToTranslateSection__list__item__icon__img} src={sendIcon} alt='send icon' />
							</div>
							<div className={s.howToTranslateSection__list__item__text}>
								<h3 className={s.howToTranslateSection__list__item__text__title}>4. Translate your document</h3>
								<p className={s.howToTranslateSection__list__item__text__description}>
									We send the finished translation to your email address.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default HowToTranslateSection;
