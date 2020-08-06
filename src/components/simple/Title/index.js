
import style from './style.scss';


const Title = ({text, textThink}) => {
    return (
        <h2 className={style.title}>
            {text}
            {textThink ? <div>{textThink}</div> : null} 
        </h2>
    )
};
export default Title;