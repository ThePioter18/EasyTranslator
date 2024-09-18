import s from '../LogActions/LogActions.module.scss';
function LogActions() {
	return (
		<ul className={s.logActionsList}>
			<li className={`${s.logActionsList__item} ${s.logActionsList__item_signup}`}>Sign up</li>
			<li className={`${s.logActionsList__item} ${s.logActionsList__item_login}`}>Log in</li>
		</ul>
	);
}

export default LogActions;
