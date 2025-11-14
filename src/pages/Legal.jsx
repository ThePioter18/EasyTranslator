import s from './Pages.module.scss';
export default function Legal() {
	return (
		<main className={s.container}>
			<h1 className={s.container__title}>Legal Notice</h1>
			<div className={s.textContainer}>
				<p className={s.textContainer__text}>
					This website is operated by EasyTranslator.
				</p>
				<p>All rights reserved. Unauthorized use of any content is prohibited.</p>
				<p>
					For inquiries, please contact us via email at:
					<a href='mailto:easytranslator@gmail.com'> easytranslator@gmail.com</a>.
				</p>
			</div>
		</main>
	);
}
