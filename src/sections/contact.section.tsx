import { FormEvent, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { SectionTitle } from '../components/section-title.component';

export const Contact = () => {
	const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
		'idle',
	);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus('sending');
		const form = e.currentTarget;
		const data = new FormData(form);

		try {
			const res = await fetch('https://formspree.io/f/mreodlda', {
				method: 'POST',
				body: data,
				headers: { Accept: 'application/json' },
			});
			if (res.ok) {
				setStatus('sent');
				form.reset();
			} else {
				setStatus('error');
			}
		} catch {
			setStatus('error');
		}
	};

	return (
		<section
			className='contact-section container'
			id='contact'
		>
			<SectionTitle
				title='Get In'
				subTitle='TOUCH'
			/>
			<div className='contact-wrapper'>
				<div className='contact-info'>
					<p className='contact-tagline'>
						Have a project in mind? Let's build something great together.
					</p>
					<div className='contact-links'>
						<a
							href='mailto:your@email.com'
							className='contact-link-item'
						>
							<IoMailOutline /> darshanjadhav7284@gmail.com
						</a>
						<a
							href='https://github.com/DarshanJadhav08'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-link-item'
						>
							<FaGithub /> github.com/DarshanJadhav08
						</a>
						<a
							href='https://www.linkedin.com/in/darshan-jadhav-530259321'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-link-item'
						>
							<FaLinkedinIn /> linkedin.com/in/darshan-jadhav
						</a>
					</div>
				</div>

				<form
					className='contact-form'
					onSubmit={handleSubmit}
				>
					<div className='form-row'>
						<div className='form-group'>
							<label htmlFor='name'>Name</label>
							<input
								id='name'
								name='name'
								type='text'
								placeholder='Your Name'
								required
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input
								id='email'
								name='email'
								type='email'
								placeholder='your@email.com'
								required
							/>
						</div>
					</div>
					<div className='form-group'>
						<label htmlFor='subject'>Subject</label>
						<input
							id='subject'
							name='subject'
							type='text'
							placeholder='Project Inquiry'
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							name='message'
							rows={5}
							placeholder='Tell me about your project...'
							required
						></textarea>
					</div>
					<button
						type='submit'
						className='contact-submit'
						disabled={status === 'sending' || status === 'sent'}
					>
						{status === 'idle' && 'Send Message'}
						{status === 'sending' && 'Sending...'}
						{status === 'sent' && '✓ Message Sent!'}
						{status === 'error' && 'Error — Try Again'}
					</button>
				</form>
			</div>

			<div className='footer-note'>
				<p>
				 &nbsp;·&nbsp; Darshan Jadhav © 2026
				</p>
			</div>
		</section>
	);
};
