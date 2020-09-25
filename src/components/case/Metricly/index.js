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
import { LazyLoadImage } from "react-lazy-load-image-component"
import DragSlider from '@simple/DragSlider';


export default class BoldCase extends Component {
    render() {
        return (
            <Fragment>
                <section className={s.sectionHead}>
                    <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <Title text={'Your Cloud Efficiency Expert'} />
                            </div>
                            <div className={s.descWrapper}>
                                <Description text={'The UX/UI redesign for a cloud cost management platform that offers various instruments to help with the management, analysis, and optimization of Amazon Web Services (AWS) costs.'} />
                            </div>
                        </div>
                        {/* <div className={s.linkWrapper}>
                            <a className={s.link}>iOS App</a>
                        </div> */}
                    </div>
                </section>
                <section className={s.sectionBg}>
                    <img src="/assets/images/metricly/metricly_bg.jpg" alt="metricly image" />
                </section>
                <section className={s.sectionServices}>
                    <div className={s.contentWrapper}>
                        <ul className={s.list}>
                            <li>
                                <div data-number={'01'} className={s.titleWrapper}>
                                    <TitleSecondary text={'Project idea'} />
                                </div>
                                <Description light text={'Metricly offers deep insight on AWS bills and resource utilization. Not only does this cloud cost analysis and monitoring platform optimize your bills, but it also resizes your environment, in turn reducing spending. This can save both money and resources for a company.'} />
                            </li>
                            <li>
                                <div data-number={'02'} className={s.titleWrapper}>
                                    <TitleSecondary text={'Task description'} />
                                </div>
                                <Description light text={'We were tasked to rethink the UX/UI of the platform. Our main job was to develop unique and creative graphic materials, as well as redesign some of the most important pages of Metricly. These included a landing page, blog, and new tech documentation pages. We strived to make them attractive and deliver consistent UX. We wanted to provide users with great experience, retaining brand consistency. Our UX/UI designs and graphics were all shaped around this goal, all the way through.'} />
                            </li>
                        </ul>
                    </div>
                    <div className={s.panel}>
                        <div className={s.panelTitle}>
                            Services
                    </div>
                        <ul className={s.panelList}>
                            <li>Strategy</li>
                            <li>Branding</li>
                            <li>UX Design</li>
                            <li>UI Design</li>
                            <li>Development</li>
                        </ul>
                    </div>
                </section>
                <section className={s.sectionBgSecond}>
                    <img src="/assets/images/metricly/metricly_logo.jpg" alt="metricly" />
                </section>
                <section className={s.sectionWhat}>
                    <div className={s.infoWrapper}>
                        <ul className={s.infoList}>
                            <li>
                                <div className={s.infoLabel}>Team size</div>
                                <div className={s.infoText}>6+</div>
                            </li>
                            <li>
                                <div className={s.infoLabel}>Time</div>
                                <div className={s.infoText}>1,5 year</div>
                            </li>
                            <li>
                                <div className={s.infoLabel}>Industry</div>
                                <div className={s.infoText}>IT Infrastructure</div>
                            </li>
                        </ul>
                    </div>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'What is Metricly?'} />
                        </div>
                        <div className={s.descWrapper}>
                            <Description light text={'Metricly is an AWS cost optimization platform that can save users almost 32% of their AWS bills. Critical cloud infrastructure monitoring and the development of various services are what the company is focused on. Metricly has the advantage of providing this two-way service of AWS performance capacity while monitoring all the related activities.'} />
                        </div>
                    </div>
                    <div className={s.linkWrapper}>
                        <ButtonSecondary>Go visit site</ButtonSecondary>
                        {/* <CustomLink text={'Visit website'} href={'bold.app'} /> */}
                    </div>
                </section>
                <section className={s.sectionComment}>
                    <div className={s.container}>
                        <blockquote>
                            <q>Everything Arounda has produced, from design to code, has been enterprise-grade quality they are fantastic to work with!</q>
                            <div className={s.author}>
                                <div className={s.image}>
                                    <img src="/assets/images/gigzi/face.jpg" alt="Trent Waskey" />
                                </div>
                                <div className={s.name}>
                                    Trent Waskey
                                <div>Founder at <a href="">Metricly</a></div> 
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
                            <Description light text={'Our main challenge was to keep up with the technical aspects of the platform and provide new UX/UI solutions for landing pages, blog, and tech documentation interfaces.'} />
                        </div>
                        <div className={s.row}>
                            <div className={s.item}>
                                <div className={s.itemIcon}>
                                    <svg height="60" viewBox="0 0 51 60" width="51"><g fill="none" fillRule="evenodd"><path d="m.5.5h59v59h-59z" opacity="0" stroke="#979797"/><g transform=""><path d="m31 11.68v-3.68c0-1.85651543-.7374979-3.63699282-2.0502525-4.94974747-1.3127547-1.31275465-3.0932321-2.05025253-4.9497475-2.05025253h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.3" strokeWidth="2"/><path d="m42.58 11.1h-16c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h16c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" strokeWidth="2"/><g fillRule="nonzero"><circle fill="none" cx="27.58" cy="23.1" r="2"/><circle fillRule="evenodd" cx="27.58" cy="33.1" r="2"/><circle fillRule="evenodd" cx="27.58" cy="43.1" r="2"/></g></g></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    Landing page development
                            </div>
                                <div className={s.itemList}>
                                    <ul>
                                        <li>Updating the UX/UI design of the main page</li>
                                        <li>Focusing on the target audience (DevOps)</li>
                                        <li>Preparing new graphic materials</li>
                                        <li>Delivering relevant messages</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={s.item}>
                                {/* <div className={s.itemIcon}>
                                    <svg height="60" viewBox="0 0 51 60" width="51"><g fill="none" fillRule="evenodd"><path d="m.5.5h59v59h-59z" opacity="0" stroke="#979797"/><g transform=""><path d="m31 11.68v-3.68c0-1.85651543-.7374979-3.63699282-2.0502525-4.94974747-1.3127547-1.31275465-3.0932321-2.05025253-4.9497475-2.05025253h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.3" strokeWidth="2"/><path d="m42.58 11.1h-16c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h16c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" strokeWidth="2"/><g fillRule="nonzero"><circle fill="none" cx="27.58" cy="23.1" r="2"/><circle fillRule="evenodd" cx="27.58" cy="33.1" r="2"/><circle fillRule="evenodd" cx="27.58" cy="43.1" r="2"/></g></g></g></svg>
                                </div> */}
                                <div className={s.itemIcon}>
                                    <svg height="60" viewBox="0 0 80 60" width="80"><g fill="none" fillRule="evenodd"><path d="m-2.5-3.5h89v59h-89z" opacity="0" stroke="#979797"/><g transform=""><path d="m72 11h-46c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h46c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" strokeWidth="2"/><g fillRule="nonzero"><circle cx="31" cy="23" r="2"/><circle cx="41" cy="23" r="2"/><circle cx="51" cy="23" r="2"/></g></g></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    Blog
                            </div>
                                <div className={s.itemList}>
                                    <ul>
                                        <li>Using new design solutions to engage the audience</li>
                                        <li>Putting high-quality graphics</li>
                                        <li>Attracting people with the help of appealing images/animations</li>
                                        <li>Increasing the conversion rates</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemIcon}>
                                    <svg height="60" viewBox="0 0 80 60" width="80"><g fill="none" fillRule="evenodd"><path d="m-2.5-3.5h89v59h-89z" opacity="0" stroke="#979797"/><g transform=""><path d="m31 11.47v-3.47c0-3.86599325-3.1340068-7-7-7h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.79" strokeWidth="2"/><path d="m72 11h-46c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h46c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" strokeWidth="2"/><g fillRule="nonzero"><circle cx="31" cy="23" r="2"/><circle cx="31" cy="33" r="2"/><circle cx="31" cy="43" r="2"/></g></g></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    Documentation tool
                            </div>
                                <div className={s.itemList}>
                                    <ul>
                                        <li>Creating a properly optimized UX design</li>
                                        <li>Offering marketing materials for SaaS systems</li>
                                        <li>Creating perfect data sorting system</li>
                                        <li>Front end development for one of the client's tools</li>
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
                            Metricly process
                    </div>
                    </div>
                </section>
                <section className={s.sectionMobile}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <Title text={'Mobile apps'} />
                        </div>
                        <Description light text={'Once the UX audit was made we found major issues and several missing screens in the UX-flow that ended up making it difficult to interact with the initial app. Our senior development team rethought the app UX and came up with a new unique interface.'} />
                    </div>
                    <div className={`${s.image} ${s.image1}`}>
                        <img src={'/assets/images/metricly/metricly_mobile1.jpg'} alt={'metricly image'} />
                    </div>
                    <div className={`${s.image} ${s.image2}`}>
                        <img src={'/assets/images/metricly/metricly_mobile2.jpg'} alt={'metricly image'} />
                    </div>
                    <div className={`${s.image} ${s.image3}`}>
                        <img src={'/assets/images/metricly/metricly_mobile3.jpg'} alt={'metricly image'} />
                    </div>
                </section>
                <section className={s.sectionLanding}>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <Title text="Website" />
                            </div>
                            <Description text="The landing page of the platform now has relevant graphic materials, consistent UX, helpful information to surf through, and also a calming design. The touch of green brings a sense of trust. " />
                        </div>
                        <div className={s.imageWrapper}>
                            <img src="/assets/images/metricly/metricly_landing.jpg" alt="metricly landing" />
                        </div>
                </section>
                <section className={s.sectionMobileApp}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <Title text={'Documentation tool'} />
                        </div>
                        <Description light text={"The new tech documentation pages for the client's product were prepared thoroughly. As it was intended for DevOps specialists, we made sure that special attention was paid there in order to sound accurate and trustful for the target audience. We also developed a front-end side for one of the client's tools. An excellent UI/UX design increased viewability and improved click-through rates."} />
                    </div>
                    {/* <DragSlider pictures={['/assets/images/metricly/metricly_slider1.jpg','/assets/images/metricly/metricly_slider1.jpg']}/> */}
                </section>
                <section className={s.sectionHelped}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <Title text="How Metricly Helped" />
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                1
                        </div>
                            <div className={s.itemTitle}>
                                Step-by-step Solutions
                        </div>
                            <p className={s.itemText}>
                                We research the technology and got a deep understanding of all technical components we had to work with.
                        </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                2
                        </div>
                            <div className={s.itemTitle}>
                                Integrated Design
                        </div>
                            <p className={s.itemText}>
                                With the full involvement in the process, we created a great UX/UI for our client’s target audience — DevOps specialists.
                        </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                3
                        </div>
                            <div className={s.itemTitle}>
                                Email Marketing
                        </div>
                            <p className={s.itemText}>
                                Our team updated templates for email newsletters which also added to the increase of turnovers and gross revenue.
                        </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                4
                            </div>
                            <div className={s.itemTitle}>
                                Data Sorting System
                            </div>
                            <p className={s.itemText}>
                                This platform required a strong UX design that could support the load of the data and sort it at the same time.
                            </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemNumber}>
                                5
                        </div>
                            <div className={s.itemTitle}>
                                Marketing Systems
                        </div>
                            <p className={s.itemText}>
                                After our deep research, we created efficient marketing materials for SaaS platforms. The blog and new email templates started to catch more attention as well.
                        </p>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemIcon}>
                                <svg height="60" viewBox="0 0 60 60" width="60"><g fill="none" fillRule="evenodd"><path d="m.5.5h59v59h-59z" fill="#d8d8d8" opacity="0" stroke="#979797" /><path d="m2 39h42l-15.333204-15" stroke="#393939" strokeWidth="2" /></g></svg>
                            </div>
                            <div className={s.itemTitle}>
                                View Metricly landing <br />page
                        </div>
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
                                <svg height="29" viewBox="0 0 37 29" width="37"><path d="m14.9723254 4.34476534c-4.7421244.8898917-8.6850144 6.07220216-8.73829669 11.14981946 1.01236363-.5758122 1.86488038-.6805054 2.77067942-.6805054 4.15601917 0 6.97998087 3.0884477 6.97998087 7.1191336 0 4.0830325-3.6231962 7.066787-7.61936843 7.066787-5.59464114 0-8.36532057-4.9205776-8.36532057-9.8935018 0-9.21299639 5.22166507-17.79783394 14.9723254-19.1064982zm20.6468899 0c-4.7421244.8898917-8.6850143 6.07220216-8.7382966 11.14981946 1.0123636-.5758122 1.8648803-.6805054 2.7706794-.6805054 4.1560191 0 6.9799808 3.0884477 6.9799808 7.1191336 0 4.0830325-3.6231961 7.066787-7.6193684 7.066787-5.5946411 0-8.3653205-4.9205776-8.3653205-9.8935018 0-9.21299639 5.221665-17.79783394 14.9723253-19.1064982z" fill="#0694F7" transform="" /></svg>
                            </div>
                            Metricly’s vision is to have a financial system that enables users worldwide
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
                                        Data Sorting Systems
                                    </div>
                                    <p className={s.itemText}>
                                        The most complex solution we worked on was the data sorting system. It gives users all the information based on accurate data, saving a lot of time.
                                    </p>
                                </div>
                                <div className={s.itemNumber}>
                                    1
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemContent}>
                                    <div className={s.itemTitle}>
                                        Cloud Computing
                                    </div>
                                    <p className={s.itemText}>
                                        AWS cost optimization is an important part of the sales and we wanted to keep up by providing great design solutions to help users get the best experience possible.
                                    </p>
                                </div>
                                <div className={s.itemNumber}>
                                    2
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemContent}>
                                    <div className={s.itemTitle}>
                                        Marketing is the Key
                                    </div>
                                    <p className={s.itemText}>
                                    You need a proper marketing strategy to reach the necessary amount of people. We created strong marketing materials for SaaS platforms, email newsletters, and blog section to make this project a success.
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
                                <Description text={"When the client reached out to our team, the initial task was to recreate the UX/UI design for one page and add some cool graphics to make the product more attractive. As we moved forward, more issues were discovered and the client decided to do a makeover of the whole UI of the website. We designed a landing page and a blog, and made new documentation pages that didn't exist before. We also developed a high-class data sorting system and marketing strategy as well. All results were delivered on time following a T&M pricing system that is based around time and cost estimates."} />
                            </div>
                            <div className={s.list}>
                                <div className={s.item}>
                                    <div className={s.itemLabel}>
                                        Team size
                                    </div>
                                    <div className={s.itemNumber}>
                                        21+
                                    </div>
                                </div>
                                <div className={s.item}>
                                    <div className={s.itemLabel}>
                                        Products
                                    </div>
                                    <div className={s.itemNumber}>
                                        89
                                    </div>
                                </div>
                                <div className={s.item}>
                                    <div className={s.itemLabel}>
                                        Clients
                                    </div>
                                    <div className={s.itemNumber}>
                                        987+
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
                                    Strategy
                                </div>
                                <ul className={s.list}>
                                    <li>Define idea or company value </li>
                                    <li>Research </li>
                                    <li>Workshop & idea validation for startup</li>
                                    <li>Strategic session for company </li>
                                    <li>Product planning </li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    UX design
                                </div>
                                <ul className={s.list}>
                                    <li>UX research</li>
                                    <li>User and product flow </li>
                                    <li>Wireframes</li>
                                    <li>Prototyping</li>
                                    <li>Real user testing</li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    UI design
                                </div>
                                <ul className={s.list}>
                                    <li>Concept design</li>
                                    <li>Layouts design </li>
                                    <li>Graphics</li>
                                    <li>/assets</li>
                                    <li>UI style guide</li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    Branding
                                </div>
                                <ul className={s.list}>
                                    <li>Brand identity</li>
                                    <li>Marketing materials </li>
                                    <li>Graphic design</li>
                                    <li>Motion design</li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    Development
                                </div>
                                <ul className={s.list}>
                                    <li>Landing page </li>
                                    <li>Ico Cabinet </li>
                                    <li>Ico Wallet </li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemTitle}>
                                    Output
                                </div>
                                <ul className={s.list}>
                                    <li><a href="#">Landing page</a></li>
                                    <li><a href="#">Ico Cabinet</a></li>
                                    <li><a href="#">Ico Wallet</a></li>
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
