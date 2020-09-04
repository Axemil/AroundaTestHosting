
import TitleH from "@simple/TitleH";
import { TimelineMax, Power4, SplitText } from "gsap";
import { Context as MobileContext } from '@/functions/MobileProvider';

import s from "./style.scss";

const MainHero = () => {
	const title = React.useRef(null);
	const subtitle = React.useRef(null);
	const hero = React.useRef(null);
	const { isMobile } = React.useContext(MobileContext)

	const startTimeLine = () => {
		if(!subtitle.current || !title.current) return;
		
		title.current.innerHTML = title.current.innerText.split(' ').map(elm => `<span>${elm}</span>`).join(' ')
		subtitle.current.innerHTML = subtitle.current.innerText.split(' ').map(elm => `<span>${elm}</span>`).join(' ')

		const titleBlocks = [...title.current.childNodes].filter(el => el instanceof HTMLElement)
		const descBlocks = [...subtitle.current.childNodes].filter(el => el instanceof HTMLElement)

		const tl = () => {
			const t = new TimelineMax()
			t.fromTo(
				[hero.current],
				.1,
				{ autoAlpha: 0 },
				{ autoAlpha: 1, delay: isMobile ? 1.3 : 2 },
			).staggerFromTo(
				titleBlocks, 
				0.4,
				{ autoAlpha: 0, y: 10, ease: Power4.easeInOut },
				{ autoAlpha: 1, y: 0, ease: Power4.easeInOut },
				0.1
			).staggerFromTo(
				descBlocks, 
				0.4,
				{ autoAlpha: 0, y: 10, ease: Power4.easeInOut },
				{ autoAlpha: 1, y: 0, ease: Power4.easeInOut },
				0.1
			);


			return t;
		}
		
		tl();
	}
	setTimeout(() => {
		startTimeLine()
	}, 0)
	return (
		<section className={s.mainHero} ref={hero}>
			<div className={s.container}>
				<div className={s.heroContent}>
					<div className={s.heroTitle}>
						<TitleH ref={title} size="hero">Digital product design agency for startups and enterprise innovators</TitleH>
					</div>
					<p ref={subtitle} className={s.heroDesc}>We create and evolve web and mobile apps, marketing websites, two-sided platforms through branding, web design, UX/UI design & app development.</p>
				</div>
			</div>
		</section>
	)
};

export default MainHero;