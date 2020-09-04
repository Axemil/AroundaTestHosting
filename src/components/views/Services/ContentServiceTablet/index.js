

import componentStyle from './style.scss';
import TitleH from "@simple/TitleH";
import ButtonSecondary from "@simple/ButtonSecondary";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContentServiceTablet = ({ title, desc, id, list, image }) => {
	return (
		<div className={componentStyle.serviceContentWrapper} key={id}>
			<div className={componentStyle.image}>
				<LazyLoadImage src={image} alt={title} />
			</div>
			<div className={componentStyle.content}>
				<TitleH size="h2">{ title }</TitleH>
				<p className={componentStyle.desc}>{desc}</p>
				<ul className={componentStyle.list}>
					{
						list.map((el, i) => {
							return <li tabIndex='-1' key={i}><span>{el}</span></li>
						})
					}
				</ul>
				<div className={componentStyle.btn}>
					<ButtonSecondary href="/works">Show Cases</ButtonSecondary>
				</div>
			</div>
		</div>
	)
};
export default ContentServiceTablet;