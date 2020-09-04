import Button from "@simple/Button";

import s from "./style.scss";


const LetsTalk = () => (
	<section className={s.letsTalk}>
		<div className={s.container}>
			<p className={s.gotProject}>
				Got a project? Let’s talk
			</p>
			<div className={s.email}>
				<a href="mailto:info@arounda.agency" className="stopCursor email-hover">info@arounda.agency</a>		
			</div>
			<div className={s.btnWrapper}>
				<Button href="/contact" size="md">Contact us</Button>
			</div>
		</div>
	</section>
);

export default LetsTalk;