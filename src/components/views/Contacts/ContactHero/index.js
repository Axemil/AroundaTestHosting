import React from 'react';

import TitleH from "@simple/TitleH";
import s from "./style.scss";

const ContactHero = () => (
	<section className={s.contactHero}>
		<div className={s.titleWrapper}>
			<TitleH size="hero">Hello, Let’s talk!</TitleH>
		</div>
		<p>Fill the form below or write to <a className='stopCursor email-hover' href="mailto:info@arounda.agency">info@arounda.agency</a></p>
	</section>
);

export default ContactHero;