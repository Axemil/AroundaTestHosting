import React, { Fragment, Component } from "react"
import s from "./style.scss"
import data from "@/data/Works"

import Link from "next/link"
import Title from "@simple/Title"
import TitleH from "@simple/TitleH"
import TitleSecondary from "@simple/TitleSecondary"
import Description from "@simple/Description"
import CustomLink from "@simple/CustomLink"
import WorksSection from "@sections/WorksSection"
import ButtonSecondary from "@simple/ButtonSecondary"
import UnderlinedLink from "@simple/UnderlinedLink"
import { LazyLoadImage } from "react-lazy-load-image-component"
import DragSlider from "@simple/DragSlider"

export default class BoldCase extends Component {
  render() {
    return (
      <Fragment>
        <section className={s.sectionHead}>
          <div className={s.container}>
            <div className={s.contentWrapper}>
              <div className={s.titleWrapper}>
                <TitleH size="hero">Independent wealth management</TitleH>
              </div>
              <div className={s.descWrapper}>
                <Description
                  text={
                    "The branding strategy and an ICO campaign for a financial platform that offers blockchain security and wealth protection. The platform protects its users from market inconsistencies and helps to manage their wealth independently."
                  }
                />
              </div>
            </div>
            {/* <div className={s.linkWrapper}>
                            <a target="_blank" className={s.link}>iOS App</a>
                        </div> */}
          </div>
        </section>
        <section className={s.sectionBg}>
          <img src="/assets/images/gigzi/gigzi_background.jpg" alt="gigzi image" />
        </section>
        <section className={s.sectionServices}>
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <div data-number={"01"} className={s.titleWrapper}>
                  <TitleSecondary text={"Project idea"} />
                </div>
                <Description
                  light
                  text={
                    "Gigzi is an intelligent fintech startup built using an Ethereum platform and backed up with smart contracts. This newly deployed ecosystem revolutionizes the way blockchain security, stability, and wealth are managed. Users of the platform may easily invest in cryptocurrencies to generate money and make bank transfers."
                  }
                />
              </li>
              <li>
                <div data-number={"02"} className={s.titleWrapper}>
                  <TitleSecondary text={"Task description"} />
                </div>
                <Description
                  light
                  text={
                    "Design has a major effect on business, and in this case, the client asked us to help with the branding of their company. In our audit, we noticed a lack of good graphics and branding design, UI/UX, etc. The first task for us was to create a consistent landing page for the client and then start with the ICO (Initial Coin Offering) campaign development."
                  }
                />
              </li>
            </ul>
          </div>
          <div className={s.panel}>
            <div className={s.panelTitle}>Services</div>
            <ul className={s.panelList}>
              <li>Discovery & Strategy</li>
              <li>UX/UI Design</li>
              <li>App Development</li>
              <li>Branding</li>
              <li>Web design</li>
            </ul>
          </div>
        </section>
        <section className={s.sectionBgSecond}>
          <img src="/assets/images/gigzi/gigzi_logo.jpg" alt="gigzi" />
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
                <div className={s.infoText}>1 year</div>
              </li>
              <li>
                <div className={s.infoLabel}>Industry</div>
                <div className={s.infoText}>Fintech</div>
              </li>
            </ul>
          </div>
          <div className={s.contentWrapper}>
            <div className={s.titleWrapper}>
              <TitleSecondary text={"What is Gigzi?"} />
            </div>
            <div className={s.descWrapper}>
              <Description
                light
                text={
                  "Gigzi is an innovative financial system that provides users with blockchain security and wealth management. The platform operates on a decentralized network and has three main components developed by our team: Wallet, Exchange, and Treasury. Our research helped us to create a full-fledged ICO cabinet and promo materials for the marketing campaign."
                }
              />
            </div>
          </div>
          <div className={s.linkWrapper}>
            <a target="_blank" href="https://gigzi.com/">
              <ButtonSecondary>Go visit site</ButtonSecondary>
            </a>
            {/* <CustomLink text={'Visit website'} href={'bold.app'} /> */}
          </div>
        </section>
        <section className={s.sectionComment}>
          <div className={s.container}>
            <blockquote>
              <q>
                Arounda has been our strategic partner for 3 years. A talented team
                that consistently delivers 1st class results on our projects
              </q>
              <div className={s.author}>
                <div className={s.image}>
                  <img src="/assets/images/gigzi/face.jpg" alt="El Asmar" />
                </div>
                <div className={s.name}>
                  El Asmar
                  <div>
                    Founder at{" "}
                    <UnderlinedLink href={"https://gigzi.com/"}>
                      <a target="_blank">Gigzi</a>
                    </UnderlinedLink>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </section>
        <section className={s.sectionChallenge}>
          <div className={s.container}>
            <div className={s.contentWrapper}>
              <div className={s.titleWrapper}>
                <TitleSecondary text={"Challenges and Objectives"} />
              </div>
              <Description
                light
                text={
                  "The platform has been in development for one and a half years, and it includes the system architecture design and IriTech biometric security system."
                }
              />
            </div>
            <div className={s.row}>
              <div className={s.item}>
                <div className={s.itemIcon}>
                  <svg height="60" viewBox="0 0 51 60" width="51">
                    <g fill="none" fillRule="evenodd">
                      <path d="m.5.5h59v59h-59z" opacity="0" stroke="#979797" />
                      <g transform="">
                        <path
                          d="m31 11.68v-3.68c0-1.85651543-.7374979-3.63699282-2.0502525-4.94974747-1.3127547-1.31275465-3.0932321-2.05025253-4.9497475-2.05025253h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.3"
                          strokeWidth="3.14"
                        />
                        <path
                          d="m42.58 11.1h-16c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h16c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z"
                          strokeWidth="3.14"
                        />
                        <g fillRule="nonzero">
                          <circle fill="none" cx="27.58" cy="23.1" r="2" />
                          <circle fillRule="evenodd" cx="27.58" cy="33.1" r="2" />
                          <circle fillRule="evenodd" cx="27.58" cy="43.1" r="2" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className={s.itemTitle}>Landing page development</div>
                <div className={s.itemList}>
                  <ul>
                    <li>Landing page development</li>
                    <li>Appealing design of the main page</li>
                    <li>Clear and user-friendly interface</li>
                    <li>New branding and UI</li>
                  </ul>
                </div>
              </div>
              <div className={s.item}>
                <div className={s.itemIcon}>
                  <svg
                    style={{ marginLeft: "-20px" }}
                    height="60"
                    viewBox="0 0 80 60"
                    width="80"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="m-2.5-3.5h89v59h-89z" opacity="0" stroke="#979797" />
                      <g transform="">
                        <path
                          d="m72 11h-46c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h46c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z"
                          strokeWidth="3.14"
                        />
                        <g fillRule="nonzero">
                          <circle cx="31" cy="23" r="2" />
                          <circle cx="41" cy="23" r="2" />
                          <circle cx="51" cy="23" r="2" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className={s.itemTitle}>ICO Cabinet</div>
                <div className={s.itemList}>
                  <ul>
                    <li>Adding a cabinet for the purchase of ICO tokens</li>
                    <li>Working on the ICO cabinet development from scratch</li>
                    <li>
                      Making research and providing relevant marketing materials
                    </li>
                    <li>Adding features to easily manage any currency</li>
                  </ul>
                </div>
              </div>
              <div className={s.item}>
                <div className={s.itemIcon}>
                  <svg height="60" viewBox="0 0 80 60" width="80">
                    <g fill="none" fillRule="evenodd">
                      <path d="m-2.5-3.5h89v59h-89z" opacity="0" stroke="#979797" />
                      <g transform="">
                        <path
                          d="m31 11.47v-3.47c0-3.86599325-3.1340068-7-7-7h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.79"
                          strokeWidth="3.14"
                        />
                        <path
                          d="m72 11h-46c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h46c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z"
                          strokeWidth="3.14"
                        />
                        <g fillRule="nonzero">
                          <circle cx="31" cy="23" r="2" />
                          <circle cx="31" cy="33" r="2" />
                          <circle cx="31" cy="43" r="2" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className={s.itemTitle}>Wallet</div>
                <div className={s.itemList}>
                  <ul>
                    <li>Introducing Gigzi Wallet with advanced functionality</li>
                    <li>Providing conversion of any national currencies</li>
                    <li>Integrating Iritech biometric security system</li>
                    <li>
                      Adding feature to convert cryptocurrencies into precious metals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={s.sectionCheck}>
          <div className={s.container}>
            <div className={s.title}>
              <span>Let`s check</span>
              <br />
              Gigzi process
            </div>
          </div>
        </section>
        <section className={s.sectionMobileApp}>
          <div className={s.contentWrapper}>
            <div className={s.titleWrapper}>
              <Title text={"Branding"} />
            </div>
            <Description
              light
              text={
                "We presented a great branding strategy for the client. The whole team was involved in the process of creating a landing page for the product, brainstorming new ideas and key decisions for product positioning and promotion."
              }
            />
          </div>
          <div className={`${s.image} ${s.image1}`}>
            <img src={"/assets/images/gigzi/gigzi_brand1.jpg"} alt={"gigzi image"} />
          </div>
          <div className={`${s.image} ${s.image4}`}>
            <img src={"/assets/images/gigzi/gigzi_brand3.jpg"} alt={"gigzi image"} />
          </div>
          <div className={`${s.image} ${s.image2}`}>
            <img src={"/assets/images/gigzi/gigzi_brand2.jpg"} alt={"gigzi image"} />
          </div>
          <div className={`${s.image} ${s.image3}`}>
            <img src={"/assets/images/gigzi/gigzi_brand4.jpg"} alt={"gigzi image"} />
          </div>
        </section>
        <section className={s.sectionLanding}>
          <div className={s.imageWrapper}>
            <img src="/assets/images/gigzi/gigzi_landing.jpg" alt="gigzi landing" />
          </div>
          <div className={s.contentWrapper}>
            <div className={s.titleWrapper}>
              <Title text="Landing pages" />
            </div>
            <Description text="Once our research was done and promo materials were developed, we started to work on the issues regarding the UX/UI and came up with a new unique interface for the landing page. Our goal was to deliver the core message of this financial system platform through illustrious graphic design, animations, and content." />
          </div>
        </section>
        {/* <section className={s.sectionMob}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <Title text={'Documentation tool'} />
                        </div>
                        <Description light text={"The new tech documentation pages for the client's product were prepared thoroughly. As it was intended for DevOps specialists, we made sure that special attention was paid there in order to sound accurate and trustful for the target audience. We also developed a front-end side for one of the client's tools. An excellent UI/UX design increased viewability and improved click-through rates."} />
                    </div>
                    <DragSlider pictures={['/assets/images/metricly/metricly_slider1.jpg','/assets/images/metricly/metricly_slider1.jpg']}/>
                </section> */}
        {/* <section className={s.sectionMobile}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <Title text={'Wallet'} />
                        </div>
                        <Description light text={'Arounda agency’s developers provided the Gigizi wallet with advanced features, combining a banking system with cryptocurrency technology. We also introduced the system to process transactions via QR codes and the ability for users to create and get delivered real physical credit card along with some extra functionality for card management.'} />
                        <DragSlider pictures={['/assets/images/metricly/metricly_slider1.jpg','/assets/images/metricly/metricly_slider1.jpg']}/>
                    </div>
                </section> */}
        <section className={s.sectionMobileApp}>
          <div className={s.contentWrapper}>
            <div className={s.titleWrapper}>
              <Title text={"Ico cabinet"} />
            </div>
            <Description
              light
              text={
                "We created an ICO cabinet and provided promo materials in that regard. We also designed the web app so that users could access their cabinets from any device. Our developers underwent dozens of brainstorming activities to enhance the cabinet with useful functionality."
              }
            />
          </div>
          <div className={`${s.image} ${s.image5}`}>
            <img
              src={"/assets/images/gigzi/gigzi_slider1.jpg"}
              alt={"gigzi image"}
            />
          </div>
          <div className={`${s.image} ${s.image6}`}>
            <img
              src={"/assets/images/gigzi/gigzi_slider2.jpg"}
              alt={"gigzi image"}
            />
          </div>
          {/* <DragSlider pictures={['/assets/images/gigzi/gigzi_slider1.jpg','/assets/images/gigzi/gigzi_slider1.jpg']}/> */}
        </section>
        <section className={s.sectionMobile}>
          <div className={s.contentWrapper}>
            <div className={s.titleWrapper}>
              <Title text={"Wallet"} />
            </div>
            <Description
              light
              text={
                "Arounda agency’s developers provided the Gigizi wallet with advanced features, combining a banking system with cryptocurrency technology. We also introduced the system to process transactions via QR codes and the ability for users to create and get delivered real physical credit card along with some extra functionality for card management."
              }
            />
          </div>
          <div className={`${s.image} ${s.image1}`}>
            <img
              src={"/assets/images/gigzi/gigzi_wallet1.jpg"}
              alt={"gigzi image"}
            />
          </div>
          <div className={`${s.image} ${s.image2}`}>
            <img
              src={"/assets/images/gigzi/gigzi_wallet2.jpg"}
              alt={"gigzi image"}
            />
          </div>
          <div className={`${s.image} ${s.image3}`}>
            <img
              src={"/assets/images/gigzi/gigzi_wallet3.jpg"}
              alt={"gigzi image"}
            />
          </div>
        </section>
        <section className={s.sectionHelped}>
          <div className={s.container}>
            <div className={s.titleWrapper}>
              <Title text="How Gigzi Helped" />
              <Description
                light
                text={
                  "Our main challenge was to keep up with the technical aspects of the platform and provide new UX/UI solutions for landing pages, blog, and tech documentation interfaces."
                }
              />
            </div>
            <div className={s.item}>
              <div className={s.itemNumber}>1</div>
              <div className={s.itemTitle}>Developing Brand Identity</div>
              <p className={s.itemText}>
                Our team provided promo materials and worked on brand identity. We
                presented a great alternative vision to how traditional financial
                system should be handled and added up-to-the-minute branding
                elements.
              </p>
            </div>
            <div className={s.item}>
              <div className={s.itemNumber}>2</div>
              <div className={s.itemTitle}>Creating a Landing Page</div>
              <p className={s.itemText}>
                We worked on a new unique design for the landing page. Our experts
                delivered the main message of the financial system platform with
                exceptional design and animations.
              </p>
            </div>
            <div className={s.item}>
              <div className={s.itemNumber}>3</div>
              <div className={s.itemTitle}>Adding the ICO Cabinet</div>
              <p className={s.itemText}>
                One of the newest types of financial technology elements, we aimed to
                help the world's first financial institution meet the demand in a
                cryptocurrency world.
              </p>
            </div>
            <div className={s.item}>
              <div className={s.itemNumber}>4</div>
              <div className={s.itemTitle}>Making Wallet</div>
              <p className={s.itemText}>
                Working on the wallet from scratch, we came up with a product that
                had advanced functionality that, at its core, combined the banking
                system and cryptocurrencies.
              </p>
            </div>
            <div className={s.item}>
              <div className={s.itemNumber}>5</div>
              <div className={s.itemTitle}>IriTech Security</div>
              <p className={s.itemText}>
                Our team introduced an innovative IriTech biometric security system
                that gives users the convenience of accessing the Gigzi platform.
                Advanced Iris recognition technology had also been added.
              </p>
            </div>
            <div className={s.item}>
              <a target="_blank" href="https://gigzi.com/">
                <div className={s.itemIcon}>
                  <svg height="60" viewBox="0 0 60 60" width="60">
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="m.5.5h59v59h-59z"
                        fill="#d8d8d8"
                        opacity="0"
                        stroke="#979797"
                      />
                      <path
                        d="m2 39h42l-15.333204-15"
                        stroke="#393939"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                </div>
                <div className={s.itemTitle}>
                  View Gigzi <br />
                  Landing page
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
                <svg height="29" viewBox="0 0 37 29" width="37">
                  <path
                    d="m14.9723254 4.34476534c-4.7421244.8898917-8.6850144 6.07220216-8.73829669 11.14981946 1.01236363-.5758122 1.86488038-.6805054 2.77067942-.6805054 4.15601917 0 6.97998087 3.0884477 6.97998087 7.1191336 0 4.0830325-3.6231962 7.066787-7.61936843 7.066787-5.59464114 0-8.36532057-4.9205776-8.36532057-9.8935018 0-9.21299639 5.22166507-17.79783394 14.9723254-19.1064982zm20.6468899 0c-4.7421244.8898917-8.6850143 6.07220216-8.7382966 11.14981946 1.0123636-.5758122 1.8648803-.6805054 2.7706794-.6805054 4.1560191 0 6.9799808 3.0884477 6.9799808 7.1191336 0 4.0830325-3.6231961 7.066787-7.6193684 7.066787-5.5946411 0-8.3653205-4.9205776-8.3653205-9.8935018 0-9.21299639 5.221665-17.79783394 14.9723253-19.1064982z"
                    fill="#ffffff"
                    transform=""
                  />
                </svg>
              </div>
              Gigzi’s vision is to have a financial system that enables users
              worldwide
            </div>
          </div>
        </section>
        <section className={s.sectionKey}>
          <div className={s.container}>
            <div className={s.titleWrapper}>
              <Title text={"Key ideas"} />
            </div>
            <div className={s.row}>
              <div className={s.item}>
                <div className={s.itemContent}>
                  <div className={s.itemTitle}>Ledger Technology</div>
                  <p className={s.itemText}>
                    We provided a ledger financial system technology that engages
                    users in independent wealth management. Thanks to its nature,
                    this technology makes cryptocurrency market interesting to a
                    general user.
                  </p>
                </div>
                <div className={s.itemNumber}>1</div>
              </div>
              <div className={s.item}>
                <div className={s.itemContent}>
                  <div className={s.itemTitle}>IriTech Security</div>
                  <p className={s.itemText}>
                    IriTech biometric security system gives users maximum convenience
                    of interaction with the platform. We also added advanced Iris eye
                    recognition feature through the partnership with the IriTech
                    company.
                  </p>
                </div>
                <div className={s.itemNumber}>2</div>
              </div>
              <div className={s.item}>
                <div className={s.itemContent}>
                  <div className={s.itemTitle}>Smart Contract</div>
                  <p className={s.itemText}>
                    Smart contracts and blockchain technology connect financial and
                    business strategies with the security and functionality within a
                    single platform.
                  </p>
                </div>
                <div className={s.itemNumber}>3</div>
              </div>
            </div>
          </div>
        </section>
        <section className={s.sectionResult}>
          <div className={s.container}>
            <div className={s.titleWrapper}>
              <Title text={"Results"} />
            </div>
            <div className={s.contentWrapper}>
              <div className={s.descWrapper}>
                <Description
                  text={
                    "While working on this project our main goal was not just to tweak design, but to work on improvements regarding user experience and introduce extra services needed for the product to stand out. We worked hard to provide users with a good service while using Gigzi. Together with the Product Manager, Creative Director, UX and UI designer, Brand Leader, Graphic & Motion designer, and Front-end developer, we helped to create a distinctive financial platform. For this project, we used the time and material approach (T&M) to reveal all cost and time estimates prior to starting the work."
                  }
                />
              </div>
              <div className={s.list}>
                <div className={s.item}>
                  <div className={s.itemLabel}>Partnership</div>
                  <div className={s.itemNumber}>3+ years</div>
                </div>
                <div className={s.item}>
                  <div className={s.itemLabel}>Earned</div>
                  <div className={s.itemNumber}>$1M+</div>
                </div>
                <div className={s.item}>
                  <div className={s.itemLabel}>Users</div>
                  <div className={s.itemNumber}>1000+</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={s.sectionScope}>
          <div className={s.container}>
            <div className={s.titleWrapper}>
              <Title text={"Scope of work"} />
            </div>
            <div className={s.row}>
              <div className={s.item}>
                <div className={s.itemTitle}>Discovery & Strategy</div>
                <ul className={s.list}>
                  <li>Define idea value</li>
                  <li>Market & competitors research</li>
                  <li>VP & BM workshop</li>
                  <li>Idea validation, PoC</li>
                  <li>Product roadmap</li>
                </ul>
              </div>
              <div className={s.item}>
                <div className={s.itemTitle}>UX design</div>
                <ul className={s.list}>
                  <li>UX research</li>
                  <li>App flow</li>
                  <li>Wireframes</li>
                  <li>UI Layouts & Graphics</li>
                  <li>UI Style guide & Assets</li>
                </ul>
              </div>
              <div className={s.item}>
                <div className={s.itemTitle}>App Development</div>
                <ul className={s.list}>
                  <li>Front-End Development</li>
                  <li>Back-End Development</li>
                </ul>
              </div>
              <div className={s.item}>
                <div className={s.itemTitle}>Branding</div>
                <ul className={s.list}>
                  <li>Brand identity</li>
                  <li>Brand guidelines</li>
                  <li>Brand attributes</li>
                  <li>Marketing materials</li>
                </ul>
              </div>
              <div className={s.item}>
                <div className={s.itemTitle}>Web Design</div>
                <ul className={s.list}>
                  <li>UX research</li>
                  <li>Information Architecture</li>
                  <li>Layouts design</li>
                  <li>Responsive & adaptive design</li>
                  <li>Animations</li>
                </ul>
              </div>
              <div className={s.item}>
                <div className={s.itemTitle}>Output</div>
                <ul className={s.list}>
                  <li>
                    <UnderlinedLink href="https://gigzi.com/">
                      Landing page
                    </UnderlinedLink>
                  </li>
                  <li>
                    <UnderlinedLink href="https://gigzi.com/crowdsale/#/">
                      Ico Cabinet
                    </UnderlinedLink>
                  </li>
                  <li>
                    <UnderlinedLink href="https://gigzi-wallet.firebaseapp.com/#/">
                      Wallet Web App
                    </UnderlinedLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={s.sectionGetIn}>
          <div className={s.container}>
            <div className={s.contentWrapper}>
              <div className={s.titleWrapper}>
                <Description text={"Get in touch"} />
              </div>
              <Title
                text={
                  "We will be happy if you tell us a little more about your ideas."
                }
              />
            </div>
            <div className={s.formWrapper}>
              <form className={s.form}>
                <div className={s.inputsWrapper}>
                  <div className={s.inputWrapper}>
                    {/* <label>Your name</label> */}
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className={s.inputWrapper}>
                    {/* <label>Your email</label> */}
                    <input type="email" placeholder="Email address" />
                  </div>
                </div>
                <div className={s.inputWrapperWidth}>
                  {/* <label>Your email</label> */}
                  <input
                    className={s.detailsInput}
                    type="text"
                    placeholder="Any details (optional)"
                  />
                </div>
                <div className={s.btnWrapper}>
                  <button className={s.btn}>Send a request</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className={s.titleWrapperWorks}>
          <Title text={"More works"} />
        </section>
        <section className={s.sectionWorks}>
          <WorksSection worksData={data} />
        </section>
        <section className={s.linkWrapperWorks}>
          <div className={s.rightSideLink}>
            <a target="_blank" href="https://velonto.at/">
              <ButtonSecondary>Go visit site</ButtonSecondary>
            </a>
          </div>
        </section>
        {/* <section className={s.sectionGotProject}>
                    <div className={s.container}>
                        <div className={s.thin}>Got a project?</div>
                        <div className={s.linkWrapper}>
                            <a target="_blank" className={s.link} href="#"><span>Let’s start </span></a>
                        </div>
                    </div>
                </section> */}
      </Fragment>
    )
  }
}
