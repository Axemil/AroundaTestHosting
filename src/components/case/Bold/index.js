import React, { Fragment, Component } from 'react';
import s from './style.scss';
import data from '@/data/Works';


import Title from '@simple/Title';
import TitleH from '@simple/TitleH';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import CustomLink from '@simple/CustomLink';
import WorksSection from '@sections/WorksSection';
import ButtonSecondary from '@simple/ButtonSecondary';
import UnderlinedLink from "@simple/UnderlinedLink";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default class BoldCase extends Component {
    render() {
        return (
            <Fragment>
                <section className={s.sectionHead}>
                    <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <Title text={'Move mountains, move waves'} />
                            </div>
                            <div className={s.descWrapper}>
                                <Description text={'What was first a small design tweak request turned into a complete makeover of an existing app, leading us to replace poor usability and a crude UI with a fresh interface and intelligent app-flow. We took Bold from a UX audit and niche analysis to complex product development and go-to-market strategy.'} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionBg}>
                <LazyLoadImage src="/assets/images/bold/bold-hero.jpg" alt="bold image" />
                </section>
                <section className={s.sectionServices}>
                    <div className={s.contentWrapper}>
                        <ul className={s.list}>
                            <li>
                                <div data-number={'01'} className={s.titleWrapper}>
                                    <TitleSecondary text={'Project idea'} />
                                </div>
                                <Description light text={'Bold is an application that helps users “get bold” with the help of meditation and pep talks. Being bold means understanding yourself and fighting against negative thoughts. It brings out your inner strength and makes you more confident mentally and emotionally. The iOS app was made to help people relax with amazing videos, masterclasses, and calming music.'} />
                            </li>
                            <li>
                                <div data-number={'02'} className={s.titleWrapper}>
                                    <TitleSecondary text={'Task description'} />
                                </div>
                                <Description light text={'A client approached us to help animate app screens, carry out a UX audit, and improve the app where necessary. That was the initial task. However, the more time we spent analysing the product the more apparent it became the app needed an in-depth redesign to meet the growing market demand. Starting with a UX audit and carrying it through a complete product makeover, we uplifted the Bold app to new levels, providing users with an interactive interface for their meditation breaks.'} />
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
                    <LazyLoadImage src="/assets/images/bold/boldLogo-bg.jpg" alt="bold" />
                </section>
                <section className={s.sectionWhat}>
                    <div className={s.infoWrapper}>
                        <ul className={s.infoList}>
                            <li>
                                <div className={s.infoLabel}>Team size</div>
                                <div className={s.infoText}>3+</div>
                            </li>
                            <li>
                                <div className={s.infoLabel}>Time</div>
                                <div className={s.infoText}>6 months</div>
                            </li>
                            <li>
                                <div className={s.infoLabel}>Industry</div>
                                <div className={s.infoText}>Meditation &<br/> Mindfulness</div>
                            </li>
                        </ul>
                    </div>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'What is Bold?'} />
                        </div>
                        <div className={s.descWrapper}>
                            <Description light text={'Bold is a USA-based meditation guru app that helps to create a peaceful and flourishing world around its users. The app offers guided meditations and a user-friendly interface to boost users’ mental strength, intelligence, motivation, and performance. Bold users can input their goals into a friendly goal manager tool and make an action plan with reminders. The app is a source of inspirational stories and insights about bold people — Bold is the first of its kind on the market.'} />
                        </div>
                    </div>
                    <div className={s.linkWrapper}>
                        <a href="https://thebold.app/">
                            <ButtonSecondary>Go visit site</ButtonSecondary>
                        </a>
                        {/* <CustomLink text={'Visit website'} href={'bold.app'} /> */}
                    </div>
                </section>

                <section className={s.sectionComment}>
                    <div className={s.container}>
                        <blockquote>
                            <q>These guys from Arounda are really awesome! <br /> My advice - don’t think, hire them</q>
                            <div className={s.author}>
                                <div className={s.image}>
                                    <LazyLoadImage src="/assets/images/bold/bold_avatar.jpg" alt="Mikhail Nikonorov" />
                                </div>
                                <div className={s.name}>
                                    Mikhail Nikonorov
                                <div>Founder & Ceo at <UnderlinedLink href="https://thebold.app/">Bold</UnderlinedLink></div>
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
                            <Description light text={'Our main goal was to help users get a special feel and become mentally, emotionally, and spiritually strong after using the app'} />
                        </div>
                        <div className={s.row}>
                            <div className={s.item}>
                                <div className={s.itemIcon}>
                                    <svg height="60" viewBox="0 0 51 60" width="51"><g fill="none" fillRule="evenodd"><path d="m.5.5h59v59h-59z" opacity="0" stroke="#979797"/><g transform=""><path d="m31 11.68v-3.68c0-1.85651543-.7374979-3.63699282-2.0502525-4.94974747-1.3127547-1.31275465-3.0932321-2.05025253-4.9497475-2.05025253h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.3" strokeWidth="2"/><path d="m42.58 11.1h-16c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h16c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" strokeWidth="2"/><g fillRule="nonzero"><circle fill="none" cx="27.58" cy="23.1" r="2"/><circle fillRule="evenodd" cx="27.58" cy="33.1" r="2"/><circle fillRule="evenodd" cx="27.58" cy="43.1" r="2"/></g></g></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    Mobile app
                            </div>
                                <div className={s.itemList}>
                                    <ul>
                                        <li>UX audit and iOS app design optimization</li>
                                        <li>Optimal interaction between the text, graphics, and animations</li>
                                        <li>Powerful UX and UI design which radiates calmness</li>
                                        <li>Easy usability for users of all age groups</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemIcon}>
                                    <svg height="60" viewBox="0 0 80 60" width="80"><g fill="none" fillRule="evenodd"><path d="m-2.5-3.5h89v59h-89z" opacity="0" stroke="#979797"/><g transform=""><path d="m72 11h-46c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h46c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" strokeWidth="2"/><g fillRule="nonzero"><circle cx="31" cy="23" r="2"/><circle cx="41" cy="23" r="2"/><circle cx="51" cy="23" r="2"/></g></g></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    Landing page
                            </div>
                                <div className={s.itemList}>
                                    <ul>
                                        <li>Landing page creation for a product</li>
                                        <li>Easy-to-use and user-friendly design of the main offer page</li>
                                        <li>Attractive and interactive home-screen and other interfaces</li>
                                        <li>Insightful content and App Store optimization</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemIcon}>
                                    <svg height="60" viewBox="0 0 80 60" width="80"><g fill="none" fillRule="evenodd"><path d="m-2.5-3.5h89v59h-89z" opacity="0" stroke="#979797"/><g transform=""><path d="m31 11.47v-3.47c0-3.86599325-3.1340068-7-7-7h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.79" strokeWidth="2"/><path d="m72 11h-46c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h46c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" strokeWidth="2"/><g fillRule="nonzero"><circle cx="31" cy="23" r="2"/><circle cx="31" cy="33" r="2"/><circle cx="31" cy="43" r="2"/></g></g></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    Go-to-market
                            </div>
                                <div className={s.itemList}>
                                    <ul>
                                        <li>Product launch & marketing strategy across all relevant mediums</li>
                                        <li>Use of marketing tools for the promotion of the product</li>
                                        <li>Integration with charity organizations</li>
                                        <li>Gamification and self-development approach</li>
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
                            Bold process
                </div>
                    </div>
                </section>
                <section className={s.sectionMobile}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <Title text={'Mobile app'} />
                        </div>
                        <Description light text={'Once the UX audit was made we found major issues and several missing screens in the UX-flow that ended up making it difficult to interact with the initial app. Our senior development team rethought the app UX and came up with a new unique interface.'} />
                    </div>
                    <div className={`${s.image} ${s.image1}`}>
                        <LazyLoadImage src={'/assets/images/bold/boldMobile-1.jpg'} alt={'velonto image'} />
                    </div>
                    <div className={`${s.image} ${s.image2}`}>
                        <LazyLoadImage src={'/assets/images/bold/boldMobile-3.jpg'} alt={'velonto image'} />
                    </div>
                    <div className={`${s.image} ${s.image3}`}>
                        <LazyLoadImage src={'/assets/images/bold/boldMobile-2.jpg'} alt={'velonto image'} />
                    </div>
                </section>
                <section className={s.sectionLanding}>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <Title text="Landing page" />
                            </div>
                            <Description text="The custom landing page that was created by our professional team. The landing page delivers the product's core message — stay bold — and it is clear just like the app with all the distinctive graphics and animations. The easy-to-use design helps users get exactly what they are looking for." />
                        </div>
                        <div className={s.imageWrapper}>
                            <LazyLoadImage src="/assets/images/bold/bold_landing.jpg" alt="bold landing" />
                        </div>
                </section>
                <section className={s.sectionHelped}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <Title text="How Bold Helped" />
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                1
                        </div>
                            <div className={s.itemTitle}>
                                Identifying the Problems
                        </div>
                            <p className={s.itemText}>
                                Our team identified the missing screens while doing the UX audit of the existing app. As a result, we came up with a new interface, thus the app was rebuilt from scratch.
                        </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                2
                        </div>
                            <div className={s.itemTitle}>
                                New Identity
                        </div>
                            <p className={s.itemText}>
                                The close cooperation with the client led to several important changes from creating a new brand logo to new fonts and color palette. We made sure all screens were consistent in terms of design and go along with the brand's main mission.
                        </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                3
                        </div>
                            <div className={s.itemTitle}>
                                iOS app development
                        </div>
                            <p className={s.itemText}>
                                Our team created an innovative and vibrant content package for the iOS app. The easy design of the new landing page helped the app to get more leads and aim for higher revenue.
                        </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                4
                            </div>
                            <div className={s.itemTitle}>
                                Practical Indulgence
                            </div>
                            <p className={s.itemText}>
                                A thorough analysis of existing competitors was made to understand the needs and requirements of the market. We wanted to understand how the Bold app could help users practically. We engaged ourselves and real users in meditation process to get to the core of the client’s idea.
                            </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                5
                        </div>
                            <div className={s.itemTitle}>
                                Marketing Strategy
                        </div>
                            <p className={s.itemText}>
                                We spared no efforts in developing a marketing strategy. Bold got a complete integration with all the most important social networks, including charity organizations in particular. Brainstorms, open timing, and a time & material approach (T&M) helped us to get the best results for the client.
                        </p>
                        </div>
                        <div className={s.item}>
                            <a href="https://apps.apple.com/be/app/bold-strong-smart-mind/id1491187912">
                                <div className={s.itemIcon}>
                                    <svg height="60" viewBox="0 0 60 60" width="60"><g fill="none" fillRule="evenodd"><path d="m.5.5h59v59h-59z" fill="#d8d8d8" opacity="0" stroke="#979797" /><path d="m2 39h42l-15.333204-15" stroke="#393939" strokeWidth="2" /></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    View Bold<br/> iOS Application
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
                                <svg height="29" viewBox="0 0 37 29" width="37"><path d="m14.9723254 4.34476534c-4.7421244.8898917-8.6850144 6.07220216-8.73829669 11.14981946 1.01236363-.5758122 1.86488038-.6805054 2.77067942-.6805054 4.15601917 0 6.97998087 3.0884477 6.97998087 7.1191336 0 4.0830325-3.6231962 7.066787-7.61936843 7.066787-5.59464114 0-8.36532057-4.9205776-8.36532057-9.8935018 0-9.21299639 5.22166507-17.79783394 14.9723254-19.1064982zm20.6468899 0c-4.7421244.8898917-8.6850143 6.07220216-8.7382966 11.14981946 1.0123636-.5758122 1.8648803-.6805054 2.7706794-.6805054 4.1560191 0 6.9799808 3.0884477 6.9799808 7.1191336 0 4.0830325-3.6231961 7.066787-7.6193684 7.066787-5.5946411 0-8.3653205-4.9205776-8.3653205-9.8935018 0-9.21299639 5.221665-17.79783394 14.9723253-19.1064982z" fill="#4562C9" transform="" /></svg>
                            </div>
                            Bold app is a tool  to refine  your physical, mental, emotional, and spiritual parts until they emerge as one!
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
                                        Find Your Inner Strength
                                    </div>
                                    <p className={s.itemText}>
                                        We offered new solutions so users can upgrade the status of their mental health in real time by using the Bold app. Being bold means to discover your own power and change the way you see yourself.
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
                                        A landing page is a perfect place to promote your app and boost your revenue stream. The innovative design of a landing page communicates your app's ease of use and interactiveness.
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
                                        Marketing was the key to the success of this meditation app. With that in mind, a full-fledged marketing strategy was created and successfully deployed.
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
                                <Description text={'Our team worked with determination for several months along with the client to bring out the final product. Starting from the UX audit to the reshaping of the app, a spectacular product was put together. The new identity of the brand and new interface got a lot of attention from users. The landing page and the go-to-market strategy added to the app’s success and made it stand out from the competitors.'} />
                            </div>
                            <div className={s.list}>
                                <div className={s.item}>
                                    <div className={s.itemLabel}>
                                        Partnership
                                    </div>
                                    <div className={s.itemNumber}>
                                        2+ years
                                    </div>
                                </div>
                                <div className={s.item}>
                                    <div className={s.itemLabel}>
                                        Platform
                                    </div>
                                    <div className={s.itemNumber}>
                                        iOS App
                                    </div>
                                </div>
                                <div className={s.item}>
                                    <div className={s.itemLabel}>
                                        Users
                                    </div>
                                    <div className={s.itemNumber}>
                                        1 000+
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
                                    <li>Define idea or company value</li>
                                    <li>Research </li>
                                    <li>Workshop & idea validation for startup</li>
                                    <li>Product planning </li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    UX design
                                </div>
                                <ul className={s.list}>
                                    <li>UX research</li>
                                    <li>App flow</li>
                                    <li>Wireframes</li>
                                    <li>UI Layouts & Graphics</li>
                                    <li>UI Style guide & Assets</li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    App Development
                                </div>
                                <ul className={s.list}>
                                    <li>Front-End Development</li>
                                    <li>Back-End Development</li>
                                    <li>iOS App Development</li>
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
                                    <li><UnderlinedLink href="https://thebold.app/">Landing page</UnderlinedLink></li>
                                    <li><UnderlinedLink href="https://apps.apple.com/be/app/bold-strong-smart-mind/id1491187912">iOS Application</UnderlinedLink></li>
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
                <section className={s.sectionWorks}>
                    <WorksSection worksData={data}  />
                </section>
                {/* <section className={s.sectionGotProject}>
                    <div className={s.container}>
                        <div className={s.thin}>Got a project?</div>
                        <div className={s.linkWrapper}>
                            <a className={s.link} href="#"><span>Let’s start </span></a>
                        </div>
                    </div>
                </section> */}
            </Fragment>
        )
    }
}
