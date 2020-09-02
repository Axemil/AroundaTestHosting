

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
						<div className={s.itemTitle}>
							{item.title}
						</div>
					</li>
				))
			}
		</ul>
	)
};

export default ServicesList;