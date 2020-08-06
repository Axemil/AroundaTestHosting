

import TitleH from "@simple/TitleH";

import s from "./style.scss";

const ServicesHero = () => (
	<section className={s.servicesHero}>
		<div className={s.container}>
			<div className={s.heroContent}>
				<div className={s.heroTitle}>
					<TitleH size="hero"> Create and evolve digital products through design</TitleH>
				</div>
				<p className={s.heroDesc}>We help with web and mobile apps, marketing websites,  landing pages and two-sided platforms</p>
			</div>
		</div>
	</section>
);

export default ServicesHero;