

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
			<Head>
				<title>Services. What we do at Arounda</title>
				<meta name="description" content="We create and evolve digital products thought Arounda capabilities." />
			</Head>
		</>
	);
}

export default Services;
