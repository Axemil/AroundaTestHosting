import React from 'react';

import TitleH from "@simple/TitleH";
import s from "./style.scss";

const ContactHero = () => (
	<section className={s.contactHero}>
		<TitleH size="hero">Hello, Let’s talk!</TitleH>
		<p>Fill the form below or write to <a className='stopCursor' href="mailto:info@arounda.agency">info@arounda.agency</a></p>
	</section>
);

export default ContactHero;