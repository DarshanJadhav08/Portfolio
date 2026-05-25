import { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { ResumeModal } from '../components/resume-modal';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	const [showResume, setShowResume] = useState(false);

	return (
		<div className='hero-section'>
			<a
				href='https://github.com/DarshanJadhav08'
				target='_blank'
				rel='noopener noreferrer'
				className='github-ribbon'
			>
				<div>⭐</div>
				<span></span>
			</a>
			<FloatingButton
				label='About Me'
				className='first'
				href='/#about-me'
			/>
			<p>Hi, I am</p>
			<TextHover
				text='DARSHAN'
				className='name'
			/>
			<p>Full Stack Developer</p>
			<FloatingButton
				label='Projects'
				className='sec'
				href='/#projects'
			/>
			<button
				className='resume-btn'
				onClick={() => setShowResume(true)}
			>
				<HiDownload /> Resume
			</button>
			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/DarshanJadhav08'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				<GlowLink
					href='https://www.linkedin.com/in/darshan-jadhav-530259321'
					color='rgb(0, 160, 220, 0.6)'
					icon={<FaLinkedinIn color='rgb(0, 160, 220)' />}
					aria-label='linkedin'
				/>
			</div>
			{showResume && <ResumeModal onClose={() => setShowResume(false)} />}
		</div>
	);
};
