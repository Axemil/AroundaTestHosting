
import s from './style.scss';
import Observer from "react-intersection-observer";

import TitleH from '@simple/TitleH';
import ButtonSecondary from '@simple/ButtonSecondary';


const ContentService = ({id, description, onChange, title, list}) => {

    const changeItem = inView => {
    
        if (inView) {
            onChange();
        }
    };


    return (
        <div className={s.content} id={id}>
            <Observer tag='div' className={s.contentWrapper} onChange={changeItem}>
                <TitleH size="h2"> {title} </TitleH>
                <p className={s.text}>
                    {description}
                </p>
                <ul className={s.list}>
                    {list.map((el, i) => <li tabIndex='-1' key={i}><span>{el}</span></li>)}
                </ul>
				<ButtonSecondary>Show Cases</ButtonSecondary>
            </Observer>
        </div>
    )
};
export default ContentService;