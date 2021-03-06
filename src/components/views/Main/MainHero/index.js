
import TitleH from "@simple/TitleH";
import { TimelineMax, Power1 } from "gsap";
import { Context as MobileContext } from '@/functions/MobileProvider';
import TextTransformTool from '@/functions/TextTransformTool';
import s from "./style.scss";

const MainHero = () => {
	const title = React.useRef(null);
	const subtitle = React.useRef(null);
	const hero = React.useRef(null);
	const { isMobile } = React.useContext(MobileContext)

	const startTimeLine = async () => {
		if(!subtitle.current || !title.current) return;

		// КОСТЫЛЬ ДЛЯ ПРАВИЛЬНОЙ ОТРИСОВКИ СТРОК
		const getSplittedText = () => new Promise((resolve) => {
			setTimeout(() => {
				resolve([new TextTransformTool(title.current, {type: 'lines', span: true }).lines,
				new TextTransformTool(subtitle.current, {type: 'lines', span: true }).lines])
			}, 110)
		})

		const [titleBlocks, descBlocks] = await getSplittedText();

		const tl = () => {
			const t = new TimelineMax()
			t.fromTo(
				[hero.current],
				.1,
				{ autoAlpha: 0 },
				{ autoAlpha: 1, delay: isMobile ? 1.3 : 1.5 },
			).staggerFromTo(
				titleBlocks, 
				.6,
				{ autoAlpha: 0, y: 10, ease: Power1.easeInOut },
				{ autoAlpha: 1, y: 0, ease: Power1.easeInOut },
				0.2
			).staggerFromTo(
				descBlocks, 
				.6,
				{ autoAlpha: 0, y: 10, ease: Power1.easeInOut },
				{ autoAlpha: 1, y: 0, ease: Power1.easeInOut },
				0.2
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