

import TitleH from "@simple/TitleH";
import ServicesList from "@simple/ServicesList";

import s from "./style.scss";


const Capabilities = () => {
	return (
		<section className={s.capabilities}> 
			<div className={s.container}>
				<div className={s.titleWrapper}>
					<TitleH size="h1">Capabilities</TitleH>
					<p>We use our skills to make successful digital products that create results</p>
				</div>
				<ServicesList />
			</div>
		</section>
	)
};

export default Capabilities;