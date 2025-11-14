import s from './Footer.module.scss';

export default function sFooterCopyright() {
	const brand = 'EasyTranslator';
	return (
		<div className={s.footerCopyright}>
			<div className={s.footerCopyright__text}>
				<p className={s.footerCopyright__text__year}>
					&copy; {new Date().getFullYear()} {brand}. All rights reserved. <br></br>
				</p>
				<p className={s.footerCopyright__text__repo}>
					<span>Created by </span>
					<a href='https://github.com/ThePioter18' target='_blank' rel='noopener noreferrer'>
						<i className='ti ti-brand-github'></i> PiotrWebWorks
					</a>
					|
					<a href='https://github.com/ThePioter18/EasyTranslator' target='_blank' rel='noopener noreferrer'>
						<i className='ti ti-code'></i> Repository
					</a>
				</p>
			</div>
		</div>
	);
}
