
import TitleH from "@simple/TitleH";

import s from "./style.scss";

const MainHero = () => (
	<section className={s.mainHero}>
		<div className={s.container}>
			<div className={s.heroContent}>
				<div className={s.heroTitle}>
					<TitleH size="hero"> Digital product design agency for startups and enterprise innovators</TitleH>
				</div>
				<p className={s.heroDesc}>We create and evolve web and mobile apps, marketing websites, two-sided platforms through branding, web design, UX/UI design & app development.</p>
			</div>
		</div>
	</section>
);

export default MainHero;