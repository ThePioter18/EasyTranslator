import { useState } from 'react';
import s from './ClientsSection.module.scss';

const ClientCard = ({ image, name, shortText, longText }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<>
			<div className={s.slideContainer__content}>
				<div className={s.slideContainer__content__wrapper}>
					<div className={s.slideContainer__content__wrapper__card}>
						<div className={s.slideContainer__content__wrapper__card__imgContent}>
							<span className={s.slideContainer__content__wrapper__card__imgContent__overlay}></span>

							<div className={s.slideContainer__content__wrapper__card__imgContent__cardImage}>
								<img
									className={s.slideContainer__content__wrapper__card__imgContent__cardImage__img}
									src={image}
									alt={`portrait of ${name}`}></img>
							</div>

							<div className={s.slideContainer__content__wrapper__card__imgContent__cardContent}>
								<h3 className={s.slideContainer__content__wrapper__card__imgContent__cardContent__name}>{name}</h3>

								<p
									className={`${s.slideContainer__content__wrapper__card__imgContent__cardContent__desc} ${
										isExpanded ? s.expanded : s.collapsed
									}`}>
									{isExpanded ? longText : shortText}
								</p>

								<button
									className={s.slideContainer__content__wrapper__card__imgContent__cardContent__btn}
									onClick={() => toggleExpand()}>
									{isExpanded ? 'View Less' : 'View More'}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClientCard;
