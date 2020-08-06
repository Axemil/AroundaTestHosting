
import Slider from "@simple/Slider";
import Partners from "@simple/Partners";

import s from "./style.scss";

const SliderSection = () => {
	return (
		<section className={s.sliderSection}>
			<div className={s.container}>
				<Slider />
				<Partners />
			</div>
		</section>
	)
};

export default SliderSection;