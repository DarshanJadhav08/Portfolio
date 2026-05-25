import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { SectionTitle } from '../components/section-title.component';

const projects = [
	{
		title: 'School Management System',
		description:
			'A full-featured school management platform with student records, attendance tracking, grade management, fee collection, and real-time admin dashboards.',
		tech: ['Next.js', 'Node.js', 'MsSQL', 'TypeScript'],
		github: 'https://github.com/DarshanJadhav08',
		live: '',
		color: 'rgb(31, 195, 255)',
	},
	{
		title: 'Expense Tracker',
		description:
			'A personal finance app to track daily income and expenses with category-wise breakdown, monthly reports, and visual charts.',
		tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
		github: 'https://github.com/DarshanJadhav08',
		live: '',
		color: 'rgb(104, 160, 99)',
	},
	{
		title: 'Dairy Milk Collection',
		description:
			'A dairy management system to record daily milk collection from farmers, calculate payments, manage shifts, and generate monthly statements.',
		tech: ['Python', 'FastAPI', 'PostgreSQL', 'Pandas'],
		github: 'https://github.com/DarshanJadhav08',
		live: '',
		color: 'rgb(240, 219, 79)',
	},
	{
		title: 'REST API Backend',
		description:
			'Scalable RESTful API with JWT authentication, role-based access control, rate limiting, and optimized database queries for enterprise use.',
		tech: ['Fastify', 'TypeScript', 'MySQL', 'Node.js'],
		github: 'https://github.com/DarshanJadhav08',
		live: '',
		color: 'rgb(125, 17, 248)',
	},
	{
		title: 'Data Visualization Dashboard',
		description:
			'Interactive analytics dashboard with real-time data updates, filterable charts, and exportable reports built for enterprise-level reporting.',
		tech: ['React', 'Python', 'Pandas', 'Matplotlib'],
		github: 'https://github.com/DarshanJadhav08',
		live: '',
		color: 'rgb(255, 99, 132)',
	},
	{
		title: 'Portfolio Website',
		description:
			'This portfolio — a fully responsive, animated personal portfolio built with React, TypeScript and Vite featuring mouse trail, glow effects and smooth animations.',
		tech: ['React', 'TypeScript', 'Vite', 'CSS'],
		github: 'https://github.com/DarshanJadhav08',
		live: '',
		color: 'rgb(0, 188, 140)',
	},
];

export const Projects = () => {
	return (
		<section
			className='projects-section container'
			id='projects'
		>
			<SectionTitle
				title='My'
				subTitle='PROJECTS'
			/>
			<div className='projects-grid'>
				{projects.map((project, index) => (
					<div
						className='project-card'
						key={index}
						style={{ '--card-clr': project.color } as React.CSSProperties}
					>
						<div className='project-card-glow'></div>
						<div className='project-number'>0{index + 1}</div>
						<h2 className='project-title'>{project.title}</h2>
						<p className='project-desc'>{project.description}</p>
						<div className='project-tech'>
							{project.tech.map((t, i) => (
								<span
									key={i}
									className='tech-badge'
								>
									{t}
								</span>
							))}
						</div>
						<div className='project-links'>
							<a
								href={project.github}
								target='_blank'
								rel='noopener noreferrer'
								className='project-link'
							>
								<FaGithub /> Code
							</a>
							{project.live && (
								<a
									href={project.live}
									target='_blank'
									rel='noopener noreferrer'
									className='project-link project-link-live'
								>
									<HiExternalLink /> Live
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
