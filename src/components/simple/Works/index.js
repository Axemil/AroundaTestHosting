
import { LazyLoadImage } from 'react-lazy-load-image-component';

import TitleH from "@simple/TitleH";

import s from './style.scss';


const Works = ({ worksData, tight }) => {
	return (
	<div className={s.row}>
		{
			worksData.map(work => (
				<div key={work.id} className={`${s.item} ${tight && s.itemTight}`}>
					<a href={`${work.link}`} rel="nofollow" title={work.title} className={`${s.link} stopCursor`}>
						<div className={s.image}>
							<LazyLoadImage
								alt={work.title}
								src={work.image}
								effect="blur"
								threshold={100}
							/>
						</div>
						<div className={s.wrapper}>
							<div className={s.titleWrapper}>
								<TitleH> {work.title} </TitleH>
							</div>
							<div className={s.desc}>{work.desc}</div>
						</div>
					</a>
				</div>
			))
		}
	</div>
)};

export default Works;