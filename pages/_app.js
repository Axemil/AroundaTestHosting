// pages/_app.js

import App from 'next/app';
import { Provider } from "react-redux";

import SubscribePopup from "@sections/SubscribePopup";

import store from "@/store";

import { TimelineMax } from "gsap"

import MediaQuery from "react-responsive"
import noScroll from "no-scroll"


import Cursor from "@simple/Cursor"
import Header from "@sections/Header"
import Aside from "@sections/Aside"
import Layout from "@sections/Layout"

import utmcookie from '@/functions/utmcookie';

import "@/style.scss";

class MyApp extends App {
	state = {
		openMenu: false,
		preloader: true,
		isPaused: true,
		mounted: false
	}

	componentDidMount() {
		this.setState({ mounted: true })
		setTimeout(() => {
			this.tl()
		}, 500)

		noScroll.on()

		utmcookie.writeReferrerOnce();

		if (utmcookie.utmPresentInUrl()) {
			utmcookie.writeUtmCookieFromParams();
        }
	}
	tl = () => {
		if(!this.header) return;
		const mainTl = new TimelineMax()
		const headerTl = new TimelineMax()
		const mainSection = new TimelineMax()

		headerTl.add(this.header.tl)

		this.main && mainSection.add(this.main.tl)

		mainTl
			.add(mainSection, "start")
			.add(headerTl, "-=3")
			.call(this.noScrollOff)
	}

	noScrollOff = () => {
		noScroll.off()
	}

	toggleMenu = () => {
		const { openMenu } = this.state
		this.setState({
			openMenu: !openMenu
		})

		noScroll.toggle()
	}
	handleCloseMenu = (e) => {
		const { openMenu } = this.state
		if (e.target.matches(".menu-link")) {
			this.setState({
				openMenu: !openMenu
			})
			noScroll.off()
		}
	}

    
	render() {
		const { Component, pageProps } = this.props;
		const { openMenu } = this.state
		let isDesktop = process.browser;
		return (
			<Provider store={store}>
				{isDesktop && <SubscribePopup />}
				<Layout>
					{isDesktop && <MediaQuery minDeviceWidth={1081}>
						{(matches) => {
							return matches ? <Cursor></Cursor> : ''
						}}
					</MediaQuery>}
					<Header
						ref={(el) => {
							this.header = el
						}}
						toggleMenu={this.toggleMenu}
						openMenu={openMenu}
					/>
					<Aside openMenu={openMenu} handleCloseMenu={this.handleCloseMenu} />
					<Component {...pageProps} />
				</Layout>
			</Provider>
		)
	}
}

export default MyApp;