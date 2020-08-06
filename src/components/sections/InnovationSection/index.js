import style from './style.scss';
import TitleSecondary from '@simple/TitleSecondary';
import list from '@/data/Innovation';

import parse from 'html-react-parser';

const InnovationSection = ({btn, link}) => {

    return (
        <>
            <div className={style.container}>
                    <div className={style.titleWrapper}>
                        <TitleSecondary text='User-centered method based on human insights'/>
                    </div>
                    <div className={style.list}>
                        <ul>
                            {
                                list.map(el => {
                                    return(
                                        <li key={el.id} tabIndex='-1'>
                                            <div className={style.image}>
                                                {parse(el.image)}
                                            </div>
                                            <div className={style.text}> <span className={style.number}>{el.number}</span>{el.text}</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {btn ? <span className={style.link}><a href={link}>{btn}</a></span> : null}
            </div>
        </>
    )
};
export default InnovationSection;