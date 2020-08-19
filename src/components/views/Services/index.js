

import { LazyLoadImage } from "react-lazy-load-image-component";
import Head from 'next/head';

import ServicesHero from './ServicesHero';
import Capabilities from './Capabilities';
import ContentService from './ContentService';
import LetsTalk from '@sections/LetsTalk';
import ServiceSlideSection from './ServiceSlideSection';
import ServiceSlideSectionTablet from './ServiceSlideSectionTablet';

import {
	BrowserView,
	MobileView,
} from "react-device-detect";

import data from '@/data/ServiceSlide';

import Footer from '@sections/Footer';



import s from './style.scss';


const Services = () => {
	return (
		<>
			<ServicesHero />
			<section className={s.serviceBg}>
				<div className={s.image}>
					<LazyLoadImage 
						alt="our team"
						src="/assets/images/bg.jpg"
						effect="blur"
					/>
				</div>
			</section>
			<Capabilities />
			<BrowserView renderWithFragment>
				<ServiceSlideSection>
					{data.map(el => (
						<ContentService
							key={el.id}
							id={el.id}
							title={el.title}
							description={el.description}
							image={el.image}
							background={el.background}
							video={el.video}
							list={el.list}
						/>
					))}
				</ServiceSlideSection>
			</BrowserView>
			<MobileView renderWithFragment>
				<ServiceSlideSectionTablet />;
			</MobileView>
			<LetsTalk />
			
			<Footer />
            <h1 className={'h1-seo'}>
				Create and evolve digital products through design
            </h1>
            <Head>
                <title>
					Services — Discovery & Strategy, UI/UX Design, Branding, Web design, Front-end development | Arounda
                </title>
                <meta name="description" content="If you`re opening a new product MVP or redesigning existing one — don`t forget about Competitors research, IA, Wireframes, Prototyping, User testing, Brand identity. We extend your design & development departments of startups and enterprise innovators." />
				<link rel="canonical" href="https://arounda.agency/services" />
            </Head>
		</>
	);
}

export default Services;
