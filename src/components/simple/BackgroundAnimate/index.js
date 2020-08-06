import {  TimelineMax } from 'gsap';



export default class BackgroundAnimate  extends React.Component {

    get tween () {
        const t = new TimelineMax();

        t.fromTo(this.bg, 1.8,{y: '300%'}, {y: '-300%',  ease: SlowMo.ease.config(0.7, 0.7, false)})

        return t;
    }

    render() {
        
        return (
            <div ref={el => this.bg = el} className={`bg` }></div>
        )
    }
};
