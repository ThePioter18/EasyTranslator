import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import s from './ContactFormSection.module.scss';

import contactInformationPNG from '../../assets/contact-information.png';

// Zod validation scheme
const contactSchema = z.object({
	name: z.string().min(2, 'The name must be at least 2 characters long'),
	email: z.string().email('Please enter a valid email address'),
	message: z.string().min(10, 'The message must be at least 10 characters long'),
});

export default function ContactForm() {
	// Initialising a form with validation
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	const onSubmit = async data => {
		console.log('Dane z formularza:', data);
		alert('Wiadomość została wysłana!');
		reset(); // clear form
	};

	return (
		<>
			<section className={s.container} id='contact-form'>
				<h2 className={s.container__title}>Contact</h2>
				<div className={s.wrapper}>
					<div className={s.contact}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className={s.contact__input_box}>
								<label>Full Name</label>
								<input
									type='text'
									className={s.contact__input_box_field}
									placeholder='Enter your name'
									{...register('name')}
									name='name'
									required
								/>
								{errors.name && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.name.message}</p>}
							</div>
							<div className={s.contact__input_box}>
								<label>Email Address</label>
								<input
									type='email'
									className={s.contact__input_box_field}
									placeholder='Enter your email'
									{...register('email')}
									name='email'
									required
								/>
								{errors.email && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.email.message}</p>}
							</div>
							<div className={s.contact__input_box}>
								<label>Your Message</label>
								<textarea
									name='message'
									className={`${s.contact__input_box_field} ${s.contact__input_box_message}`}
									placeholder='Enter your message'
									{...register('message')}
									required></textarea>
								{errors.message && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.message.message}</p>}
							</div>
							<button type='submit' disabled={isSubmitting} className={s.contact__btn_form}>
								{isSubmitting ? 'Sending...' : 'Send Message'}
							</button>
						</form>
					</div>
					<div className={s.contact_information}>
						<h3 className={s.contact_information__title}>Contact Information</h3>
						<p className={s.contact_information__description}>We are open for any suggestions or just to have a chat</p>
						<div className={s.contact_information__contact}>
							<div className={s.contact_information__contact__item}>
								<i className={s.contact_information__contact__item__icon}>
									<i className='ti ti-map-pin'></i>
								</i>
								<span className={s.contact_information__contact__item__text}>Warsaw, Poland</span>
							</div>
							<div className={s.contact_information__contact__item}>
								<i className={s.contact_information__contact__item__icon}>
									<i className='ti ti-phone'></i>
								</i>
								<span className={s.contact_information__contact__item__text}>606-234-098</span>
							</div>
							<div className={s.contact_information__contact__item}>
								<i className={s.contact_information__contact__item__icon}>
									<i className='ti ti-mail'></i>
								</i>
								<span className={s.contact_information__contact__item__text}>easytranslator@gmail.com</span>
							</div>
						</div>
						<div className={s.contact_information__graphic_mess_show}>
							<img src={contactInformationPNG} alt='contact information' />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
