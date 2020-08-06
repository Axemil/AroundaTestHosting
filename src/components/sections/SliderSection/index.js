import Slider from '@simple/Slider';
import Title from '@simple/Title';
import style from './style.scss';

export default class SliderSection extends React.Component {
    render() {
        return (
            <section className={style.sliderSection}>
                <div className={style.container}>
                    <div className={style.titleWrapper}>
                        <Title text={'Reviews'}/>
                    </div>
                    <Slider />
                </div>
            </section>
        )
    }
}
