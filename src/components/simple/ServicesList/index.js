

import TitleH from "@simple/TitleH";

import list from "@/data/servicesSection";

import s from "./style.scss";


const ServicesList = () => {
	return (
		<ul className={s.servicesWrapper}>
			{
				list.map(item => (
					<li key={item.id} className={s.item}>
						<div className={s.itemIcon}>
							{item.icon}
						</div>
						<TitleH size="h6">{item.title}</TitleH>
					</li>
				))
			}
		</ul>
	)
};

export default ServicesList;