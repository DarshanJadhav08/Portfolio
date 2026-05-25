import { useEffect } from 'react';
import { HiDownload, HiX } from 'react-icons/hi';

type TResumeModal = {
	onClose: () => void;
};

export const ResumeModal = ({ onClose }: TResumeModal) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', handleKey);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleKey);
		};
	}, [onClose]);

	return (
		<div
			className='resume-overlay'
			onClick={onClose}
		>
			<div
				className='resume-modal'
				onClick={(e) => e.stopPropagation()}
			>
				<div className='resume-modal-header'>
					<p className='resume-modal-title'>Resume — Darshan Jadhav</p>
					<div className='resume-modal-actions'>
						<a
							href='/resume.pdf'
							download='Darshan_Jadhav_Resume.pdf'
							className='resume-download-btn'
						>
							<HiDownload /> Download
						</a>
						<button
							className='resume-close-btn'
							onClick={onClose}
							aria-label='Close'
						>
							<HiX />
						</button>
					</div>
				</div>
				<div className='resume-modal-body'>
					<iframe
						src='/resume.pdf#toolbar=0&navpanes=0'
						title='Resume Preview'
						className='resume-iframe'
					/>
				</div>
			</div>
		</div>
	);
};
