import s from './Pages.module.scss';

export default function PrivacyPolicy() {
	return (
		<main className={s.container}>
			<h1 className={s.container__title}>Privacy Policy</h1>
			<div className={s.textContainer}>
				<p className={s.textContainer__text}>
					At EasyTranslator, we respect your privacy and are committed to protecting your personal data. This Privacy
					Policy explains how we collect, use, and store your information when you use our services.
				</p>
				<h2 className={s.textContainer__title}>Data We Collect</h2>
				<ul className={s.textContainer__list}>
					<li>Information you provide via forms (name, email address, document details)</li>
					<li>Cookies and analytics data (e.g., Google Analytics)</li>
				</ul>
				<h2 className={s.textContainer__title}>How We Use Your Data</h2>
				<p className={s.textContainer__text}>
					We use your data only for translation-related communication, improving our services, and ensuring website
					security.
				</p>
				<h2 className={s.textContainer__title}>Contact</h2>
				<p className={s.textContainer__text}>
					If you have any questions regarding this Privacy Policy, please contact us at
					<a href='mailto:easytranslator@gmail.com'> easytranslator@gmail.com</a>.
				</p>
			</div>
		</main>
	);
}
