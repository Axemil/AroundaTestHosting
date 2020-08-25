import TitleH from "@simple/TitleH";
import ButtonSecondary from "@simple/ButtonSecondary";

import Icon from "@svg/rated.svg";

import s from "./style.scss";

const AboutUsSection = () => (
	<section className={s.aboutUsSection}>
		<div className={s.container}>
			<div className={s.contentWrapper}>
				<div className={s.topRated}>
					<Icon />
					<span>Top Rated UX Agency at Clutch.io</span>
				</div>
				<div className={s.titleWrapper}>
					<TitleH size="h2">
						We are a small digital product design agency with soul inside
					</TitleH>
				</div>	
				<p className={s.descWrapper}>
					Our team consists of multidisciplinary digital product experts consisting of experienced product managers, designers, developers, and business analysts.
				</p>	
			</div>
			{/* <div className={s.btnWrapper}>
					<ButtonSecondary>About us</ButtonSecondary>
				</div> */}
			<div className={s.statistics}>
				<div className={s.item}>
					<p className={s.number}>21+</p>
					<p>Team experts</p>
				</div>
				<div className={s.item}>
					<p className={s.number}>$55M+</p>
					<p>Startup clients raised</p>
				</div>
				<div className={s.item}>
					<p className={s.number}>5 years</p>
					<p>of experience</p>
				</div>
			</div>
		</div>
	</section>
);

export default AboutUsSection;