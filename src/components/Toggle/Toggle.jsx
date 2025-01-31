import s from './Toggle.module.scss';
const Toggle = ({ isDarkMode, onToggle, onColor = '#28a745', offColor = '#ccc', disabled = false }) => {

	return (
		<div className={s.toggleContainer}>
			<div
				className={`${s.toggleSwitch} ${isDarkMode ? s.toggled : ''}`}
				onClick={() => onToggle(!isDarkMode)}
				style={{
					backgroundColor: isDarkMode ? onColor : offColor,
					opacity: disabled ? 0.6 : 1,
					cursor: disabled ? 'not-allowed' : 'pointer',
				}}>
				<div className={s.toggleThumb}></div>
				<p className={s.toggleText}>
					{isDarkMode ? (
						<>
							<span className={s.arrow}>◀</span> Light <span className={s.mode}>Mode</span>
						</>
					) : (
						'Dark Mode'
					)}
				</p>
			</div>
		</div>
	);
};

export default Toggle;
