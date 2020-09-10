

import { LazyLoadImage } from 'react-lazy-load-image-component';

import s from "./style.scss";

const Partners = () => (
	<ul className={s.partners}>
		<li>
			<LazyLoadImage 
				alt="gigzi"
				src="/assets/images/partners/fit3d.png"
				effect="blur"
			/>
		</li>
		<li>
			<LazyLoadImage 
				alt="velonto"
				src="/assets/images/partners/velonto.png"
				effect="blur"
			/>
		</li>
		<li>
			<LazyLoadImage 
				alt="squadhelp"
				src="/assets/images/partners/paradigm.png"
				effect="blur"
			/>
		</li>
		<li>
			<LazyLoadImage 
				alt="virtana"
				src="/assets/images/partners/virtana.png"
				effect="blur"
			/>
		</li>
		<li>
			<LazyLoadImage 
				alt="metricly"
				src="/assets/images/partners/metricly.png"
				effect="blur"
			/>
		</li>
		<li>
			<LazyLoadImage 
				alt="bold"
				src="/assets/images/partners/bold.png"
				effect="blur"
			/>
		</li>
	</ul>
);


export default Partners;