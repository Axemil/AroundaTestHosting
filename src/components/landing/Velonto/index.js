

import Link from 'next/link';
import parse from 'html-react-parser';
import Slider from 'react-slick';
import axios from "axios";


import Title from '@simple/Title';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import CustomLink from '@simple/CustomLink';
import list from '@/data/Innovation';
import { dataSlider } from '@/data/velontoLandingSlider';
import Footer from '@sections/Footer';

import { validateEmail } from "@/functions/validateEmail";
import utmcookie from '@/functions/utmcookie';

import s from './style.scss';



export default class Velonto extends React.Component {
	state = {
		slider: dataSlider,
		name: "",
		email: "",
	};
    next = () => {
		this.slider1.slickNext();
		this.slider2.slickNext();
    }

    previous = () => {
		this.slider1.slickPrev();
		this.slider2.slickPrev();
    }

    settingsImage = {
        slidesToScroll: 1,
        slidesToShow: 1.23,
        infinite: false,
        responsive: [
            {
                breakpoint: 1296,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
	}
	settingsContent = {
		slidesToScroll: 1,
		slidesToShow: 1,
		infinite: false,
		fade: true,
	}

	handleInput = e => {
        // const label = e.target.parentElement.querySelector('label');

        // if (e.target.value) {
        //     e.target.classList.add(style.active);
        //     label.classList.add(style.active);
        // } else {
        //     e.target.classList.remove(style.active);
        //     label.classList.remove(style.active);
		// }

		if(e.target.name === "email" && validateEmail(e.target.value)) {
			this.setState({
				[e.target.name]: e.target.value
			});
		}

		if(e.target.name === "name"){
			this.setState({
				[e.target.name]: e.target.value
			});
		}
	};
	
	clearValues = () => {
		this.setState({
			name: "",
			email: ""
		})
		document.querySelectorAll("input").value = "";
	}
	
	sendToAmo = (e) => {
		const { name, email } = this.state;

		if (name && email){
			axios.post("/contact/add", {
				name,
				email,
				...utmcookie.getUtmData()
			}).then((res) => {
				console.log(res)
				this.clearValues()
			}).catch((error) => {
				console.log(error);
				this.clearValues();
			});
		}else{
			console.log("empty")
		}
		
	}

    render() {
		const { slider, name, email } = this.state;
        return (
            <>
                <section className={s.sectionHead}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <h1 className={s.title}>Food Delivery</h1>
                        </div>
                        <div className={s.descWrapper}>
                            <p>Rapid and innovative solutions for startups and enterprise innovators that want to create and launch new digital products</p>
                        </div>
                        <Link href="/contact/">
                            <a className={`${s.link} stopCursor`}>
                                Let's discuss your project
                            </a>
                        </Link>
                    </div>
                </section>
                <section className={s.sectionService}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <p>From the concept idea to</p>
                        </div>
                        <div className={s.descWrapper}>
                            <p>full-fledged development and product support</p>
                        </div>
                    </div>
                    <div className={s.row}>
                        {
                            list.map(el => {
                                return (
                                    <div className={s.item} key={el.id}>
                                        <div className={s.image}>
                                            {parse(el.image)}
                                        </div>
                                        <div className={s.text}> <span className={s.number}>{el.number}</span>{el.text}</div>
                                        <div className={s.desc}>{el.desc}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className={s.sectionQuoteSecond}>
                    <div className={s.container}>
                        <div className={s.quoteWrapper}>
                            <div className={s.quote}>
                                <svg height="38" viewBox="0 0 48 38" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m19.6189091 5.69314079c-6.2138182 1.16606499-11.38036365 7.95667871-11.45018183 14.61010831 1.32654546-.7545126 2.44363633-.8916968 3.63054543-.8916968 5.4458182 0 9.1461818 4.0469315 9.1461818 9.3285199 0 5.3501805-4.7476363 9.2599278-9.984 9.2599278-7.33090905 0-10.9614545-6.4476534-10.9614545-12.9638989 0-12.0722022 6.84218182-23.32129966 19.6189091-25.0361011zm27.0545454 0c-6.2138181 1.16606499-11.3803636 7.95667871-11.4501818 14.61010831 1.3265455-.7545126 2.4436364-.8916968 3.6305455-.8916968 5.4458182 0 9.1461818 4.0469315 9.1461818 9.3285199 0 5.3501805-4.7476364 9.2599278-9.984 9.2599278-7.3309091 0-10.9614545-6.4476534-10.9614545-12.9638989 0-12.0722022 6.8421818-23.32129966 19.618909-25.0361011z" fill="#3858cd" transform="" /></svg>
                            </div>
                            <q>We empower products with innovative, different from competitors sense</q>
                        </div>
                    </div>
                </section>
                <section className={s.sectionSupport}>
                    <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <TitleSecondary text={'We support business on any stage of product development'} />
                            </div>
                            <div className={s.descWrapper}>
                                <Description light text={'We can strengthen your own team or assume the whole range of work'} />
                            </div>
                        </div>
                        <div className={s.row}>
                            <div className={s.item}>
                                <div className={s.itemIcon}>
                                    <svg height="60" viewBox="0 0 60 60" width="60"><g fill="none" fillRule="evenodd"><path d="m0 1h60v60h-60z" fill="#d8d8d8" opacity="0"/><g transform="translate(3 15)"><path d="m23 0h-16c-3.86599 0-7 3.13401-7 7v30c0 3.866 3.13401 7 7 7h16c3.866 0 7-3.134 7-7v-30c0-3.86599-3.134-7-7-7z" stroke="currentColor" strokeWidth="2"/><circle cx="15" cy="36" fill="currentColor" fillRule="nonzero" r="2"/></g></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    iOS & Android apps
                            </div>
                                <div className={s.itemList}>
                                    <ul>
                                        <li>Strategy</li>
                                        <li>Branding</li>
                                        <li>UX Design</li>
                                        <li>UI Design</li>
                                        <li>Graphic design</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemIcon}>
                                    <svg height="57" viewBox="0 0 51 57" width="51"><g fill="none" fillRule="evenodd"><path d="m.5.5h59v59h-59z" fill="currentColor" opacity="0" stroke="#979797"/><g transform=""><path d="m31 11.68v-3.68c0-1.85651543-.7374979-3.63699282-2.0502525-4.94974747-1.3127547-1.31275465-3.0932321-2.05025253-4.9497475-2.05025253h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.3" stroke="currentColor" strokeWidth="2"/><path d="m42.58 11.1h-16c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h16c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" stroke="currentColor" strokeWidth="2"/><g fill="currentColor" fillRule="nonzero"><circle cx="27.58" cy="23.1" r="2"/><circle cx="27.58" cy="33.1" r="2"/><circle cx="27.58" cy="43.1" r="2"/></g></g></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    Website & Web app
                            </div>
                                <div className={s.itemList}>
                                    <ul>
                                        <li>Strategy</li>
                                        <li>Branding</li>
                                        <li>UX Design</li>
                                        <li>UI Design</li>
                                        <li>Graphic design</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemIcon}>
                                    <svg height="60" viewBox="0 0 90 60" width="90"><g fill="none" fillRule="evenodd"><path d="m-2.5.5h89v59h-89z" fill="#d8d8d8" opacity="0" stroke="#979797"/><g transform="translate(0 4)"><path d="m31 11.47v-3.47c0-3.86599325-3.1340068-7-7-7h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.79" stroke="currentColor" strokeWidth="2"/><path d="m72 11h-46c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h46c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" stroke="currentColor" strokeWidth="2"/><g fill="currentColor" fillRule="nonzero"><circle cx="31" cy="23" r="2"/><circle cx="31" cy="33" r="2"/><path d="m29 43c0-1.1045695.8954305-2 2-2s2 .8954305 2 2-.8954305 2-2 2-2-.8954305-2-2"/></g></g></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    Android Tablet App
                            </div>
                                <div className={s.itemList}>
                                    <ul>
                                        <li>Strategy</li>
                                        <li>Branding</li>
                                        <li>UX Design</li>
                                        <li>UI Design</li>
                                        <li>Graphic design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionCreatePerfect}>
                <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'We create the perfect interaction process for each participant'} />
                        </div>
                        <Description light text={'We focus not only on the result that the user of the service receives, as well as on the process of interaction with the product'} />
                    </div>
                    <div className={s.columnWrapper}>
                            <div className={s.card}>
                                <div className={s.image}>
									<svg height="87" viewBox="0 0 87 87" width="87"><g fill="none" fillRule="evenodd"><rect fill="#393939" height="11.222449" rx="5.611224" width="11.222449" x="68.291835" y="70.479591"/><rect fill="#d3d3d3" className={s.light} height="44.889795" rx="8.632653" width="50.069386" x="7" y="36.812245"/><rect fill="#393939" height="27.624489" rx="7.769388" transform="matrix(-1 0 0 -1 114.138772 73.62449)" width="44.889795" x="34.624489" y="23"/><path d="m48.4367336 36.8122445c4.7676825 0 8.6326528 3.8649704 8.6326528 8.6326529l-.0008973 5.1793471-14.6746125.0002446c-4.2909142 0-7.7693875-3.4784733-7.7693875-7.7693876v-6.042857z" className={s.primary} fill="#fff"/></g></svg>
                                </div>
                                <div className={s.category}>
                                Customer panel
                            </div>
                            </div>
                            <div className={s.card}>
                                <div className={s.image}>
									<svg height="87" viewBox="0 0 87 87" width="87"><g fill="none" fillRule="evenodd"><g fill="#393939"><rect height="11.222449" rx="5.611224" width="11.222449" x="66.112243" y="21"/><rect fill="#d3d3d3" className={s.light} height="44.889795" rx="8.632653" transform="matrix(0 -1 1 0 -13.589796 78.47959)" width="50.069386" x="7.410204" y="23.589796"/><rect height="27.624489" rx="7.769388" width="44.889795" x="10" y="57.257142"/></g><path d="m47.1204072 57.2571419c3.8611934 0 7.0645242 2.8166451 7.6674048 6.5073477-.6383074 4.1374403-4.2145892 7.3048968-8.5306701 7.3048968h-27.6244891c-4.3160809 0-7.8923627-3.1674565-8.5311391-7.3046633.6033496-3.6909361 3.8066804-6.5075812 7.6678738-6.5075812z" className={s.primary} fill="#fff"/></g></svg>
                                </div>
                                <div className={s.category}>
                                Delivery personnel
                            </div>
                            </div>
                            <div className={s.card}>
                                <div className={s.image}>
									<svg height="87" viewBox="0 0 87 87" width="87"><g fill="none" fillRule="evenodd"><g fill="#393939"><rect height="11.970612" rx="5.985306" width="11.970612" x="14"/><rect fill="#d3d3d3" className={s.light} height="47.882448" rx="9.208163" transform="matrix(0 -1 1 0 -12.703673 88.586121)" width="53.407346" x="11.237551" y="26.703673"/><rect height="29.466122" rx="8.287347" transform="matrix(0 1 -1 0 124.497957 .733061)" width="47.882448" x="37.941224" y="47.882448"/></g><path d="m61.882387 38.6742848.0009817 29.4661218c0 5.0855281-4.122635 9.2081631-9.208163 9.2081631l-5.5258187-.0002849.0009208-30.3866532c0-4.5769752 3.7103716-8.2873468 8.2873468-8.2873468z" className={s.primary} fill="#fff"/></g></svg>
                                </div>
                                <div className={s.category}>
                                    Restaurant & Store 
                            </div>
                            </div>
                            <div className={s.card}>
                                <div className={s.image}>
									<svg height="87" viewBox="0 0 87 87" width="87"><g fill="none" fillRule="evenodd"><g fill="#393939"><rect height="27.624489" rx="7.769388" width="44.889795" x="10" y="21"/><rect height="11.222449" rx="5.611224" width="11.222449" x="10" y="73.659182"/><rect fill="#d3d3d3" className={s.light} height="44.889795" rx="8.632653" transform="matrix(0 -1 1 0 -4.957143 114.736733)" width="50.069386" x="29.855102" y="37.40204"/></g><path d="m54.8888974 34.8122445.0008973 6.042857c0 4.2909143-3.4784733 7.7693876-7.7693875 7.7693876l-14.6755098-.0002446.0008632-5.1793471c0-4.7676825 3.8649704-8.6326529 8.6326529-8.6326529z" className={s.primary} fill="#fff"/></g></svg>
                                </div>
                                <div className={s.category}>
                                    Admin panel
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionSlider}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'Stay tuned demand by satisfying clients desire earlier than competitors'} />
                        </div>
                    </div>
                    <div className={s.panel}>
						<Slider ref={slider => (this.slider1 = slider)} {...this.settingsContent}>
							{
								slider.content.map((el) => (
									<div key={el.id}>
										<div className={s.panelTitle}>{el.title}</div>
										<ul className={s.panelList}>
											{
												el.list.map((listItem) => (
													<li key={listItem}>{listItem}</li>
												))
											}
										</ul>
									</div>
								))
							}
						</Slider>
                        <div className={s.panelButtons}  >
                            <button className={s.prev} tabIndex="-1" onClick={this.previous}>
                                <span className={s.arrow}>
                                    <svg height="9" viewBox="0 0 13 9" width="13"><path d="m1 1 5.66649434 6 5.33350566-6" fill="none" stroke="#393939" strokeWidth="2px" /></svg>
                                </span>
                            </button>
                            <button className={s.next} tabIndex="-1" onClick={this.next}>
                                <span className={s.arrow}>
                                    <svg height="9" viewBox="0 0 13 9" width="13"><path d="m1 1 5.66649434 6 5.33350566-6" fill="none" stroke="#393939" strokeWidth="2px" /></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={s.slider}>
                        <Slider ref={slider => (this.slider2 = slider)}  {...this.settingsImage}>
							{
								slider.images.map(image => (
									<div className={s.image} key={image.id}>
                                		<img src={image.src} alt={image.alt} />
                            		</div>
								))
							}
                        </Slider>
                    </div>
                </section>
                <section className={s.sectionValues}>
                    <div className={s.fixedPanel}>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <TitleSecondary text={'Values ​​on which our work is based'} />
                            </div>
                            <Description light text={'We are proud that combination of emerging technologies, team knowledge and business ideas of our customers leads to products with a global reach '} />
                        
                        <ul className={s.panelList}>
                            <li>
                                <span className={s.number}><span>01</span></span>
                                <p>Openness and empathy towards the client </p>
                            </li>
                            <li>
                                <span className={s.number}><span>02</span></span>
                                <p>Opacity of processes and respect to invested time</p>
                            </li>
                            <li>
                                <span className={s.number}><span>03</span></span>
                                <p>Efficiency and attention to details</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className={s.columnWrapper}>
                        <div className={`${s.column} ${s.columnFirst}`}>
                            <div className={s.card}>
                                <div className={s.image}>
									<svg height="72" viewBox="0 0 73 72" width="73"><g fill="none" transform="matrix(-1 0 0 1 57.5 2.916667)"><path d="m27.1764706 54.3529412c-15.0089608 0-27.1764706-12.1675098-27.1764706-27.1764706s12.1675098-27.1764706 27.1764706-27.1764706c15.0074509 0 27.1764706 12.1675098 27.1764706 27.1764706s-12.1690197 27.1764706-27.1764706 27.1764706" fill="#69feda" className={s.light} opacity=".8"/><path d="m28.2434877 54.3529412c6.3299356 0 10.5811782-9.2612265 12.0916013-3.4033696.2804452 1.0876473.4296169 2.2280699.4296169 3.4033696 0 7.5052353-6.083 13.5882353-13.5882353 13.5882353s-13.5882353-6.083-13.5882353-13.5882353c0-1.1732128.1486424-2.3116722.4281242-3.3975752 1.5084091-5.8607977 7.151618 3.3975752 13.4836405 3.3975752z" fill="#393939"/><path d="m14.0321176 50.9573921c3.8968039 2.1590197 8.3748824 3.3955491 13.144353 3.3955491s9.2460391-1.2365294 13.1428432-3.3955491c-1.5098041-5.8580392-6.8137452-10.1926862-13.1428432-10.1926862s-11.6330392 4.334647-13.144353 10.1926862" className={s.primary} fill="#ffffff"/></g></svg>
                                </div>
                                <div className={s.category}>
                                    Strategy
                                </div>
                                <div className={s.titleWrapper}><TitleSecondary text={'We protect your idea'} /></div>
                            </div>
                            <div className={s.card}>
                                <div className={s.image}>
									<svg height="72" viewBox="0 0 73 72" width="73" ><g fill="none" transform="matrix(-1 0 0 1 63.68 4.7)"><path d="m40.5139311 21.7739776c9.2675977 9.4936366 9.2675977 24.8868611 0 34.3818484-9.2689161 9.4936366-24.2956353 9.4936366-33.56323291 0-9.26759758-9.4949873-9.26759758-24.8882118 0-34.3818484 9.26759761-9.4936366 24.29431681-9.4936366 33.56323291 0" className={s.light} fill="#69feda" opacity=".75"/><path d="m56.3627228 5.53795466c7.2081315 7.38393954 7.2081315 19.35734804 0 26.74128754-7.2094499 7.3852902-18.8964587 7.3852902-26.1045902 0-7.20945-7.3839395-7.20945-19.357348 0-26.74128754 7.2081315-7.38393954 18.8951403-7.38393954 26.1045902 0" fill="#393939"/><path d="m25.3243795 14.6534125c-1.595361 6.1359497.4337801 13.0174519 5.1341621 17.8297762 4.6977452 4.8136748 11.0159024 6.4844143 17.0057581 4.850142 1.5966796-6.1359497.3929071-13.0485165-4.3061564-17.8608408-4.6977451-4.8136748-11.843908-6.4533497-17.8337638-4.8190774" className={s.primary} fill="#fff"/></g></svg>
                                </div>
                                <div className={s.category}>
                                    UX design
                            </div>
                                <div className={s.titleWrapper}><TitleSecondary text={'Consultation &  Assessment'} /></div>
                            </div>
                        </div>
                        <div className={`${s.column} ${s.columnSecond}`}>
                            <div className={s.card}>
                                <div className={s.image}>
                                    <svg height="72" viewBox="0 0 72 72" width="72" ><g fill="none" transform="matrix(-.70710678 -.70710678 -.70710678 .70710678 75.900492 36.61736)"><path d="m46.7041527 8.95151668c10.154712 10.15285472 10.154712 26.61619072 0 36.76904552-10.1528547 10.1547119-26.6143334 10.1547119-36.76904539 0-10.15285477-10.1528548-10.15285477-26.6161908 0-36.76904552 10.15471199-10.15285477 26.61619069-10.15285477 36.76904539 0" fill="#393939"/><path d="m19.5620268 9.29248323c0 5.12935517-4.1562264 9.28558147-9.2855815 9.28558147-5.1274981 0-9.28558148-4.1562263-9.28558148-9.28558147 0-5.12749809 4.15808338-9.28558146 9.28558148-9.28558146 5.1293551 0 9.2855815 4.15808337 9.2855815 9.28558146" className={s.light} fill="#8dfde2"/><path d="m4.65068291 16.6338496c1.56554903 1.2015543 3.50066421 1.9444009 5.62520529 1.9444009 5.1293551 0 9.2855814-4.1562264 9.2855814-9.28558155 0-2.12639816-.7409894-4.06151333-1.9444007-5.62520525-2.7801031 1.2554106-5.39678 2.99738569-7.68103303 5.28349585-2.28611016 2.28611015-4.02808523 4.90092995-5.28535296 7.68289005" className={s.primary} fill="#fff"/><path d="m56.2363593 9.29248323c0 5.12935517-4.1580833 9.28558147-9.2855815 9.28558147-5.1293551 0-9.2855814-4.1562263-9.2855814-9.28558147 0-5.12749809 4.1562263-9.28558146 9.2855814-9.28558146 5.1274982 0 9.2855815 4.15808337 9.2855815 9.28558146" className={s.light} fill="#8dfde2"/><path d="m52.1521891 16.9839161c-1.2646962-2.9138155-3.0642419-5.6493478-5.4487791-8.032028-2.1691118-2.16911183-4.6353623-3.84608784-7.2576105-5.08849863-1.1068413 1.53026382-1.7809745 3.39480857-1.7809745 5.42835091 0 5.12935522 4.1580833 9.28558142 9.2855815 9.28558142 1.9276866 0 3.7179468-.5868487 5.2017826-1.5934057" className={s.primary} fill="#fff"/><path d="m19.5620268 46.6959197c0 5.1293551-4.1562264 9.2855814-9.2855815 9.2855814-5.1274981 0-9.28558148-4.1562263-9.28558148-9.2855814 0-5.1293553 4.15808338-9.2855815 9.28558148-9.2855815 5.1293551 0 9.2855815 4.1562262 9.2855815 9.2855815" className={s.light} fill="#8dfde2"/><path d="m10.2764453 37.4103382c-1.91840114 0-3.7030899.5812774-5.18321159 1.5822631 1.21641117 2.4235367 2.81910254 4.7040755 4.84150218 6.7283323 2.46996471 2.4699647 5.31878101 4.3270809 8.35145201 5.5936343.7892744-1.3649805 1.2758389-2.9286724 1.2758389-4.6186482 0-5.1293553-4.1562264-9.2855815-9.2855815-9.2855815" className={s.primary} fill="#fff"/><path d="m56.2363593 46.6959197c0 5.1293551-4.1580833 9.2855814-9.2855815 9.2855814-5.1293551 0-9.2855814-4.1562263-9.2855814-9.2855814 0-5.1293553 4.1562263-9.2855815 9.2855814-9.2855815 5.1274982 0 9.2855815 4.1562262 9.2855815 9.2855815" className={s.light} fill="#8dfde2"/><path d="m51.6643248 38.7378049c-1.3854089-.8227025-2.9843859-1.3278381-4.7133612-1.3278381-5.1293553 0-9.2855815 4.1562262-9.2855815 9.2855815 0 1.6008342.4419937 3.0865272 1.1569834 4.4013655 2.8562449-1.2591248 5.541635-3.034528 7.8816016-5.3763516 2.0948271-2.0929701 3.7309466-4.4645076 4.9603577-6.9827573" className={s.primary} fill="#fff"/></g></svg>
                                </div>
                                <div className={s.category}>
                                    Development
                            </div>
                                <div className={s.titleWrapper}><TitleSecondary text={'Rapid Agile Development '} /></div>
                            </div>
                            <div className={s.card}>
                                <div className={s.image}>
									<svg height="73" viewBox="0 0 73 73" width="73" ><g fill="none" transform="matrix(0 1 -1 0 62.369998 9.549999)"><path d="m45.9377902 7.88166961c10.5099692 10.50889279 10.5099692 27.54830419 0 38.05612059-10.5088928 10.5088928-27.5472278 10.5088928-38.05612059 0-10.50889281-10.5078164-10.50889281-27.5472278 0-38.05612059 10.50889279-10.50889281 27.54722779-10.50889281 38.05612059 0" fill="#393939"/><path d="m37.5651208 16.2542314c5.8857549 5.8846786 5.8857549 15.4269643 0 21.3116428-5.8846786 5.885755-15.4258879 5.885755-21.3116429 0-5.8846785-5.8846785-5.8846785-15.4269642 0-21.3116428 5.885755-5.8846786 15.4269643-5.8846786 21.3116429 0" className={s.primary} fill="#fff"/><path d="m37.5588776 37.565659c-1.8578663 1.8578663-4.0795558 3.124789-6.4357953 3.8104558-5.6177314-8.7952641-5.6177314-20.1372904 0-28.9325545 2.3562395.6856668 4.577929 1.9536659 6.4357953 3.8104558 5.885755 5.8846786 5.885755 15.4269643 0 21.3116429" className={s.light} fill="#8dfde2"/></g></svg>
                                </div>
                                <div className={s.category}>
                                    UI design
                            </div>
                                <div className={s.titleWrapper}><TitleSecondary text={'Support & Maintenance'} /></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionIdea}>
                <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <Title text={'Have an idea?'} />
                            </div>
                            <Description light text={'We are ready to enhance you'} />
                        </div>
                        <div className={s.formWrapper}>
                            <form className={s.form} onSubmit={(e) => e.preventDefault()}>
                                <div className={s.inputWrapper}>
                                    <label>Your name</label>
                                    <input 
										type="text" 
										name="name"
										placeholder='What’s your name'
										onChange={this.handleInput}
									/>
                                </div>
                                <div className={s.inputWrapper}>
                                    <label>Your email</label>
                                    <input 
										type="email" 
										name="email"
										placeholder='What’s your email'
										onChange={this.handleInput}
									/>
                                </div>
                                <div className={s.btnWrapper}>
                                    <button className={`${s.btn} stopCursor`} onClick={this.sendToAmo}>
                                        Get in touch
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section className={s.sectionKnow}>
                    <div className={s.image}>
                        <img src="../assets/images/velontoLanding/android-velonto.jpg" alt="velonto" />
                    </div>
                    <div className={s.content}>
                        <div className={s.titleWrapper}>
                            We know how to
                            <div className={s.bold}>convert complexity into competitive advantages</div>
                        </div>
                        <div className={s.descWrapper}>
                            <p>Integrated project solution for <a href='velonto.at' className={`${s.link} stopCursor`}>Velonto</a></p>
                        </div>
                        <ul className={s.list}>
                            <li><span>Website Landing pages</span></li>
                            <li><span>Web client app</span></li>
                            <li><span>iOS biker app / Android biker app</span></li>
                            <li><span>iOS client app / Android client app</span></li>
                            <li><span>Admin panel</span></li>
                            <li><span>Tablet restaurant/Shop app</span></li>
                        </ul>
                    </div>
                </section>
                <section className={s.sectionKey}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'What are the key business challenges'} />
                        </div>
                        <div className={s.row}>
                                <div className={`${s.item}`}>
                                <div className={s.icon}>
                                    <svg height="123" viewBox="0 0 123 123" width="123"><g fill="none" fillRule="evenodd" transform="translate(-.174565 -.40326)"><circle cx="115.894929" cy="58.981345" r="5.778986" stroke="currentColor" strokeWidth="2.889493"/><g fill="currentColor"><path d="m3.55530681 67.4620067c-4.51366226-4.5136767-4.51366226-11.8317507 0-16.3454274l26.56127249-26.5613158c4.5136767-4.5136623 11.8318951-4.5136623 16.3455718 0l12.3652955 12.3653821-2.1671196 1.9192012-12.2414807-12.2414085c-3.3851853-3.3852431-8.8737769-3.3852431-12.2589622 0l-26.56140249 26.5613014c-3.38524308 3.3853297-3.38524308 8.8739213 0 12.2591066l26.56140249 26.5613736c3.3851853 3.3851853 8.8737769 3.3851853 12.2589622 0l14.4086003-14.4086003 1.8306382 2.255827-14.1959337 14.1959337c-4.5136767 4.5136767-11.8318951 4.5136767-16.3455718 0z" fillRule="nonzero"/><circle cx="32.15974" cy="49.073419" fillRule="nonzero" r="2.889493" transform="matrix(.70710678 .70710678 -.70710678 .70710678 44.119517 -8.367099)"/><circle cx="32.15974" cy="69.505167" fillRule="nonzero" r="2.889493" transform="matrix(.70710678 .70710678 -.70710678 .70710678 58.566945 -2.382778)"/><circle cx="21.943938" cy="59.289365" fillRule="nonzero" r="2.889493" transform="matrix(.70710678 .70710678 -.70710678 .70710678 48.351143 1.848746)"/><path d="m43.3974106 66.4404265c-3.9495032-3.9495033-3.9495032-10.3527638 0-14.302267l18.3885877-18.3885877c3.9495032-3.9494599 10.3527638-3.9494599 14.302267 0l18.3885877 18.3885877c3.9495033 3.9495032 3.9495033 10.3527637 0 14.302267l-18.3885877 18.3885877c-3.9495032 3.9495032-10.3527638 3.9495032-14.302267 0zm2.0431604-12.2591067c-2.8210119 2.8211563-2.8210119 7.3949345 0 10.2159463l18.3885877 18.3885877c2.8210118 2.8210119 7.3947899 2.8210119 10.2159462 0l18.3885878-18.3885877c2.8210118-2.8210118 2.8210118-7.39479 0-10.2159463l-18.3885878-18.3885877c-2.8211563-2.8210118-7.3949344-2.8210118-10.2159462 0z"/><circle cx="68.936915" cy="59.289365" fillRule="nonzero" r="2.889493" transform="matrix(.70710678 .70710678 -.70710678 .70710678 62.115067 -31.380307)"/></g></g></svg>
                                </div>
                                    <div className={s.content}>
                                        <div className={s.title}>Developed a flexible logistics system</div>
                                        <div className={s.desc}>We adapted the Clark-Wright method for optimal delivery of several food orders from a restaurant by one courier, taking into account all the specifics of such delivery </div>
                                    </div>
                                </div>
                                <div className={`${s.item}`}>
                                <div className={s.icon}>
                                    <svg height="123" viewBox="0 0 123 123" width="123"><g fill="none" fillRule="evenodd" transform=""><path d="m11.4323475 98.7359983c-6.31391403 0-11.43234987-5.1184049-11.43234987-11.4323476v-42.8713032c0-6.3138997 5.11843584-11.4323444 11.43234987-11.4323444h42.8713032c6.3139427 0 11.4323476 5.1184304 11.4323476 11.4323444v42.8713032c0 6.3139427-5.1184049 11.4323476-11.4323476 11.4323476zm-8.57426062-11.4323476c0 4.7354213 3.8388251 8.5742607 8.57426062 8.5742607h42.8713032c4.7354213 0 8.5742607-3.8388394 8.5742607-8.5742607v-42.8713032c0-4.7354355-3.8388394-8.5742606-8.5742607-8.5742606h-42.8713032c-4.73543552 0-8.57426062 3.8388251-8.57426062 8.5742606z" fill="currentColor"/><g fill="currentColor" fillRule="nonzero"><circle cx="32.867999" cy="65.867999" r="2.858087"/><circle cx="47.158434" cy="65.867999" r="2.858087"/><circle cx="18.577565" cy="65.867999" r="2.858087"/><circle cx="32.867999" cy="80.158434" r="2.858087"/><circle cx="47.158434" cy="80.158434" r="2.858087"/><circle cx="18.577565" cy="80.158434" r="2.858087"/><circle cx="32.867999" cy="51.577565" r="2.858087"/><circle cx="47.158434" cy="51.577565" r="2.858087"/><circle cx="18.577565" cy="51.577565" r="2.858087"/></g></g></svg>
                                </div>
                                    <div className={s.content}>
                                        <div className={s.title}>Have created universal platform </div>
                                        <div className={s.desc}>We developed a universal order processing system for shops and restaurants without a direct connection to the partner’s internal system.Added a system for the quick integration of new partners on the platform.</div>
                                    </div>
                                </div>
                                <div className={s.item}>
                                <div className={s.icon}>
                                    <svg height="123" viewBox="0 0 123 123" width="123"><g fill="none" fillRule="evenodd" transform=""><circle cx="88.778463" cy="76.760001" r="5.821539" stroke="currentColor" strokeWidth="2.910769"/><g fillRule="nonzero"><path d="m11.6430771 98.5907705c-6.43029683 0-11.64307952-5.2127511-11.64307952-11.6430771v-43.6615392c0-6.4303259 5.21278269-11.6430771 11.64307952-11.6430771h20.375385v2.9107693h-20.375385c-4.82272262 0-8.73230782 3.9095998-8.73230782 8.7323078v43.6615392c0 4.8227081 3.9095852 8.7323079 8.73230782 8.7323079h43.6615392c4.8227081 0 8.7323078-3.9095998 8.7323078-8.7323079v-20.3753849h2.9107693v20.3753849c0 6.430326-5.2127511 11.6430771-11.6430771 11.6430771z" fill="currentColor"/><circle cx="18.92" cy="65.116924" fill="currentColor" r="2.910769"/><circle cx="33.473847" cy="79.67077" fill="currentColor" r="2.910769"/><circle cx="18.92" cy="79.67077" fill="currentColor" r="2.910769"/></g><path d="m42.2061545 66.5723085c-5.626517 0-10.1876924-4.5611755-10.1876924-10.1876925v-26.1969235c0-5.6265025 4.5611754-10.1876913 10.1876924-10.1876913h26.1969236c5.626517 0 10.1876924 4.5611888 10.1876924 10.1876913v26.1969235c0 5.626517-4.5611754 10.1876925-10.1876924 10.1876925zm-7.2769231-10.1876925c0 4.0188991 3.258024 7.2769232 7.2769231 7.2769232h26.1969236c4.0188991 0 7.2769232-3.2580241 7.2769232-7.2769232v-26.1969235c0-4.0189283-3.2580241-7.2769232-7.2769232-7.2769232h-26.1969236c-4.0188991 0-7.2769231 3.2579949-7.2769231 7.2769232z" fill="currentColor"/><circle cx="55.304616" cy="43.286154" fill="currentColor" fillRule="nonzero" r="2.910769"/></g></svg>
                                </div>
                                    <div className={s.content}>
                                        <div className={s.title}>Built motivation for executors</div>
                                        <div className={s.desc}>Created a motivation system for couriers in the application with the division of orders by delivery area. As a result, the best couriers can receive the best orders in the best areas and earn more</div>
                                    </div>
                                </div>
                                <div className={s.item}>
                                <div className={s.icon}>
                                    <svg height="123" viewBox="0 0 123 123" width="123"><g fill="none" fillRule="evenodd" transform=""><path d="m37.029999 96.3699973c-6.3181688 0-11.4399996-5.1218308-11.4399996-11.4399996v-42.8999987c0-6.3181688 5.1218308-11.4399996 11.4399996-11.4399996h42.8999987c6.3181688 0 11.4399996 5.1218308 11.4399996 11.4399996v42.8999987c0 6.3181688-5.1218308 11.4399996-11.4399996 11.4399996zm-8.5799997-11.4399996c0 4.7385908 3.8414089 8.5799997 8.5799997 8.5799997h42.8999987c4.7385908 0 8.5799997-3.8414089 8.5799997-8.5799997v-42.8999987c0-4.7385908-3.8414089-8.5799997-8.5799997-8.5799997h-42.8999987c-4.7385908 0-8.5799997 3.8414089-8.5799997 8.5799997z" fill="currentColor"/><g fill="currentColor" fillRule="nonzero"><circle cx="29.879999" cy="14.86" r="2.86"/><circle cx="9.86" cy="112.099997" r="2.86"/><circle cx="58.479998" cy="112.099997" r="2.86"/><circle cx="58.479998" cy="14.86" r="2.86"/><circle cx="107.099997" cy="14.86" r="2.86"/><circle cx="87.079997" cy="112.099997" r="2.86"/><circle cx="44.179999" cy="14.86" r="2.86"/><circle cx="58.479998" cy="63.479998" r="2.86"/><circle cx="72.779998" cy="112.099997" r="2.86"/></g></g></svg>
                                </div>
                                    <div className={s.content}>
                                        <div className={s.title}>Implemented innovative solutions for online transactions/payments</div>
                                        <div className={s.desc}>Developed a solution for online payment of all orders in the service and the further distribution of funds between process participants. Guaranteed a refund to the client, until the receipt of your order</div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
                <section className={s.sectionResult}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'As a result'} />
                        </div>
                        <div className={s.row}>
                            <div className={s.item}>
                                    <div className={s.title}>Increased business liquidity</div>
                                    <div className={s.desc}>Fulfil time of each order dicreased in 40-50%</div>
                                    <div className={s.number}>01</div>
                            </div>
                            <div className={s.item}>
                                    <div className={s.title}>Developed a complex logistics system </div>
                                    <div className={s.desc}>Thus we optimized costs and expedited delivery by 25%</div>
                                    <div className={s.number}>02</div>
                            </div>
                            <div className={s.item}>
                                    <div className={s.title}>Dicreased company expenses</div>
                                    <div className={s.desc}>By developing a unique staff motivation delivery system</div>
                                    <div className={s.number}>03</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionBg}>
                    <img src={'../assets/images/velontoLanding/sectionBg-velonto.jpg'} alt='velonto background' />
                </section>
                <section className={s.sectionFlexible}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'Flexible customer-oriented interaction model'} />
                        </div>
                        <div className={s.row}>
                            <div className={s.item}>
                                <div className={s.number}>01</div>
                                <div className={s.text}>
                                    <div className={s.title}>Time & Material</div>
                                    <div className={s.desc}>Keep resources flexible to meet evolving requirements </div>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.number}>03</div>
                                <div className={s.text}>
                                    <div className={s.title}>Team involvement</div>
                                    <div className={s.desc}>Choose a team that sincerely stands for the result </div>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.number}>02</div>
                                <div className={s.text}>
                                    <div className={s.title}>Open Estimation</div>
                                    <div className={s.desc}>Track the time to complete each task </div>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.number}>04</div>
                                <div className={s.text}>
                                    <div className={s.title}>Discussion and testing</div>
                                    <div className={s.desc}>Expand your business and find milestones for growth with us</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionOurTeam}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'Our team becomes the heart of the product since the start'} />
                        </div>
                        <ul className={s.list}>
                            <li>
                                <div className={s.number}><span>01</span></div>
                                <p>More than <b>4 years</b> we create unique business solutions</p>
                            </li>
                            <li>
                                <div className={s.number}><span>02</span></div>
                                <p><b>Over 40</b> completed projects and successfully realized business goals</p>
                            </li>
                            <li>
                                <div className={s.number}><span>03</span></div>
                                <p>Conversion <b>increasing on 20%</b> in user</p>
                            </li>
                        </ul>
                    </div>
                    <div className={`${s.column} ${s.columnFirst}`}>
                        <div className={`${s.item} ${s.strategy}`}>
                            <div className={s.image}>
                                <img src="../assets/images/velontoLanding/flexible1.jpg" alt="our team" />
                            </div>
                            <div className={s.itemWrapper}>
                                <div className={s.category}>
                                    Strategy
                                </div>
                                <div className={s.title}>
                                    Product manager
                                </div>
                            </div>
                        </div>
                        <div className={`${s.item} ${s.branding}`}>
                            <div className={s.image}>
                                <img src="../assets/images/velontoLanding/flexible2.jpg" alt="our team" />
                            </div>
                            <div className={s.itemWrapper}>
                                <div className={s.category}>
                                    Branding
                                </div>
                                <div className={s.title}>
                                    Graphic & Motion designer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${s.column} ${s.columnSecond}`}>
                        <div className={`${s.item} ${s.design}`}>
                            <div className={s.image}>
                                <img src="../assets/images/velontoLanding/flexible3.jpg" alt="our team" />
                            </div>
                            <div className={s.itemWrapper}>
                                <div className={s.category}>
                                    Design
                                </div>
                                <div className={s.title}>
                                    UX/UI designer
                                </div>
                            </div>
                        </div>
                        <div className={`${s.item} ${s.development}`}>
                            <div className={s.image}>
                                <img src="../assets/images/velontoLanding/flexible4.jpg" alt="our team" />
                            </div>
                            <div className={s.itemWrapper}>
                                <div className={s.category}>
                                    Development
                                </div>
                                <div className={s.title}>
                                    Front-end developer
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionJourney}>
                    <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <TitleSecondary text={'The best journey always begins with the first step'} />
                            </div>
                            <div className={s.descWrapper}>
                                <Description text={' Will be happy to  discuss your ideas!'} />
                            </div>
                        </div>
                        <form className={s.form} onSubmit={e => e.preventDefault()}>
                            <div className={s.inputWrapper}>
                                <input 
									className={s.input} 
									type='text' 
									placeholder='What’s your name' 
									name='name' 
									onChange={this.handleInput} 
								/>
                                <label>Your name</label>
                            </div>
                            <div className={s.inputWrapper}>
                                <input 
									className={s.input} 
									type='email' 
									placeholder='What’s your email' 
									name='email'  	
									onChange={this.handleInput}
								/>
                                <label>Your email</label>
                            </div>
                            <div className={s.btnWrapper}>
                                <button className={`${s.btn} stopCursor`} onClick={this.sendToAmo}>Get in touch</button>
                            </div>
                        </form>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}
