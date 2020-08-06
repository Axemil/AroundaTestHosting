
import style from './style.scss';

const Subtitle = ({text}) => {
    return (
        <h3 className={style.subtitle}>
            {text}
        </h3>
    )
};
export default Subtitle;