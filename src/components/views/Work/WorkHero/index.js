

import TitleH from "@simple/TitleH";

import s from "./style.scss";

const workHero = () => (
	<section className={s.workHero}>
		<div className={s.container}>
			<div className={s.heroContent}>
				<div className={s.heroTitle}>
					<TitleH size="hero">
						We make successful digital experiences
					</TitleH>
				</div>
			</div>
		</div>
	</section>
);

export default workHero;