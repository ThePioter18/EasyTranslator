import s from './Pages.module.scss';

export default function TermsAndConditions() {
	return (
		<main className={s.container}>
			<h1 className={s.container__title}>Terms & Conditions</h1>
			<div className={s.textContainer}>
				<p className={s.textContainer__text}>
					These Terms and Conditions govern your use of the EasyTranslator website and services. By accessing or using
					our website, you agree to these terms.
				</p>

				<h2 className={s.textContainer__title}>Use of Services</h2>
				<p className={s.textContainer__text}>
					You agree to use our website for lawful purposes only and not to infringe the rights of others.
				</p>

				<h2 className={s.textContainer__title}>Liability</h2>
				<p className={s.textContainer__text}>
					EasyTranslator shall not be held responsible for any damages arising from the use of this website or its
					content.
				</p>

				<h2 className={s.textContainer__title}>Changes to Terms</h2>
				<p className={s.textContainer__text}>
					We may update these Terms and Conditions from time to time. Continued use of the website indicates acceptance
					of the changes.
				</p>
			</div>
		</main>
	);
}
