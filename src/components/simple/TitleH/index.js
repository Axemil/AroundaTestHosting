import s from "./style.scss";

const TitleH = React.forwardRef(({ children, size="h4"}, ref) => (
	<>
		{size === "hero" && <h2 className={`${s.title} ${s.hero}`} ref={ref}> { children } </h2>}
		{size === "h1" && <h2 className={`${s.title} ${s.h1}`} ref={ref}> { children } </h2>}
		{size === "h2" && <h2 className={`${s.title} ${s.h2}`} ref={ref}> { children } </h2>}
		{size === "h3" && <h3 className={`${s.title} ${s.h3}`} ref={ref}> { children } </h3>}
		{size === "h4" && <h4 className={`${s.title} ${s.h4}`} ref={ref}> { children } </h4>}
		{size === "h5" && <h5 className={`${s.title} ${s.h5}`} ref={ref}> { children } </h5>}
		{size === "h6" && <h6 className={`${s.title} ${s.h6}`} ref={ref}> { children } </h6>}
	</>
));

export default TitleH;