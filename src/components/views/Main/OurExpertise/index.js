import Link from 'next/link';

import TitleH from "@simple/TitleH";
import ButtonSecondary from "@simple/ButtonSecondary";

import s from "./style.scss";

const OurExpertise = () => (
	<section className={s.ourExpertise}>
		<div className={s.container}>
			<div className={s.contentWrapper}>
				<div className={s.contentTitle}>
					<TitleH size="h1"> Our expertise for your product </TitleH>
				</div>
				<p className={s.contentDesc}>Working with dozens of digital products, we have got invaluable experience that helps our partners achieve quantifiable goals, save time and money.</p>
			</div>
			<div className={s.contentBtn}>
				<ButtonSecondary> Our expertise </ButtonSecondary>
			</div>
			<div className={s.listWrapper}>
				<div className={s.listTitle}>
					<TitleH>Niches</TitleH>
				</div>
				<ul className={s.listItems}>
					<li>
						<Link href="/" passHref>
							<a>
								Food delivery
							</a>
						</Link>
					</li>
					<li>
						<Link href="/" passHref>
							<a>
								Fintech
							</a>
						</Link>
					</li>
					<li>
						<Link href="/" passHref>
							<a>
								Blockchain
							</a>
						</Link>
					</li>
					<li>
						<Link href="/" passHref>
							<a>
								Meditation&Health
							</a>
						</Link>
					</li>
					<li>
						<Link href="/" passHref>
							<a className={"stopCursor"}>
								SaaS
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</section>
);

export default OurExpertise;