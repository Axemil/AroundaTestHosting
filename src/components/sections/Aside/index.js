
import { TimelineLite, Power0 } from "gsap"
import Link from 'next/link'

import TitleH from "@simple/TitleH"
import s from "./style.scss"
import expertise from "@/data/expertise";
import UnderlinedLink from "@simple/UnderlinedLink";

const menuList = [
	{
		title: "Works",
		desc: "Our amazing works",
		link: "/works",
		disable: false
	},
	{
		title: "Methods",
		desc: "Our process",
		link: "/",
		disable: true
	},
	{
		title: "Services",
		desc: "Our capabilities",
		link: "/services",
		disable: false
	},
	{
		title: "Blog",
		desc: "Our thoughts",
		link: "/blog",
		disable: false
	},
	{
		title: "Contact",
		desc: "Let`s chat",
		link: "/contact",
		disable: false
	}
]


const Aside = ({ openMenu, handleCloseMenu }) => {
	const menu = React.useRef(null);
	const socials = React.useRef(null)

	React.useEffect(() => {
		openMenu ? timeline() : clearStyles()
	}, [openMenu])

	const timeline = () => {
		const tl = new TimelineLite()
		
		tl.staggerTo(
			menu.current.childNodes,
			0.3,
			{ y: 0, autoAlpha: 1, ease: Power0.easeNone },
			0.1,
			"+=.2"
		).staggerTo(
			socials.current.childNodes,
			0.3,
			{ y: 0, autoAlpha: 1, ease: Power0.easeNone },
			0.1,
			"-=1"
		)

		return tl;
	}

	const clearStyles = () => {
		const tl = new TimelineLite()

		tl.set(menu.current.childNodes, { clearProps: "all" }).set(
			socials.current.childNodes,
			{ clearProps: "all" }
		)
	}

	return (
		<aside className={`${s.aside} ${openMenu ? s.active : ""}`}>
			<div className={s.wrapper}>
				<div className={s.grid}>
					<div className={s.menu}>
						<ul ref={menu}>
							{menuList.map((el, i) => {
								return (
									<li key={i} className={`${el.disable ? s.disable : ""}`}>
										<Link
											href={el.link}
										>
											<a className={`${s.link} menu-link stopCursor`} onClick={handleCloseMenu}>
												{el.title}
											</a>
										</Link>
										<div className={s.desc}>{el.desc}</div>
									</li>
								)
							})}
						</ul>
					</div>
					<div className={s.asideLinks}>
						<div className={s.title}>
							<TitleH size="h5">Expertise</TitleH>
						</div>
						<ul ref={socials} className={s.footerList}>
							{expertise.map((link, i) => {
								return (
									<li key={i} className={`${link.disable ? s.disable : ""}`}>
										<UnderlinedLink href={link.link} disabled={link.disable} className={`${s.listItem} menu-link`} onClick={handleCloseMenu}>									
											{link.title}
										</UnderlinedLink>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</aside>
	)
}
export default Aside
