import Button from "@simple/Button";

import s from "./style.scss";


const LetsTalk = () => (
	<section className={s.letsTalk}>
		<div className={s.container}>
			<p className={s.gotProject}>
				Got a project? Let’s talk
			</p>
			<div className={s.email}>
				<a href="mailto:info@arounda.agency" className="stopCursor">info@arounda.agency</a>		
			</div>
			<div className={s.btnWrapper}>
				<Button size="md">Contact us</Button>
			</div>
		</div>
	</section>
);

export default LetsTalk;