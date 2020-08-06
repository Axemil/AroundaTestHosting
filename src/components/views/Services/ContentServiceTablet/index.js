

import TitleH from "@simple/TitleH";
import ButtonSecondary from "@simple/ButtonSecondary";
import s from './style.scss';

const ContentServiceTablet = ({ title, desc, id, list, image }) => {
	return (
		<div className={s.contentWrapper} id={id}>
			<div className={s.image}>
				<img src={image} alt={title} />
			</div>
			<div className={s.content}>
				<TitleH size="h2">{ title }</TitleH>
				<p className={s.desc}>{desc}</p>
				<ul className={s.list}>
					{
						list.map((el, i) => {
							return <li tabIndex='-1' key={i}><span>{el}</span></li>
						})
					}
				</ul>
				<ButtonSecondary>Show Cases</ButtonSecondary>
			</div>
		</div>
	)
};
export default ContentServiceTablet;