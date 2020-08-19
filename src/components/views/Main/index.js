import { TimelineLite } from 'gsap';

import { LazyLoadImage } from "react-lazy-load-image-component";
import Head from 'next/head';

import Hero from "./MainHero";
import WorksSection from './WorksSection';
import OurExpertise from "./OurExpertise";
import ServicesSection from './ServicesSection';
import SliderSection from '@simple/SliderSection';
import AboutUsSection from './AboutUsSection';
import BlogSection from './BlogSection';
import BackgroundAnimate from '@simple/BackgroundAnimate';
import LetsTalk from '@sections/LetsTalk';
import AFooter from '@sections/Footer';

import data from '@/data/Works'

import s from './style.scss';

class Main extends React.Component {
	componentDidMount() {
		const tl = new TimelineLite();
		const bgTl = new TimelineLite();

		bgTl.add(this.bg.tween);

		tl.add(bgTl, 'start');

		return tl;
	}
	render() {
		return (
			<>
				<Hero />
				<BackgroundAnimate ref={el => (this.bg = el)} />
				<WorksSection worksData={data} />
				<OurExpertise />
				<ServicesSection />
				<SliderSection />
				<AboutUsSection />
				<BlogSection />
				<section className={s.backgroundSection}>
					<LazyLoadImage 
						alt="our team"
						src="/assets/images/bg.jpg"
						effect="blur"
					/>
				</section>
				<LetsTalk />
				<AFooter />
				<h1 className={'h1-seo'}>
					Digital product design agency for startups and enterprise innovators
				</h1>
				<Head>
					<title>
						Arounda — Digital Product Design Agency	
					</title>
					<meta name="description" content="We create and evolve web and mobile apps, websites through Branding, Web design, UX/UI design, App development for startups and enterprises." />
					<link rel="canonical" href="https://arounda.agency" />
				</Head>
			</>
		);
	}
}
export default Main;
