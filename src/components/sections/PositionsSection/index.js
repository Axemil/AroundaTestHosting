
import Title from "@simple/Title";

import s from "./style.scss";

const PositionsSection = () => (
	<section className={s.PositionsSection}>
		<div className={s.container}>
			<div className={s.PositionsContent}>
				<p>
					WELCOME TO OUR OFFICE
				</p>
				<div className={s.PositionsTitle}>
					<Title text="Let’s create great things together!">
					</Title>
				</div>
			</div>
		</div>
	</section>
);

export default PositionsSection;