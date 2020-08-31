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

	const tl = () => {
		if(!header) return;
		const mainTl = new TimelineMax()
		const headerTl = new TimelineMax()
		const mainSection = new TimelineMax()

		headerTl.add(header.tl)

		// this.main && mainSection.add(this.main.tl)

		mainTl
			.add(mainSection, "start")
			.add(headerTl, "-=3")
			.call(noScrollOff)
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
		tl()
	}, 100)

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