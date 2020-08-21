

import { LazyLoadImage } from "react-lazy-load-image-component";
import MetaData from '@simple/MetaData';

import ServicesHero from './ServicesHero';
import Capabilities from './Capabilities';
import ContentService from './ContentService';
import ContentServiceTablet from './ContentServiceTablet';
import LetsTalk from '@sections/LetsTalk';
import ServiceSlideSection from './ServiceSlideSection';
import ServiceSlideSectionTablet from './ServiceSlideSectionTablet';

import data from '@/data/ServiceSlide';

import s from './style.scss';


const Services = ({isMobile}) => {
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
			{ isMobile ?
				<ServiceSlideSectionTablet>
					{
						data.map((el, i) => {
							return <ContentServiceTablet
							key={el.id}
							id={el.id} 
							title={el.title}
							desc={el.description}
							list={el.list}
							image={el.image}
							/>})
					}
				</ServiceSlideSectionTablet> : <ServiceSlideSection>
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
			}
			<LetsTalk />
			
			<MetaData h1="Create and evolve digital products through design"
					title="Services — Discovery & Strategy, UI/UX Design, Branding, Web design, Front-end development | Arounda"
					description="If you`re opening a new product MVP or redesigning existing one — don`t forget about Competitors research, IA, Wireframes, Prototyping, User testing, Brand identity. We extend your design & development departments of startups and enterprise innovators."
					link="https://arounda.agency/services" />
		</>
	);
}

export default Services;
