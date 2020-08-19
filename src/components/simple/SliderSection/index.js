
import Slider from "@simple/Slider";
import Partners from "@simple/Partners";

import s from "./style.scss";

const SliderSection = ({darkBackground = false}) => {
	return (
		<section className={darkBackground ? s.sliderSectionDark : s.sliderSection}>
			<div className={s.container}>
				<Slider />
				<Partners />
			</div>
		</section>
	)
};

export default SliderSection;