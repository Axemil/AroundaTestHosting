import Router, { useRouter } from 'next/router'
import { TimelineMax } from "gsap"
import noScroll from "no-scroll"

import Header from "@sections/Header"
import Aside from "@sections/Aside"

import Footer from '@sections/Footer';
import s from "./style.scss";

const Layout = ({ children, isMobile }) => {
	let [openMenu, setOpenMenu] = React.useState(false)
	let [header, setHeader] = React.useState(false)
	let [animationDone, setAanimationDone] = React.useState(false)
	
	const startTimeLine = () => {
		if(animationDone || !header) return;

		header.tl

		setAanimationDone(true)
	}

	const noScrollOff = () => {
		noScroll.off()
	}

	const toggleMenu = () => {
		setOpenMenu(!openMenu)

		noScroll.toggle()
	}
	const handleCloseMenu = (e) => {
		if (e.target.matches(".menu-link")) {
			setOpenMenu(!openMenu)

			noScroll.off()
		}
	}

	// animation execution
	setTimeout(() => {
		startTimeLine()
	}, 0)

	// noScroll.on()

	const {pathname} = useRouter();
	
	Router.events.on('routeChangeComplete', () => { {
		window.scrollTo(0, 0);
	} })

	return (
		<div className={s.grid}>
			<Header
				ref={(el) => setHeader(el)}
				toggleMenu={toggleMenu}
				isMobile={isMobile}
				openMenu={openMenu}
				hideLinks={pathname == '/404'}
			/>
			<Aside openMenu={openMenu} handleCloseMenu={handleCloseMenu} />
			{ children }
			{ pathname !== '/404' ? <Footer /> : null }
		</div>	
	)
};

export default Layout;