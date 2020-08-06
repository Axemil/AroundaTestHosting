import Title from '@simple/Title';
import Subtitle from '@simple/Subtitle';
import Description from '@simple/Description';
import style from './style.scss';
import LineSvg from '@assets/svg/line.svg';

const AgencySection = ({title, titleThink, subtitle, desc, dark}) => {
    return (
        <section className={`${style.section} ${dark ? style.darkBg : ''}`}>
                    <div className={style.content}>
                        <div className={style.titleWrapper}>
                            <Title text={title} textThink={titleThink}/>
                        </div>
                        {
                            desc ?  (<div className={style.desc}>
                                        <Description text={desc} light={true}/>
                                    </div>) : null
                        }
                        <div className={style.subtitleWrapper}>
                            {<Subtitle text={subtitle}/>}
                        </div>   
                    </div>
                    <div className={style.image}>
                        <LineSvg/>
                    </div>
        </section>
    )
};
export default AgencySection;