import React, { Fragment } from 'react';
import s from './style.scss';

import Title from '@simple/Title';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import CustomLink from '@simple/CustomLink';
import { LazyLoadImage } from "react-lazy-load-image-component"

const VelontoCase = (props) => {
    return (
        <Fragment>
            <section className={s.sectionHead}>
                <div className={s.container}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <Title text={'Food you love, delivered to you by Velonto'} />
                        </div>
                        <div className={s.descWrapper}>
                            <Description text={'An idea that was shaped and evolved into the full-service product to connect customers, freelance cyclists, restaurants and other local businesses in Austria. From strategy, market research, and branding to full-cycle product development carried out by our team'} />
                        </div>
                    </div>
                    <div className={s.linkWrapper}>
                        <CustomLink text={'Platform'} />
                    </div>
                </div>
            </section>
            <section className={s.sectionBg}>
                <LazyLoadImage src="assets/images/mainVideo.jpg" alt="velonto image" />
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
                        <li>Strategy</li>
                        <li>Branding</li>
                        <li>UX Design</li>
                        <li>UI Design</li>
                        <li>Development</li>
                    </ul>
                </div>
            </section>
            <section className={s.sectionBgSecond}>
                <LazyLoadImage src="assets/images/velontoCase-bg2.jpg" alt="velonto" />
            </section>
            <section className={s.sectionWhat}>
                <div className={s.infoWrapper}>
                    <ul className={s.infoList}>
                        <li>
                            <div className={s.infoLabel}>TEAM SIZE</div>
                            <div className={s.infoText}>20+</div>
                        </li>
                        <li>
                            <div className={s.infoLabel}>TIME</div>
                            <div className={s.infoText}>1,5years</div>
                        </li>
                        <li>
                            <div className={s.infoLabel}>INDUSTRY</div>
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
                        <CustomLink text={'Visit website'} href={'velonto.at'} />
                    </div>
                </div>
            </section>
            <section className={s.sectionComment}>
                <div className={s.container}>
                    <blockquote>
                        <q> Arounda was a great partner for this project. The team is highly skilled at giving clear explaining and producing exceptional</q>
                        <div className={s.author}>
                            <div className={s.image}>
                                <LazyLoadImage src="assets/images/josefMob.jpg" alt="Josef Chen" />
                            </div>
                            <div className={s.name}>
                                Jozef Chen, CEO at Velonto
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
                        <Description light text={'Gigzi should help users to make financial transactions faster and easier. '} />
                    </div>
                    <div className={s.row}>
                        <div className={s.item}>
                            <div className={s.itemTitle}>
                                Clients
                            </div>
                            <div className={s.itemList}>
                                <ul>
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
                                </ul>
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemTitle}>
                                Clients
                            </div>
                            <div className={s.itemList}>
                                <ul>
                                    <li>More clients</li>
                                    <li>Risk-free deliveries</li>
                                    <li>Improved reputation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.sectionCheck}>
                <div className={s.contentWrapper}>
                    <div className={`${s.text} ${s.textThin}`}>Let`s check</div>
                    <div className={`${s.text} ${s.textBold}`}>Velonto process</div>
                </div>
                <div className={s.imageWrapper}>
                    <svg  viewBox="0 0 1378 319" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" opacity=".04" transform=""><path d="m153.167402 115.661368c4.660882-10.88021 9.220441-18.1787364 13.746225-21.8955785 5.275277-3.9971144 11.80031-5.9854363 18.407108-5.6090527 8.047079-.1271408 15.826291 2.8913672 21.683236 8.413579 5.880123 5.1849512 9.219924 12.6689272 9.153882 20.5102102-.030782 5.992827-1.465212 11.895114-4.189029 17.232632l-2.803285 6.521368-69.068872 151.579579c-6.754902 15.205263-16.999837 22.819158-30.734804 22.841684-6.391037.312322-12.7066145-1.492928-17.9680395-5.136-5.566764-4.842479-9.9463799-10.900356-12.8005392-17.705684l-70.92647057-151.106526-2.7357353-6.149684c-2.59783524-5.718166-4.02197673-11.89984-4.18960177-18.178737-.08253896-7.830579 3.23184396-15.312816 9.08690569-20.5102106 5.70988525-5.4535267 13.31646225-8.4708465 21.21039215-8.413579 6.794338-.4122099 13.5060953 1.6658732 18.879951 5.845579 4.4920098 4.0885263 9.2542157 11.2181056 14.2528431 21.7604206l44.7512254 103.057895z"/><path d="m419.074118 136.779789c-5.616296-9.529956-12.971508-17.919988-21.683236-24.733894-9.411411-7.316457-19.967697-13.0250852-31.241421-16.8947371-26.105791-9.2755243-54.762024-8.260695-80.146912 2.8383158-13.434884 5.8931173-25.664324 14.2215273-36.071176 24.5649473-10.453827 10.423598-18.852374 22.723235-24.756716 36.256105-12.196276 28.206643-12.110622 60.21856.236421 88.359474 12.150137 27.747783 34.267253 49.922932 61.976226 62.138842 13.93385 6.207294 29.025679 9.385928 44.278382 9.32673 11.365909-.037414 22.669154-1.687008 33.571863-4.900309 10.705188-3.019685 20.822658-7.829327 29.924216-14.225368 6.836788-4.421752 12.830009-10.028583 17.697843-16.556842 3.685021-5.253582 5.644478-11.52426 5.606568-17.942211.187533-8.215692-3.012711-16.146526-8.848921-21.929368-5.927976-5.908722-14.028515-9.111258-22.3925-8.852842-3.256599-.025802-6.492224.523239-9.558186 1.621894-3.635117 1.462757-7.046094 3.430626-10.132353 5.845579-5.420441 4.283042-11.469916 7.702338-17.934265 10.136842-5.773098 2.027815-11.849476 3.056229-17.968039 3.041053-12.361681.144108-24.328301-4.352898-33.538088-12.603474l103.485098-45.818526c7.426789-3.060918 14.167308-7.575735 19.825637-13.279263 3.94163-4.728409 6.009056-10.741031 5.809216-16.894737.002833-10.388185-2.810215-20.582703-8.139657-29.498211zm-142.866177 65.315053.743039-8.481158c2.585718-29.405643 27.303277-51.899473 56.808726-51.697895 14.523039 0 25.195784 5.203579 31.781814 15.408l3.377451 5.034632z"/><path d="m450.281765 42.4733684v-6.994421c-.213568-9.2404455 2.930528-18.2447075 8.848921-25.3421053 5.732227-6.24521549 13.92478-9.64483884 22.3925-9.29210526 8.506925-.35441454 16.720417 3.14593438 22.358726 9.52863156 5.819755 6.9818956 8.819485 15.8886544 8.409853 24.9704211v242.6084215c.30397 11.792526-2.262892 20.983263-7.700589 27.504631-5.755517 6.666862-14.276154 10.286305-23.06799 9.798947-8.581898.298746-16.859693-3.199245-22.628921-9.562421-5.93997-6.925143-9.01966-15.85416-8.6125-24.970421z"/><path d="m651.848039 88.7311579c15.40751-.0439615 30.656786 3.1084914 44.785 9.2583158 27.541989 11.7302923 49.499705 33.6372193 61.300736 61.1589473 6.113903 14.293444 9.207125 29.697381 9.085343 45.244105.056138 15.1147-3.038143 30.075098-9.085343 43.926316-5.926297 13.657102-14.422939 26.046358-25.026912 36.492632-10.625913 10.46483-23.111181 18.853147-36.814216 24.733894-14.130169 6.087246-29.366985 9.181978-44.751225 9.091388-30.540292.054699-59.894262-11.827892-81.801863-33.115703-10.449867-10.333838-18.900364-22.511153-24.925588-35.918211-6.250922-13.793743-9.43154-28.781549-9.321765-43.926316-.118512-15.841443 2.972096-31.542712 9.085343-46.156421 18.059449-43.307191 60.534327-71.3602448 107.436716-70.9578945zm0 62.0374741c-7.204579-.057436-14.343922 1.368765-20.97397 4.189894-6.302295 2.700734-12.033317 6.576621-16.887255 11.420842-4.81648 4.82844-8.617672 10.572966-11.179363 16.894737-2.688074 6.818418-4.030015 14.093351-3.951618 21.422527-.026396 6.757662 1.401989 13.44178 4.18804 19.597894 2.725161 6.121466 6.600686 11.662022 11.415784 16.320316 4.879019 4.69417 10.611303 8.410335 16.887255 10.94779 6.420592 2.67087 13.311313 4.026645 20.264706 3.987996 6.975685.023271 13.878983-1.415553 20.264706-4.224523 6.262116-2.669626 11.984887-6.459778 16.887254-11.184316 4.867561-4.712094 8.758331-10.338413 11.449559-16.556842 2.78945-6.393184 4.215816-13.298014 4.188039-20.273684.054967-7.131095-1.371166-14.19588-4.188039-20.746737-5.450732-12.487979-15.520853-22.380928-28.100392-27.606-6.385467-2.806037-13.290529-4.233716-20.264706-4.189894z"/><path d="m928.022206 212.535789c.132724-6.658071-.171902-13.317674-.911912-19.935789-.69675-4.150946-1.828819-8.216873-3.377451-12.130421-2.948621-6.380468-7.735382-11.734131-13.746225-15.374211-6.022939-3.949401-13.063362-6.062464-20.264706-6.082105-10.275127-.243738-20.144208 4.014189-27.019608 11.657369-7.121829 7.735598-10.960771 17.936928-10.70652 28.450736v81.601579c.186869 9.195224-2.955988 18.147935-8.848921 25.206948-5.866748 6.001848-13.916621 9.365324-22.307511 9.32074-8.39089-.044585-16.404599-3.493413-22.207293-9.557267-5.952029-6.918218-9.033421-15.852172-8.6125-24.970421v-75.654631c-.249144-13.350383 1.492498-26.663337 5.1675-39.499895 3.671903-11.425372 9.394493-22.085555 16.887255-31.458 9.1988-11.727708 21.006564-21.145709 34.483774-27.504632 13.370078-6.478371 28.037982-9.8292192 42.893628-9.7991502 17.377146.0688325 34.434399 4.6815732 49.479657 13.3808352 15.420521 8.605164 28.348636 21.061701 37.52348 36.154737 4.777856 8.168174 8.199743 17.057609 10.132353 26.322 2.376112 11.262713 3.508718 22.752426 3.377451 34.262526v73.79621c.171643 9.19278-2.969398 18.140319-8.848922 25.206948-5.565885 6.202301-13.593281 9.617622-21.919657 9.325894-8.57369.30733-16.844609-3.19298-22.595147-9.562421-5.964212-6.913133-9.057879-15.847636-8.646274-24.970421v-68.187158z"/><path d="m1036.87745 58.3206316v-6.9944211c-.26769-9.2693842 2.88191-18.3134592 8.84892-25.4096842 5.82075-6.1500438 14.03861-9.4460505 22.49383-9.0217895 8.42629-.2504244 16.52937 3.2521527 22.1223 9.5624211 5.94385 6.9095925 9.0247 15.8298712 8.6125 24.9366316v40.0405263h13.5098c8.15677-.1153912 16.08634 2.6887479 22.35873 7.9067368 5.64967 5.1019614 8.72226 12.4645574 8.37608 20.0709474.20113 7.618655-2.94683 14.942444-8.6125 20.037158-6.06545 5.417393-13.99785 8.26463-22.12231 7.940526h-13.5098v133.333263c.20225 9.19768-2.94245 18.155639-8.84892 25.206948-5.86675 6.001848-13.91662 9.365324-22.30751 9.321178-8.39089-.045023-16.4046-3.493851-22.2073-9.557705-5.97652-6.909934-9.09301-15.840591-8.71382-24.970421v-133.333263h-3.37745c-8.52877.490553-16.94104-2.166498-23.64216-7.467473-5.83137-5.176237-8.99933-12.720555-8.6125-20.510211 0-19.305053 11.80982-28.6309474 35.42946-27.9776842z"/><path d="m1262.38985 88.7311579c15.37339-.0299587 30.58675 3.1222004 44.68368 9.2583158 27.56744 11.7159783 49.55117 33.6247183 61.36828 61.1589473 6.11391 14.293444 9.20713 29.697381 9.08535 45.244105.05613 15.1147-3.03815 30.075098-9.08535 43.926316-5.9212 13.603388-14.39385 25.945217-24.95936 36.357474-10.61986 10.472251-23.1066 18.861563-36.81421 24.733895-14.13017 6.087245-29.36699 9.181977-44.75123 9.091387-15.42807.075305-30.71468-2.946602-44.95387-8.888651-13.72887-5.604827-26.2336-13.834063-36.81422-24.227052-10.49352-10.274619-18.99084-22.407564-25.06068-35.783053-6.25093-13.793743-9.43154-28.781549-9.32177-43.926316-.03002-15.823612 3.14087-31.489672 9.32177-46.055052 18.05944-43.307192 60.53432-71.3602454 107.43671-70.9578951zm0 62.0374741c-7.20394-.050714-14.34193 1.375217-20.97397 4.189894-6.31071 2.685274-12.04452 6.563042-16.88725 11.420842-4.82649 4.827117-8.639 10.571399-11.21314 16.894737-2.78617 6.844409-4.20883 14.167482-4.18826 21.557684-.00947 6.755918 1.41817 13.436537 4.18826 19.597895 2.73678 6.114885 6.61084 11.653359 11.41578 16.320316 4.88521 4.686355 10.61591 8.401491 16.88726 10.947789 6.42059 2.670871 13.31131 4.026646 20.26471 3.987997 6.97568.023271 13.87898-1.415553 20.2647-4.224523 6.25606-2.68087 11.97691-6.469748 16.88726-11.184316 4.84669-4.722534 8.72457-10.346806 11.41578-16.556842 2.8048-6.388296 4.23184-13.296417 4.18804-20.273684.07187-7.13271-1.35496-14.200955-4.18804-20.746737-5.34261-12.464029-15.27036-22.396176-27.72887-27.741158-6.40875-2.807589-13.33614-4.235125-20.33226-4.189894z"/></g></svg>
                </div>  
            </section> 
            <section className={s.sectionBranding}>
                <div className={s.contentWrapper }>
                    <div className={s.titleWrapper}>
                        <Title text={'Branding'} />
                    </div>
                    <Description light text={'Our goal was to show through colors and a visual appearance that Velonto is a reliable assistant when it comes to small everyday tasks. We came up with a unique brand identity and made sure it is consistent in every medium, both mentally and visually. Spacious blue color, clean and uncluttered UI reveal calm, trust, freedom, and harmony.'} /> 
                </div>
                <div className={s.images}>
                    <div>
                        <LazyLoadImage src={'assets/images/velonto/velontoBranding1.jpg'}  alt='branding image'/> 
                    </div>
                    <div>
                        <LazyLoadImage src={'assets/images/velonto/velontoBranding2.jpg'}  alt='branding image'/> 
                    </div>
                    <div>
                        <LazyLoadImage src={'assets/images/velonto/velontoBranding3.jpg'}  alt='branding image'/> 
                    </div>
                    <div>
                        <LazyLoadImage src={'assets/images/velonto/velontoBranding4.jpg'}  alt='branding image'/> 
                    </div>
                </div>
            </section> 
        </Fragment>
    )
};
export default VelontoCase;