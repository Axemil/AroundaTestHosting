
import s from './style.scss';

const CustomLink = ({button, text, href, large}) => {
    return (
            button ? 
            (<button className={s.link}>
                <span>{text}</span>
            </button>) : 
            (
                <a className={`${s.link} ${large ? s.large : ''}`} href={href}><span>{text}</span></a>
            )
    )
};
export default CustomLink;
