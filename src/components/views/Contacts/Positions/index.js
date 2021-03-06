import Link from 'next/link';
import { LazyLoadImage } from "react-lazy-load-image-component";

import TitleH from "@simple/TitleH";

import Arrow from "@svg/buttonSecondary/icon_arrow.svg";

import s from "./style.scss";

const Positions = () => (
	<section className={s.positions}>
		<div className={s.positionsContent}>
			<div className={s.titleWrapper}>
				<TitleH size="h1">Let’s create great things together!</TitleH>
			</div>
			<div className={s.positionsList}>
				<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdnUK1cjeTe3NJsada3zbZjbeQJkMk7UGIlyEN2eCC86_6eXQ/viewform" className={s.position}>Sales manager <Arrow /></a>
			</div>
		</div>
		<div className={s.positionsImages}>
			<div className={s.image}>
				<LazyLoadImage
					alt="our office"
					src="/assets/images/contactPage/image-1.jpg"
					effect="blur"
					threshold={400}
				/>
			</div>
			<div className={s.image}>
				<LazyLoadImage
					alt="our office"
					src="/assets/images/contactPage/image-2.jpg"
					effect="blur"
					threshold={400}
				/>
			</div>
			<div className={s.image}>
				<LazyLoadImage
					alt="our office"
					src="/assets/images/contactPage/image-3.jpg"
					effect="blur"
					threshold={400}
				/>
			</div>
			<div className={s.image}>
				<LazyLoadImage
					alt="our office"
					src="/assets/images/contactPage/image-4.jpg"
					effect="blur"
					threshold={400}
				/>
			</div>
			<div className={s.image}>
				<LazyLoadImage
					alt="our office"
					src="/assets/images/contactPage/image-5.jpg"
					effect="blur"
					threshold={400}
				/>
			</div>
		</div>
	</section>
);

export default Positions;