import s from './LanguageSection.module.scss';
import { useEffect, useState } from 'react';

function LanguageSection() {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const apiEndpoint = import.meta.env.VITE_API_URL;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(apiEndpoint);
				if (!response.ok) {
					throw new Error('Error');
				}
				const result = await response.json();
				setData(result);
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	const selectedCountries = ['United Kingdom', 'Germany', 'Italy', 'France'];

	const countryAliases = {
		'United Kingdom': 'English',
		France: 'French',
		Germany: 'Deutsch',
		Italy: 'Italian',
	};

	return (
		<section className={s.container}>
			<h1 className={s.container__header}>Languages</h1>
			<section className={s.container__iconsWrapper}>
				{data.data
					.filter(language => selectedCountries.includes(language.name))
					.sort((a, b) => selectedCountries.indexOf(a.name) - selectedCountries.indexOf(b.name))
					.map((language, index) => {
						const displayName = countryAliases[language.name] || language.name;
						return (
							<div className={s.container__iconsWrapper__iconBox} key={index}>
								<img
									className={s.container__iconsWrapper__iconBox__img}
									src={language.flag}
									alt={`${language.name} flag`}
								/>
								<span className={s.container__iconsWrapper__iconBox__name}>{displayName}</span>
							</div>
						);
					})}
			</section>
		</section>
	);
}

export default LanguageSection;
