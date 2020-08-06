import s from './style.scss';
import Link from 'next/link';

import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';




export default class PageNotFound extends React.PureComponent {
    render() {
        return (
            <section className={s.pageNotFound}>
                    <div className={s.content}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'Accept our appologies!'}/>
                        </div>
                        <Description light text={'The page you were looking for doesn’t exist. You may have misstyped the address or the page may have moved.'}/>
                        <div className={s.linkWrapper}>
                            <Link href="/"><a className={s.link}>
                            Go to Home page
                            </a></Link>
                        </div>
                    </div>
                    <div className={s.image}>
                        <div className={s.wrapper}>
                            <div className={s.normalColor}>
                                <svg  viewBox="0 0 351 140"  ><path d="m0 96.5754364 73.3278146-95.5754364h8.1854304v96.4295511h21.486755v6.5766829h-21.486755v33.993766h-7.2475165v-33.993766h-74.2657285zm74 1.4245636v-87l-67 87zm102 42c-37.990812 0-56-36.581197-56-69.8290598 0-33.0769231 18.009188-70.1709402 56-70.1709402 38.07657 0 56 36.5811966 56 69.8290598 0 33.0769232-17.92343 70.1709402-56 70.1709402zm.328924-134c-33.27425 0-48.328924 34.1462264-48.328924 63.0721024 0 29.0114556 15.22575 63.9278976 48.756614 63.9278976 33.188712 0 48.243386-34.3173854 48.243386-63.1576819 0-29.0114556-15.22575-63.8423181-48.671076-63.8423181zm71.671076 90.5754364 73.327815-95.5754364h8.18543v96.4295511h21.486755v6.5766829h-21.486755v33.993766h-7.247517v-33.993766h-74.265728zm75 1.4245636v-87l-67 87z" fill="#111212"/></svg>
                            </div>
                            <div className={s.hoverColor}>
                                <svg  viewBox="0 0 351 140"  ><path d="m0 96.5754364 73.3278146-95.5754364h8.1854304v96.4295511h21.486755v6.5766829h-21.486755v33.993766h-7.2475165v-33.993766h-74.2657285zm74 1.4245636v-87l-67 87zm102 42c-37.990812 0-56-36.581197-56-69.8290598 0-33.0769231 18.009188-70.1709402 56-70.1709402 38.07657 0 56 36.5811966 56 69.8290598 0 33.0769232-17.92343 70.1709402-56 70.1709402zm.328924-134c-33.27425 0-48.328924 34.1462264-48.328924 63.0721024 0 29.0114556 15.22575 63.9278976 48.756614 63.9278976 33.188712 0 48.243386-34.3173854 48.243386-63.1576819 0-29.0114556-15.22575-63.8423181-48.671076-63.8423181zm71.671076 90.5754364 73.327815-95.5754364h8.18543v96.4295511h21.486755v6.5766829h-21.486755v33.993766h-7.247517v-33.993766h-74.265728zm75 1.4245636v-87l-67 87z" fill="#54ffd7"/></svg>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}
