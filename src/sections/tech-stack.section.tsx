import { FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import {
	SiChartdotjs,
	SiFastapi,
	SiFastify,
	SiJavascript,
	SiMysql,
	SiNumpy,
	SiPandas,
	SiPlotly,
	SiPostgresql,
	SiPython,
	SiSqlite,
} from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Languages',
		items: [
			{
				title: 'HTML',
				icon: <FaHtml5 color='rgb(228, 77, 38)' />,
				color: 'rgba(228, 77, 38, 0.7)',
			},
			{
				title: 'CSS',
				icon: <FaCss3Alt color='rgb(38, 77, 228)' />,
				color: 'rgba(38, 77, 228, 0.7)',
			},
			{
				title: 'JavaScript',
				icon: <SiJavascript color='rgb(240, 219, 79)' />,
				color: 'rgba(240, 219, 79, 0.6)',
			},
			{
				title: 'Python',
				icon: <SiPython color='rgb(55, 118, 171)' />,
				color: 'rgba(55, 118, 171, 0.7)',
			},
		],
	},
	{
		heading: 'Frameworks',
		items: [
			{
				title: 'Fastify',
				icon: <SiFastify color='rgba(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'FastAPI',
				icon: <SiFastapi color='rgb(0, 188, 140)' />,
				color: 'rgba(0, 188, 140, 0.7)',
			},
		],
	},
	{
		heading: 'Libraries',
		items: [
			{
				title: 'Pandas',
				icon: <SiPandas color='rgb(130, 100, 255)' />,
				color: 'rgba(130, 100, 255, 0.6)',
			},
			{
				title: 'NumPy',
				icon: <SiNumpy color='rgb(77, 158, 214)' />,
				color: 'rgba(77, 158, 214, 0.7)',
			},
			{
				title: 'Seaborn',
				icon: <SiPlotly color='rgb(58, 120, 194)' />,
				color: 'rgba(58, 120, 194, 0.7)',
			},
			{
				title: 'Matplotlib',
				icon: <SiChartdotjs color='rgb(255, 99, 132)' />,
				color: 'rgba(255, 99, 132, 0.7)',
			},
		],
	},
	{
		heading: 'Databases',
		items: [
			{
				title: 'SQL',
				icon: <SiSqlite color='rgb(0, 122, 158)' />,
				color: 'rgba(0, 122, 158, 0.75)',
			},
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgba(0, 122, 158, 0.75)',
			},
			{
				title: 'PostgreSQL',
				icon: <SiPostgresql color='rgb(51, 103, 145)' />,
				color: 'rgba(51, 103, 145, 0.75)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, idx) => (
								<GlowBox
									key={idx}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
		</section>
	);
};
