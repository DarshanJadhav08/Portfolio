import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
	const [progress, setProgress] = useState(0);
	const [hide, setHide] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((p) => {
				if (p >= 100) {
					clearInterval(interval);
					setTimeout(() => {
						setHide(true);
						setTimeout(onDone, 600);
					}, 400);
					return 100;
				}
				return p + 2;
			});
		}, 30);
		return () => clearInterval(interval);
	}, [onDone]);

	return (
		<div className={`loader-screen ${hide ? 'loader-hide' : ''}`}>
			<div className='loader-content'>
				<div className='loader-name'>
					<span className='loader-first'>DARSHAN</span>
					<span className='loader-last'>JADHAV</span>
				</div>
				<p className='loader-title'>Full Stack Developer</p>
				<div className='loader-bar-bg'>
					<div
						className='loader-bar-fill'
						style={{ width: `${progress}%` }}
					></div>
				</div>
				<p className='loader-percent'>{progress}%</p>
			</div>
		</div>
	);
};
