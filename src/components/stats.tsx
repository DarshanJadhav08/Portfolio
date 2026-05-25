import { useEffect, useRef, useState } from 'react';

const stats = [
	{ value: 1, suffix: '+', label: 'Years Experience' },
	{ value: 6, suffix: '+', label: 'Projects Built' },
	{ value: 10, suffix: '+', label: 'Technologies' },
	{ value: 100, suffix: '%', label: 'Dedication' },
];

const Counter = ({
	value,
	suffix,
}: {
	value: number;
	suffix: string;
}) => {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					let start = 0;
					const duration = 1800;
					const step = Math.ceil(value / (duration / 16));
					const timer = setInterval(() => {
						start += step;
						if (start >= value) {
							setCount(value);
							clearInterval(timer);
						} else {
							setCount(start);
						}
					}, 16);
					observer.disconnect();
				}
			},
			{ threshold: 0.5 },
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [value]);

	return (
		<div
			className='stat-number'
			ref={ref}
		>
			{count}
			{suffix}
		</div>
	);
};

export const Stats = () => {
	return (
		<div className='stats-section'>
			{stats.map((stat, i) => (
				<div
					className='stat-card'
					key={i}
				>
					<Counter
						value={stat.value}
						suffix={stat.suffix}
					/>
					<p className='stat-label'>{stat.label}</p>
				</div>
			))}
		</div>
	);
};
