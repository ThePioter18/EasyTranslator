import s from './ClientsSection.module.scss';
import women1 from '../../assets/portrait-women1.jpg';
import women2 from '../../assets/portrait-women2.jpg';
import women3 from '../../assets/portrait-women3.jpg';
import women4 from '../../assets/portrait-women4.jpg';
import women5 from '../../assets/portrait-women5.jpg';
import men1 from '../../assets/portrait-men1.jpg';
import men2 from '../../assets/portrait-men2.jpg';
import men3 from '../../assets/portrait-men3.jpg';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // arrow
import 'swiper/css/pagination';

import ClientCard from './ClientCard';

function ClientsSection() {
	const clientsData = [
		{
			image: women1,
			name: 'Maria',
			shortText:
				'Using the services of EasyTranslator is a true pleasure. My documents were translated with the utmost care...',
			longText: `Using the services of EasyTranslator is a true pleasure. My documents were translated with the utmost care.
    		Professionalism, punctuality, and attention to text quality are the qualities that set this translator apart.
    		Thanks to this, I could rest assured of the linguistic accuracy and appropriate message in the target language.
   	 		I highly recommend it!`,
		},
		{
			image: women2,
			name: 'Teresa',
			shortText: `I used EasyTranslator's services with complete trust. The translation was accurate and completed on time...`,
			longText: `I used EasyTranslator's services with complete trust. The translation was accurate and completed on time. Thanks to the translator's commitment, I could be sure of the linguistic correctness and precise message. I highly recommend it!`,
		},
		{
			image: women3,
			name: 'Marta',
			shortText: `The website was recommended to me by a friend, very intuitive and resourceful...`,
			longText: `The website was recommended to me by a friend, very intuitive and resourceful, and the language translator itself did a very good job. My work looks very good. I am satisfied, I would recommend EasyTranslator to anyone.`,
		},
		{
			image: women4,
			name: 'Alicja',
			shortText:
				'Using the services of EasyTranslator is a true pleasure. My documents were translated with the utmost care... ',
			longText: `Using the services of EasyTranslator is a true pleasure. My documents were translated with the utmost care. Professionalism, punctuality, and attention to text quality are the qualities that set this translator apart.`,
		},
		{
			image: women5,
			name: 'Magda',
			shortText: `I am satisfied, I would recommend EasyTranslator to anyone...`,
			longText: `I am satisfied, I would recommend EasyTranslator to anyone. The prices for translation are good too. I will definitely use this site again in the future.`,
		},
		{
			image: men1,
			name: 'Marcin',
			shortText: 'I will definitely use this site again in the future....',
			longText: `I will definitely use this site again in the future. The translation went through quickly and efficiently. I am satisfied. I recommend it 😉`,
		},
		{
			image: men2,
			name: 'Piotr',
			shortText: 'I leave my opinion here because I like the site...',
			longText: `I leave my opinion here because I like the site, the translation went through smoothly. I am satisfied 😀`,
		},
		{
			image: men3,
			name: 'Rafał',
			shortText: `I used the instructions on the website. The steps to follow helped me a lot to translate the document...`,
			longText: `I used the instructions on the website. The steps to follow helped me a lot to translate the document. I had an answer with the translated document in less than 30 minutes. I am satisfied, I would recommend EasyTranslator to anyone.`,
		},
	];

	return (
		<>
			<section className={`${s.slideContainer} ${s.swiper}`}>
				<h2 className={s.slideContainer__title}>Clients</h2>
				<Swiper
					style={{
						'--swiper-navigation-color': '#0a6dc7',
						'--swiper-pagination-color': '#0a6dc7',
					}}
					modules={[Autoplay, Navigation, Pagination]}
					slidesPerView={3}
					spaceBetween={-40}
					navigation={{
						nextEl: `.${s.customNext}`,
						prevEl: `.${s.customPrev}`,
					}}
					autoplay={{
						delay: 4500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						620: {
							slidesPerView: 2,
						},
						950: {
							slidesPerView: 3,
						},
					}}
					pagination={{
						clickable: true,
					}}
					className={s.customSwiper}>
					<div className={`swiper-button-next ${s.customNext}`} style={{ right: '0' }}></div>
					<div className={`swiper-button-prev ${s.customPrev}`} style={{ left: '0' }}></div>

					{clientsData.map((client, index) => (
						<SwiperSlide key={index}>
							<ClientCard
								image={client.image}
								name={client.name}
								text={client.text}
								shortText={client.shortText}
								longText={client.longText}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</>
	);
}

export default ClientsSection;
