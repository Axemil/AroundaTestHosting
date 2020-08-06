
import s from './style.scss';
import data from '@/data/ServiceSlide';
import ContentServiceTablet from '../ContentServiceTablet';

const ServiceSlideSectionTablet = () => {
    return (
        <section className={s.serviceSlideSectionTablet}>
            {
                data.map((el, i) => {
                    return (
                        <ContentServiceTablet
                            key={el.id}
                            id={el.id} 
                            title={el.title}
                            desc={el.description}
                            list={el.list}
                            image={el.image}
                        />  
                    )
                    
                })
            }
        </section> 
    )
};
export default ServiceSlideSectionTablet;