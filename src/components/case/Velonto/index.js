import React, { Fragment, Component } from 'react';
import s from './style.scss';
import data from '@/data/Works';

import Title from '@simple/Title';
import TitleH from '@simple/TitleH';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import CustomLink from '@simple/CustomLink';
import WorksSection from '@sections/WorksSection';
import ButtonSecondary from '@simple/ButtonSecondary'
import UnderlinedLink from "@simple/UnderlinedLink";
import { LazyLoadImage } from "react-lazy-load-image-component"
import DragSlider from '@simple/DragSlider';

const VelontoCase = (props) => {
    return (
        <Fragment>
            <section className={s.sectionHead}>
                <div className={s.container}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <TitleH size="hero">
                                Food you love, delivered to you by Velonto
                            </TitleH>
                        </div>
                        <div className={s.descWrapper}>
                            <Description text={'An idea that was shaped and evolved into the full-service product to connect customers, freelance cyclists, restaurants and other local businesses in Austria. From strategy, market research, and branding to full-cycle product development carried out by our team'} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.sectionBg}>
                <img src="/assets/images/mainVideo.jpg" alt="velonto image" />
            </section>
            <section className={s.sectionServices}>
                <div className={s.contentWrapper}>
                    <ul className={s.list}>
                        <li>
                            <div data-number={'01'} className={s.titleWrapper}>
                                <TitleSecondary text={'Project idea'} />
                            </div>
                            <Description light text={'A courier platform that helps cyclists and e-scooter riders make money in their spare time. The service had to be simple, yet immensely useful to all delivery parties involved, offering a high number of incoming orders and quick turnarounds. '} />
                        </li>
                        <li>
                            <div data-number={'02'} className={s.titleWrapper}>
                                <TitleSecondary text={'Task description'} />
                            </div>
                            <Description light text={'The client reached out to us to help them carry out all stages of product development. These included market analysis and further business model adjustment; branding strategy and its implementation; mobile apps and website development. The product had to be primarily tested in a single city and then scaled across the country.'} />
                        </li>
                    </ul>
                </div>
                <div className={s.panel}>
                    <div className={s.panelTitle}>
                        Services
                    </div>
                    <ul className={s.panelList}>
                        <li>Discovery & Strategy</li>
                        <li>UX/UI Design</li>
                        <li>App Development</li>
                        <li>Branding</li>
                        <li>Web Design</li>
                    </ul>
                </div>
            </section>
            <section className={s.sectionBgSecond}>
                <img src="/assets/images/velontoCase-bg2.jpg" alt="velonto" />
            </section>
            <section className={s.sectionWhat}>
                <div className={s.infoWrapper}>
                    <ul className={s.infoList}>
                        <li>
                            <div className={s.infoLabel}>Team size</div>
                            <div className={s.infoText}>5+</div>
                        </li>
                        <li>
                            <div className={s.infoLabel}>Time</div>
                            <div className={s.infoText}>1,5years</div>
                        </li>
                        <li>
                            <div className={s.infoLabel}>Industry</div>
                            <div className={s.infoText}>Food delivery</div>
                        </li>
                    </ul>
                </div>
                <div className={s.contentWrapper}>
                    <div className={s.titleWrappe}>
                        <TitleSecondary text={'What is Velonto?'} />
                    </div>
                    <div className={s.descWrapper}>
                        <Description light text={'An Austrian based startup that promotes environmentally friendly delivery services. Velonto platform helps busy working people save time for important commitments by bringing meals and parcels in a fast and sustainable way with zero CO2 emissions.'} />
                    </div>
                    <div className={s.linkWrapper}>
                        <a target="_blank" href="https://velonto.at/"><ButtonSecondary>Go to website</ButtonSecondary></a>
                    </div>
                </div>
            </section>
            <section className={s.sectionComment}>
                <div className={s.container}>
                    <blockquote>
                        <q>Arounda’s work and mindset represents the pinnacle of perfection while still being highly efficient and communicative</q>
                        <div className={s.author}>
                            <div className={s.image}>
                                <img src="/assets/images/velonto/face.jpg" alt="Josef Chen" />
                            </div>
                            <div className={s.name}>
                                Jozef Chen, <span>CEO at <UnderlinedLink href="https://velonto.at/">Velonto</UnderlinedLink></span>
                            </div>
                        </div>
                    </blockquote>
                </div>
            </section>
            <section className={s.sectionChallenge}>
                <div className={s.container}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'Challenges and Objectives'} />
                        </div>
                        <Description light text={'Our main challenge was to keep up with the technical aspects of the platform and provide new UX/UI solutions for landing pages, blog, and tech documentation interfaces. '} />
                    </div>
                    <div className={s.row}>
                        <div className={s.item}>
                            <div className={s.itemTitle}>
                                Clients
                            </div>
                            <div className={s.itemList}>
                                <ul>
                                    <li>Fast delivery for time-sensitive packages</li>
                                    <li>Need help with small tasks</li>
                                    <li>Food delivered with a few clicks</li>
                                    <li>Work more effectively</li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemTitle}>
                                Riders
                            </div>
                            <div className={s.itemList}>
                                <ul>
                                    <li>Help the city dwellers</li>
                                    <li>Use your hobby as work</li>
                                    <li>Earn money by cycling</li>
                                    <li>Address the pollution issue</li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemTitle}>
                                Partners
                            </div>
                            <div className={s.itemList}>
                                <ul>
                                    <li>More clients</li>
                                    <li>Risk-free deliveries</li>
                                    <li>Improved reputation</li>
                                    <li>Market exposure and support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.sectionCheck}>
                    <div className={s.container}>
                        <div className={s.title}>
                            <span>Let`s check</span><br />
                            Velonto process
                        </div>
                    </div>
            </section>
            <section className={s.sectionMobile}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <Title text={'Branding'} />
                        </div>
                        <Description light text={'Our goal was to show through colors and a visual appearance that Velonto is a reliable assistant when it comes to small everyday tasks. We came up with a unique brand identity and made sure it is consistent in every medium, both mentally and visually. Spacious blue color, clean and uncluttered UI reveal calm, trust, freedom, and harmony.'} />
                    </div>
                    <div className={`${s.image} ${s.image1}`}>
                        <img src={'/assets/images/velonto/velontoBranding1.jpg'} alt={'velonto image'} />
                    </div>
                    <div className={`${s.image} ${s.image4}`}>
                        <img src={'/assets/images/velonto/velontoBranding2.jpg'} alt={'velonto image'} />
                    </div>
                    <div className={`${s.image} ${s.image2}`}>
                        <img src={'/assets/images/velonto/velontoBranding3.jpg'} alt={'velonto image'} />
                    </div>
                    <div className={`${s.image} ${s.image3}`}>
                        <img src={'/assets/images/velonto/velontoBranding4.jpg'} alt={'velonto image'} />
                    </div>
            </section>
            <section className={s.sectionMobileApp}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <Title text={'Mobile App'} />
                        </div>
                        <Description light text={"To get the most out of your product you'll need an all-in-one delivery management tool. We designed dedicated mobile applications both for clients and bike riders. Place orders wherever you are, track delivery time and status. For riders, we added a set of essential delivery guidelines to completely reduce the number of human errors."} />
                    </div>
                    <div className={`${s.image} ${s.image1}`}>
                        <img src={'/assets/images/velonto/velontoMobile1.jpg'} alt={'velonto image'} />
                    </div>
                    <div className={`${s.image} ${s.image2}`}>
                        <img src={'/assets/images/velonto/velontoMobile2.jpg'} alt={'velonto image'} />
                    </div>
                    <div className={`${s.image} ${s.image3}`}>
                        <img src={'/assets/images/velonto/velontoMobile3.jpg'} alt={'velonto image'} />
                    </div>
            </section>
            <section className={s.sectionWebApp}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <Title text={'Web Application'} />
                        </div>
                        <Description light text={'Want to place an order from your laptop? No problem! Velonto web client — developed by our team — lets you find your favorite food and place an order in a few clicks. We made sure the platform is intuitive and easy to use to help customers become confident and more engaged with a service on all stages of delivery.'} />
                    </div>
                    <div className={`${s.image} ${s.image1}`}>
                        <img src={'/assets/images/velonto/velonto_slider1.jpg'} alt={'velonto image'} />
                    </div>
                    <div className={`${s.image} ${s.image2}`}>
                        <img src={'/assets/images/velonto/velonto_slider2.jpg'} alt={'velonto image'} />
                    </div>
                    {/* <DragSlider pictures={['/assets/images/velonto/velonto_slider1.jpg','/assets/images/velonto/velonto_slider2.jpg']}/> */}
            </section>
            <section className={s.sectionLanding}>
                        <div className={s.imageWrapper}>
                            <img src="/assets/images/velonto/velonto_landing.jpg" alt="velonto landing" />
                        </div>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <Title text="Landing page" />
                            </div>
                            <Description text="Custom landing pages were created to help Velonto spread the word about their eco-friendly delivery service, market their core message and increase brand awareness amongst customers and partners. Thanks to the intuitive design and thought-through UI website visitors get answers to all questions in one place, without having to call or email the support service." />
                        </div>
            </section>
            <section className={s.sectionHelped}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <Title text="How Velonto Helped" />
                            <Description text="Our main challenge was to keep up with the technical aspects of the platform and provide new UX/UI solutions for landing pages, blog, and tech documentation interfaces." />
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                1
                        </div>
                            <div className={s.itemTitle}>
                                A unique value proposition
                        </div>
                            <p className={s.itemText}>
                            Carry out small errands by bike any time you want.  Make money from your hobby.
                        </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                2
                        </div>
                            <div className={s.itemTitle}>
                                Ecological sustainability
                        </div>
                            <p className={s.itemText}>
                                Green transport as the main. Zero CO2 emissions and no negative impact on the environment.
                        </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                3
                        </div>
                            <div className={s.itemTitle}>
                                Experience accumulation
                        </div>
                            <p className={s.itemText}>
                                Fast, responsive and user-oriented service delivers better UX and generates a higher number of orders.
                        </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                4
                            </div>
                            <div className={s.itemTitle}>
                                Landing pages
                            </div>
                            <p className={s.itemText}>
                                Increase conversion rates via relevant messages to the users, ensure high customer satisfaction.
                            </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                5
                        </div>
                            <div className={s.itemTitle}>
                                Marketing websites
                        </div>
                            <p className={s.itemText}>
                                Engage audiences with beautiful designs and convert users into returning customers.
                        </p>
                        </div>
                        <div className={s.item}>
                            <a target="_blank" href="https://velonto.at/">
                                <div className={s.itemIcon}>
                                    <svg height="60" viewBox="0 0 60 60" width="60"><g fill="none" fillRule="evenodd"><path d="m.5.5h59v59h-59z" fill="#d8d8d8" opacity="0" stroke="#979797" /><path d="m2 39h42l-15.333204-15" stroke="#393939" strokeWidth="2" /></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    View Velonto <br/> landing page
                                </div>
                            </a>
                            {/* <div className={s.itemSecondIcon}>
                                <svg height="83" viewBox="0 0 75 83" width="75"><g fill="none" fillRule="evenodd"><path d="m.5.5h74v82h-74z" fill="#d8d8d8" opacity="0" stroke="#979797" /><path d="m38.75 16.1573333v-5.0906666c0-2.56817971-.9218724-5.03117343-2.5628157-6.8471507-1.6409433-1.81597726-3.86654-2.83618267-6.1871843-2.83618267h-20c-4.83249156 0-8.75 4.33537601-8.75 9.68333337v41.5c0 5.3479573 3.91750844 9.6833333 8.75 9.6833333h14.125" stroke="#393939" strokeWidth="2" /><path d="m53.2249999 15.3550005h-20c-4.8324916 0-8.75 4.335376-8.75 9.6833334v41.5c0 5.3479573 3.9175084 9.6833333 8.75 9.6833333h20c4.8324916 0 8.75-4.335376 8.75-9.6833333v-41.5c0-5.3479574-3.9175084-9.6833334-8.75-9.6833334z" stroke="#393939" strokeWidth="2" /><g fill="#393939" fillRule="nonzero"><ellipse cx="34.475" cy="31.955001" rx="2.5" ry="2.766667" /><ellipse cx="34.475" cy="45.788334" rx="2.5" ry="2.766667" /><ellipse cx="34.475" cy="59.621665" rx="2.5" ry="2.766667" /></g></g></svg>
                            </div> */}
                        </div>
                    </div>
            </section>
            <section className={s.sectionQuoteSecond}>
                    <div className={s.container}>
                        <div className={s.quoteWrapper}>
                            <div className={s.quote}>
                                <svg height="29" viewBox="0 0 37 29" width="37"><path d="m14.9723254 4.34476534c-4.7421244.8898917-8.6850144 6.07220216-8.73829669 11.14981946 1.01236363-.5758122 1.86488038-.6805054 2.77067942-.6805054 4.15601917 0 6.97998087 3.0884477 6.97998087 7.1191336 0 4.0830325-3.6231962 7.066787-7.61936843 7.066787-5.59464114 0-8.36532057-4.9205776-8.36532057-9.8935018 0-9.21299639 5.22166507-17.79783394 14.9723254-19.1064982zm20.6468899 0c-4.7421244.8898917-8.6850143 6.07220216-8.7382966 11.14981946 1.0123636-.5758122 1.8648803-.6805054 2.7706794-.6805054 4.1560191 0 6.9799808 3.0884477 6.9799808 7.1191336 0 4.0830325-3.6231961 7.066787-7.6193684 7.066787-5.5946411 0-8.3653205-4.9205776-8.3653205-9.8935018 0-9.21299639 5.221665-17.79783394 14.9723253-19.1064982z" fill="#405FCB" transform="" /></svg>
                            </div>
                            Save and make money on small errands while keeping the environment clean
                        </div>
                    </div>
            </section>
            <section className={s.sectionKey}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <Title text={'Key ideas'} />
                        </div>
                        <div className={s.row}>
                            <div className={s.item}>
                                <div className={s.itemContent}>
                                    <div className={s.itemTitle}>
                                        Save time
                                    </div>
                                    <p className={s.itemText}>
                                        Clients can fully trust their errands to a well-trained net of cyclists in the area.
                                    </p>
                                </div>
                                <div className={s.itemNumber}>
                                    1
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemContent}>
                                    <div className={s.itemTitle}>
                                        Be more effective
                                    </div>
                                    <p className={s.itemText}>
                                        New branding elements and order-processing algorithms help complete more orders for shorter periods of time.
                                    </p>
                                </div>
                                <div className={s.itemNumber}>
                                    2
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemContent}>
                                    <div className={s.itemTitle}>
                                        Earn money
                                    </div>
                                    <p className={s.itemText}>
                                        The good and flexible interface encourages users to place more orders, increase customer retention, thus giving more profit opportunities for bike riders and local businesses.
                                    </p>
                                </div>
                                <div className={s.itemNumber}>
                                    3
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className={s.sectionResult}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <Title text={'Results'} />
                        </div>
                        <div className={s.contentWrapper}>
                            <div className={s.descWrapper}>
                                <Description text={'Within a year and a half of working with Velonto, we built branding identity from scratch, established a new approach in logistics, developed a full set of software components and marketing materials needed for a successful product rollout. We also integrated a strong engagement strategy for cyclists and e-scooter riders to keep them motivated to complete as many deliveries as possible — the better courier is, the higher-paid orders he gets.'} />
                                <Description text={"Thanks to the agile development approach and continuous improvement of the product carried out by our team, Velonto now processes orders two times faster, has a well-developed net of couriers, and a strong reputation among customers, restaurants and supermarkets in Austria. While you're reading this, food, packages, and documents are being delivered to the hundreds of customers via Velonto."} />
                            </div>
                            <div className={s.list}>
                                <div className={s.item}>
                                    <div className={s.itemLabel}>
                                        Acquired by
                                    </div>
                                    <div className={s.itemNumber}>
                                        Foodninjas
                                    </div>
                                </div>
                                <div className={s.item}>
                                    <div className={s.itemLabel}>
                                        Location
                                    </div>
                                    <div className={s.itemNumber}>
                                        European <br/> Union (EU)
                                    </div>
                                </div>
                                <div className={s.item}>
                                    <div className={s.itemLabel}>
                                        Users
                                    </div>
                                    <div className={s.itemNumber}>
                                        10 000+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className={s.sectionScope}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <Title text={'Scope of work'} />
                        </div>
                        <div className={s.row}>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    Discovery & Strategy
                                </div>
                                <ul className={s.list}>
                                    <li>Define idea value</li>
                                    <li>Market & competitors research</li>
                                    <li>VP & BM workshop</li>
                                    <li>Idea validation, PoC</li>
                                    <li>Product roadmap</li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    UX design
                                </div>
                                <ul className={s.list}>
                                    <li>UI Style guide & Assets</li>
                                    <li>App flow</li>
                                    <li>Wireframes</li>
                                    <li>UI Layouts & Graphics</li>
                                    <li>UI Style guide & Assets</li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    Development
                                </div>
                                <ul className={s.list}>
                                    <li>Front-End Development</li>
                                    <li>Back-End Development</li>
                                    <li>iOS App Development</li>
                                    <li>Android App Development</li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    Branding
                                </div>
                                <ul className={s.list}>
                                    <li>Brand identity</li>
                                    <li>Brand guidelines</li>
                                    <li>Brand attributes</li>
                                    <li>Marketing materials</li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    Web Design
                                </div>
                                <ul className={s.list}>
                                    <li>UX research</li>
                                    <li>Information Architecture</li>
                                    <li>Layouts design</li>
                                    <li>Responsive & adaptive design</li>
                                    <li>Animations</li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    Output
                                </div>
                                <ul className={s.list}>
                                    <li><UnderlinedLink href="https://velonto.at/">Website</UnderlinedLink></li>
                                    <li><UnderlinedLink href="https://liefern.velonto.at/">Web Application</UnderlinedLink></li>
                                    <li><UnderlinedLink href="https://apps.apple.com/at/app/velonto-essen/id1479326595">iOS Application</UnderlinedLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </section>
            <section className={s.sectionGetIn}>
                    <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <Description text={'Get in touch'} />
                            </div>
                            <Title text={'We will be happy if you tell us a little more about your ideas.'} />
                        </div>
                        <div className={s.formWrapper}>
                            <form className={s.form}>
                                <div className={s.inputsWrapper}>
                                <div className={s.inputWrapper}>
                                    {/* <label>Your name</label> */}
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div className={s.inputWrapper}>
                                    {/* <label>Your email</label> */}
                                    <input type="email" placeholder="Email address"/>
                                </div>
                                </div>
                                <div className={s.inputWrapperWidth}>
                                    {/* <label>Your email</label> */}
                                    <input className={s.detailsInput} type="text" placeholder="Any details (optional)"/>
                                </div>
                                <div className={s.btnWrapper}>
                                    <button className={s.btn}>
                                        Send a request
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            {/* <section className={s.sectionBranding}>
                <div className={s.contentWrapper }>
                    <div className={s.titleWrapper}>
                        <Title text={'Branding'} />
                    </div>
                    <Description light text={'Our goal was to show through colors and a visual appearance that Velonto is a reliable assistant when it comes to small everyday tasks. We came up with a unique brand identity and made sure it is consistent in every medium, both mentally and visually. Spacious blue color, clean and uncluttered UI reveal calm, trust, freedom, and harmony.'} /> 
                </div>
                <div className={s.images}>
                    <div>
                        <img src={'/assets/images/velonto/velontoBranding1.jpg'}  alt='branding image'/> 
                    </div>
                    <div>
                        <img src={'/assets/images/velonto/velontoBranding2.jpg'}  alt='branding image'/> 
                    </div>
                    <div>
                        <img src={'/assets/images/velonto/velontoBranding3.jpg'}  alt='branding image'/> 
                    </div>
                    <div>
                        <img src={'/assets/images/velonto/velontoBranding4.jpg'}  alt='branding image'/> 
                    </div>
                </div>
            </section> */}
            <section className={s.sectionWorks}>
                <WorksSection worksData={data}  />
            </section>
            {/* <section className={s.sectionGotProject}>
                <div className={s.container}>
                    <div className={s.thin}>Got a project?</div>
                    <div className={s.linkWrapper}>
                        <a target="_blank" target="_blank" className={s.link} href="#"><span>Let’s start </span></a>
                    </div>
                </div>
            </section> */}
        </Fragment>
    )
};
export default VelontoCase;