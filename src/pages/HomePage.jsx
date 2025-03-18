import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import "../styles/main.css";

const HomePage = () => {
	return (
		<div className="container">
			<section>
				<Header />
			</section>
			<section id="hero">
				<HeroSection />
			</section>
			<section id="projects">
				<ProjectsSection />
			</section>
			<section id="contact">
				<ContactSection />
			</section>
			<section>
				<Footer />
			</section>
		</div>
	);
};

export default HomePage;
