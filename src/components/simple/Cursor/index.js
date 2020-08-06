import { TweenMax, TimelineMax } from 'gsap';
import style from './style.scss';



export default class Cursor extends React.Component {
    state = {
        slowCursor: false,
        stopCursor: false,
    }

    componentDidMount() {   
        document.addEventListener('mousemove', this.cursorMove)

        const tl = new TimelineMax();

        tl
            .to(this.cursor, .6, {autoAlpha: 1, ease: Power4.easeInOut}, '+=1')
    }
    componentWillUnmount() {
        document.removeEventListener('mousemove', this.cursorMove)
    }

    cursorMove = (e) => {
        let x = e.clientX;
        let y = e.clientY;

        TweenMax.to(this.cursor, .6, {y: `${y}`, x: `${x}`});

        e.target.classList.contains('slowCursor') ? this.setState({slowCursor: true}) : this.setState({slowCursor: false})
        e.target.classList.contains('stopCursor') ? this.setState({stopCursor: true}) : this.setState({stopCursor: false})

    }

    render() {
        const {slowCursor, stopCursor} = this.state;
        return (
            <div ref={el => this.cursor = el}
                className={`${style.cursor} ${slowCursor ? style.slow : ''} ${stopCursor ? style.stop : ''}`}>
                <svg viewBox="0 0 214.9 239.9">
                    <g fill="inherit" stroke="#000">
                        <path d="m123.1 29.7-.3 3.9c2.3.2 4.3.3 6.4.4.7-9.9 1.4-19.7 2-29.5-2.2-.2-4.3-.3-6.5-.4-.1 1.2-.2 2.4-.3 3.8-2.6-3.1-6.3-5.1-10.5-5.4-.8-.1-1.6 0-2.4 0-1.7.1-3.3.6-4.9 1.3-5 2.3-8.6 7.2-9 13.2-.1 1.4 0 2.7.2 3.9.3 1.6.8 3.2 1.6 4.7s1.8 2.8 3.1 4c1.3 1.3 2.9 2.3 4.6 3 .1 0 .2.1.3.1h.1c1.3.5 2.7.8 4.2.9h.5.3c2.4.1 4.6-.4 6.7-1.5 1.5-.5 2.8-1.4 3.9-2.4zm-18.8-12.1c.3-5.4 4.7-9.2 10.2-8.8 5.6.3 9.5 4.7 9 10.2-.4 5.4-4.8 9.1-10.3 8.8-5.4-.5-9.2-4.8-8.9-10.2z"/>
                        <path d="m108.5 232.7-.3 3.9c2.3.2 4.3.3 6.4.4.7-9.9 1.4-19.7 2-29.5-2.2-.2-4.3-.3-6.5-.4-.1 1.2-.2 2.4-.3 3.8-2.6-3.1-6.3-5.1-10.5-5.4-.8-.1-1.6 0-2.4 0-1.7.1-3.3.6-4.9 1.3-5 2.3-8.6 7.2-9 13.2-.1 1.4 0 2.7.2 3.9.3 1.6.8 3.2 1.6 4.7s1.8 2.8 3.1 4c1.3 1.3 2.9 2.3 4.6 3 .1 0 .2.1.3.1h.1c1.3.5 2.7.8 4.2.9h.5.3c2.4.1 4.6-.4 6.7-1.5 1.5-.5 2.8-1.4 3.9-2.4zm-18.8-12.1c.3-5.4 4.7-9.2 10.2-8.8 5.6.3 9.5 4.7 9 10.2-.4 5.4-4.8 9.1-10.3 8.8-5.4-.5-9.2-4.8-8.9-10.2z"/>
                        <path d="m75.2 221.9c-21.5-6.8-40-20-53.6-38.2-13.8-18.5-21.1-40.6-21.1-63.7 0-25.6 9.2-50.4 25.9-69.8 16.6-19.2 39.4-31.9 64.3-35.9l1.1 6.9c-23.2 3.7-44.6 15.6-60 33.5-15.7 18.1-24.3 41.3-24.3 65.3 0 21.7 6.8 42.3 19.7 59.6 12.5 16.8 30.3 29.4 50.1 35.7z"/>
                        <path d="m122 225.9-1-6.9c49.2-6.7 86.3-49.2 86.3-99 0-21.9-6.9-42.7-20.1-60.1-12.7-16.9-30.8-29.5-50.9-35.6l2-6.7c21.5 6.5 40.9 20 54.5 38.1 14.1 18.7 21.5 40.9 21.5 64.3.1 53.2-39.7 98.7-92.3 105.9z"/>
                    </g>
                </svg>
            </div>
        )
    }
}
