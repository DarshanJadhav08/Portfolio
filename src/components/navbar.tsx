import { useEffect, useState } from 'react';

const navLinks = [
	{ label: 'About', href: '#about-me' },
	{ label: 'Tech', href: '#tech-stack' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [active, setActive] = useState('');
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			const sections = navLinks.map((l) => l.href.replace('#', ''));
			for (const id of [...sections].reverse()) {
				const el = document.getElementById(id);
				if (el && window.scrollY >= el.offsetTop - 120) {
					setActive(id);
					break;
				}
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleClick = (href: string) => {
		setMenuOpen(false);
		const el = document.querySelector(href);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
			<a
				className='navbar-logo'
				href='#'
				onClick={(e) => {
					e.preventDefault();
					window.scrollTo({ top: 0, behavior: 'smooth' });
				}}
			>
				DJ<span>.</span>
			</a>

			<ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
				{navLinks.map((link) => (
					<li key={link.href}>
						<a
							href={link.href}
							className={active === link.href.replace('#', '') ? 'nav-active' : ''}
							onClick={(e) => {
								e.preventDefault();
								handleClick(link.href);
							}}
						>
							{link.label}
						</a>
					</li>
				))}
			</ul>

			<button
				className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label='Toggle menu'
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</nav>
	);
};
