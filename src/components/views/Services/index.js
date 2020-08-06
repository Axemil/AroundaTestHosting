

import MediaQuery from 'react-responsive';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Head from 'next/head';



import ServicesHero from './ServicesHero';
import Capabilities from './Capabilities';
import ServiceSlideSection from './ServiceSlideSection';
import ContentService from './ContentService';
import LetsTalk from '@sections/LetsTalk';
import ServiceSlideSectionTablet from './ServiceSlideSectionTablet';

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
			<MediaQuery minDeviceWidth={1050}>
				{matches => {
					if (matches) {
						return (
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
						);
					} else {
						return <ServiceSlideSectionTablet />;
					}
				}}
			</MediaQuery>
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
