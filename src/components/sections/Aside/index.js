
import { TimelineLite, Power0 } from "gsap"
import Link from 'next/link'

import TitleH from "@simple/TitleH"
import s from "./style.module.scss"

class Aside extends React.PureComponent {
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.openMenu) {
			this.timeline()
		} else {
			this.clearStyles()
		}
	}

	timeline = () => {
		const tl = new TimelineLite()

		tl.staggerTo(
			this.menu.childNodes,
			0.3,
			{ y: 0, autoAlpha: 1, ease: Power0.easeNone },
			0.1,
			"+=.2"
		).staggerTo(
			this.socials.childNodes,
			0.3,
			{ y: 0, autoAlpha: 1, ease: Power0.easeNone },
			0.1,
			"-=1"
		)
	}

	clearStyles = () => {
		const tl = new TimelineLite()

		tl.set(this.menu.childNodes, { clearProps: "all" }).set(
			this.socials.childNodes,
			{ clearProps: "all" }
		)
	}

	render() {
		const menu = [
			{
				title: "Works",
				desc: "Our amazing works",
				link: "/works/",
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
				link: "/services/",
				disable: false
			},
			{
				title: "Blog",
				desc: "Our thoughts",
				link: "/blog/",
				disable: false
			},
			{
				title: "Contact",
				desc: "Let`s chat",
				link: "/contact/",
				disable: false
			}
		]

		const { openMenu, handleCloseMenu } = this.props
		return (
			<aside className={`${s.aside} ${openMenu ? s.active : ""}`}>
				<div className={s.wrapper}>
					<div className={s.grid}>
						<div className={s.menu}>
							<ul ref={(el) => (this.menu = el)}>
								{menu.map((el, i) => {
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
							<ul ref={(el) => (this.socials = el)} className={s.footerList}>
								<li>
									<Link href={""}> 
										<a className={`${s.listItem} stopCursor`}>
											Food delivery 
										</a>
									</Link>
								</li>
								<li>
									<Link href={""}> 
										<a className={`${s.listItem} stopCursor`}>
											SaaS 
										</a>
									</Link>
								</li>
								<li>
									<Link href={""}> 
										<a className={`${s.listItem} stopCursor`}>
											Fintech 
										</a>
									</Link>
								</li>
								<li>
									<Link href={""}> 
										<a className={`${s.listItem} stopCursor`}>
											Health&Meditation 
										</a>
									</Link>
								</li>
								<li>
									<Link href={""}> 
										<a className={`${s.listItem} stopCursor`}>
											Cryprocurrency 
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</aside>
		)
	}
}
export default Aside
