import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Full Stack Developer Intern',
				place: 'The Baap Company',
				timePeriod: '2024',
				description: (
					<ul>
						<li>
							Worked on real-world applications like <strong>School Management System</strong> and contributed to scalable backend development using <strong>FastAPI, Node.js, and Fastify</strong>.
						</li>
						<li>
							Built responsive and user-friendly interfaces using <strong>HTML, CSS, Bootstrap, and JavaScript</strong>.
						</li>
						<li>
							Handled API integration, debugging, and performance optimization in an agile development environment.
						</li>
						<li>
							Developed data-driven features and dashboards using <strong>Python</strong> and libraries like <strong>Pandas, NumPy, Matplotlib, and Seaborn</strong>.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Projects',
		items: [
			{
				title: 'Student Management System',
				place: 'Full Stack Project',
				timePeriod: '2025',
				description: (
					<ul>
						<li>
							Developed a complete system with <strong>Admin, Teacher, and Student dashboards</strong>.
						</li>
						<li>
							Used <strong>FastAPI</strong> for backend and <strong>MySQL</strong> for database management.
						</li>
						<li>
							Implemented features like result analysis, attendance tracking, and performance visualization.
						</li>
					</ul>
				),
			},
			{
				title: 'Expense Tracker System',
				place: 'Flask Project',
				timePeriod: '2025',
				description: (
					<ul>
						<li>
							Built a web application to track daily, weekly, and monthly expenses.
						</li>
						<li>
							Integrated graphs and analytics using <strong>Matplotlib and Seaborn</strong>.
						</li>
						<li>
							Designed clean UI with proper data visualization for better financial insights.
						</li>
					</ul>
				),
			},
			{
				title: 'Dairy Collection Management System',
				place: 'Python + Tkinter',
				timePeriod: '2025',
				description: (
					<ul>
						<li>
							Created a desktop application to manage milk collection data including fat, SNF, and rate calculation.
						</li>
						<li>
							Implemented automated calculations and reporting features.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Skills',
		items: [
			{
				title: 'Technical Skills',
				place: 'Technologies',
				timePeriod: 'Current',
				description: (
					<ul>
						<li>
							<strong>Frontend:</strong> HTML, CSS, Bootstrap, JavaScript
						</li>
						<li>
							<strong>Backend:</strong> Python, FastAPI, Node.js, Fastify
						</li>
						<li>
							<strong>Libraries:</strong> Pandas, NumPy, Matplotlib, Seaborn
						</li>
						<li>
							<strong>Database:</strong> MySQL, SQL
						</li>
						<li>
							<strong>Tools:</strong> Git, GitHub, API Integration, Debugging
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Computer Application (BCA)',
				place: 'University of Mysore, Karnataka',
				timePeriod: '2024 - Present',
				description:
					'Currently pursuing BCA with focus on Software Development, Data Science, and Artificial Intelligence.',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section className='about-me container' id='about-me'>
			<div>
				<SectionTitle title='About' subTitle='ME' />
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Darshan Jadhav, a Full Stack Developer & AI Enthusiast.
					</p>
					<p>
						I specialize in building scalable web applications using <strong>Python, FastAPI, Node.js, and Fastify</strong> along with modern frontend technologies like <strong>HTML, CSS, Bootstrap, and JavaScript</strong>.
					</p>
					<p>
						I have strong knowledge in <strong>Data Science</strong> and hands-on experience with libraries like <strong>Pandas, NumPy, Matplotlib, and Seaborn</strong> for data analysis and visualization.
					</p>
					<p>
						I have worked on multiple real-world projects including <strong>Student Management System, Expense Tracker, and Dairy Management System</strong>, focusing on building efficient, scalable, and user-friendly solutions.
					</p>
					<p>
						My goal is to become a skilled <strong>AI Developer</strong> and build intelligent systems that solve real-world problems.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div className='timeline' key={idx}>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div className='timeline-list' key={idx}>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};