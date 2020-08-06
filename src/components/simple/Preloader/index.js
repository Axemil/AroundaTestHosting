
import style from './style.scss';

const Preloader = (props) => {
    return (
        <div className={style.preloaderWrapper}>
            <div className={style.preloader}>
                <img src="assets/images/preloader.gif"/>
            </div>
        </div>
    )
};
export default Preloader;