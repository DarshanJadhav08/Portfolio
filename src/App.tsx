import { useState } from 'react';

import { LoadingScreen } from './components/loading-screen';
import { MouseTrail } from './components/mouse-trail';
import { Navbar } from './components/navbar';
import { ScrollBar } from './components/scroll-bar';
import { Stats } from './components/stats';
import { AboutMe } from './sections/about-me.section';
import { Contact } from './sections/contact.section';
import { InfoSection } from './sections/info.section';
import { Projects } from './sections/projects.section';
import { Skills } from './sections/skills.section';
import { TechStack } from './sections/tech-stack.section';
import './styles/about-me.css';
import './styles/contact.css';
import './styles/floating-button.css';
import './styles/glow-box.css';
import './styles/info-section.css';
import './styles/loading-screen.css';
import './styles/mouse-trail.css';
import './styles/navbar.css';
import './styles/projects.css';
import './styles/resume-modal.css';
import './styles/skills.css';
import './styles/stats.css';
import './styles/tech-stack.css';
import './styles/text-hover.css';
import './styles/title.css';

function App() {
	const [loaded, setLoaded] = useState(false);

	return (
		<>
			{!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
			{loaded && (
				<>
					<ScrollBar />
					<MouseTrail />
					<Navbar />
					<InfoSection />
					<Stats />
					<AboutMe />
					<TechStack />
					<Projects />
					<Skills />
					<Contact />
				</>
			)}
		</>
	);
}

export default App;
