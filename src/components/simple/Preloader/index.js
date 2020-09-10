
import style from './style.scss';
import { LazyLoadImage } from "react-lazy-load-image-component"

const Preloader = (props) => {
    return (
        <div className={style.preloaderWrapper}>
            <div className={style.preloader}>
                <LazyLoadImage alt="preloader" src="assets/images/preloader.gif"/>
            </div>
        </div>
    )
};
export default Preloader;