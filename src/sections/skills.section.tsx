import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '../components/section-title.component';

const skillGroups = [
	{
		category: 'Frontend',
		skills: [
			{ name: 'HTML', level: 90, color: 'rgb(97, 219, 251)' },
			{ name: 'CSS', level: 85, color: 'rgb(0, 122, 204)' },
			{ name: 'BOOTSTRAP', level: 88, color: 'rgb(6, 182, 212)' },
		],
	},
	{
		category: 'Backend',
		skills: [
			{ name: 'Node.js', level: 80, color: 'rgb(104, 160, 99)' },
			{ name: 'Fastify', level: 80, color: 'rgba(255,255,255,0.8)' },
			{ name: 'Python', level: 90, color: 'rgb(255, 212, 59)' },
		],
	},
	{
		category: 'Database',
		skills: [
			{ name: 'MySQL', level: 82, color: 'rgb(230, 50, 42)' },
			{ name: 'Postgres', level: 75, color: 'rgb(0, 237, 100)' },
		],
	},
];

const SkillBar = ({
	name,
	level,
	color,
}: {
	name: string;
	level: number;
	color: string;
}) => {
	const [width, setWidth] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => setWidth(level), 200);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 },
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [level]);

	return (
		<div
			className='skill-item'
			ref={ref}
		>
			<div className='skill-label'>
				<span>{name}</span>
				<span className='skill-percent'>{level}%</span>
			</div>
			<div className='skill-bar-bg'>
				<div
					className='skill-bar-fill'
					style={{
						width: `${width}%`,
						background: `linear-gradient(90deg, ${color}55, ${color})`,
						boxShadow: `0 0 10px ${color}`,
					}}
				></div>
			</div>
		</div>
	);
};

export const Skills = () => {
	return (
		<section
			className='skills-section container'
			id='skills'
		>
			<div className='skills-title-wrap'>
				<SectionTitle
					title='My'
					subTitle='SKILLS'
				/>
			</div>
			<div className='skills-grid'>
				{skillGroups.map((group, i) => (
					<div
						className='skill-group'
						key={i}
					>
						<h3 className='skill-category'>{group.category}</h3>
						{group.skills.map((skill, j) => (
							<SkillBar
								key={j}
								{...skill}
							/>
						))}
					</div>
				))}
			</div>
		</section>
	);
};
