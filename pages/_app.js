// pages/_app.js

import App from 'next/app';
import store from '@/store';
import "@/style.scss";


import mobileDetect from 'mobile-detect'
import Layout from "@sections/Layout"
import SubscribePopup from "@sections/SubscribePopup";
import Cursor from "@simple/Cursor"

import utmcookie from '@/functions/utmcookie';
import MobileProvider from '@/functions/MobileProvider';


class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {	
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		
		const md = ctx.req && new mobileDetect(ctx.req.headers['user-agent']) || false

		return { isMobile: md && md.mobile() ? true : false }
	};
	
	componentDidMount() {
		utmcookie.writeReferrerOnce();
		if (utmcookie.utmPresentInUrl()) {
			utmcookie.writeUtmCookieFromParams();
		}
	}

	render() {
		const { Component, pageProps, isMobile } = this.props;
		
		return (
			<MobileProvider isMobile={isMobile}>
				<Layout isMobile={isMobile}>
						<SubscribePopup />
						{!isMobile && <Cursor></Cursor>}				
						<Component {...pageProps} isMobile={isMobile} />
				</Layout>
			</MobileProvider>
		)
	}
}

export default store.withRedux(MyApp);