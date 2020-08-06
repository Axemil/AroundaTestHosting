import s from "./style.scss";


const TitleH = ({ children, size="h4"}) => (
	<>
		{size === "hero" && <h1 className={`${s.title} ${s.hero}`}> { children } </h1>}
		{size === "h1" && <h2 className={`${s.title} ${s.h1}`}> { children } </h2>}
		{size === "h2" && <h2 className={`${s.title} ${s.h2}`}> { children } </h2>}
		{size === "h3" && <h3 className={`${s.title} ${s.h3}`}> { children } </h3>}
		{size === "h4" && <h4 className={`${s.title} ${s.h4}`}> { children } </h4>}
		{size === "h5" && <h5 className={`${s.title} ${s.h5}`}> { children } </h5>}
		{size === "h6" && <h6 className={`${s.title} ${s.h6}`}> { children } </h6>}
	</>
);

export default TitleH;