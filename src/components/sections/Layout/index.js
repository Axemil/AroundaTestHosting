import { useRouter } from 'next/router'

import s from "./style.scss";

const Layout = ({ children }) => {
	const {pathname} = useRouter();

	React.useEffect(() => {
		if (process.browser) {
			window.scrollTo(0,0);
		}
	}, [pathname]);

	return (
		<div className={s.grid}>
			{ children }
		</div>	
	)
};

export default Layout;