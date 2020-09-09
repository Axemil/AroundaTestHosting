import Link from 'next/link';

import s from "./style.scss";

const Button = ({ children, href, size="md" }) => (
	href ? (
		<Link 
			href={href}
		>
			<a className={`
				stopCursor
				${s.button}
				${size === "sm" ? s.sm : ""}
				${size === "md" ? s.md : ""}
			`} title={children}> { children } </a>
		</Link>
	) : (
		<button 
			type="button"
			className={`
				stopCursor
				${s.button}
				${size === "sm" ? s.sm : ""}
				${size === "md" ? s.md : ""}
			`}
		>
			<span> { children } </span>
		</button>
	)	
);

export default Button;