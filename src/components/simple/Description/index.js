
import style from './style.scss';

const Description = ({text, light}) => {
    return (
        <p className={`${style.desc} ${light ? style.light : ''}`}>{text}</p>
    )
};
export default Description;