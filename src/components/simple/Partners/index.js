

import { LazyLoadImage } from 'react-lazy-load-image-component';

import s from "./style.scss";

const Partners = () => (
	<ul className={s.partners}>
		<li>
			<LazyLoadImage 
				src="gigzi"
				src="/assets/images/partners/fit3d.png"
				effect="blur"
			/>
		</li>
		<li>
			<LazyLoadImage 
				src="velonto"
				src="/assets/images/partners/velonto.png"
				effect="blur"
			/>
		</li>
		<li>
			<LazyLoadImage 
				src="squadhelp"
				src="/assets/images/partners/paradigm.png"
				effect="blur"
			/>
		</li>
		<li>
			<LazyLoadImage 
				src="virtana"
				src="/assets/images/partners/virtana.png"
				effect="blur"
			/>
		</li>
		<li>
			<LazyLoadImage 
				src="metricly"
				src="/assets/images/partners/metricly.png"
				effect="blur"
			/>
		</li>
		<li>
			<LazyLoadImage 
				src="bold"
				src="/assets/images/partners/bold.png"
				effect="blur"
			/>
		</li>
	</ul>
);


export default Partners;