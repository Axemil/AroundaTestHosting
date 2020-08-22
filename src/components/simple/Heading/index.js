
import { TweenMax, TimelineMax } from "gsap";
import style from "./style.scss";



class Heading extends React.Component {
	constructor() {
		super();

		this.state = {
			x: 40,
			y: 80,
			size: 30
		}

		this.title = null;
		this.tweenMove = TweenMax;
		this.tweenOut = new TimelineMax();
	}

	componentDidMount() {
		this.tweenMove.set(this.title, {webkitClipPath: `circle(0% at 0% 0%)`}) 
	}

	mouseMove = (e) => { 
		const wrapper = this.title.parentElement;

		const width = wrapper.clientWidth;
		const height = wrapper.clientHeight;

		const oX = Math.floor((e.nativeEvent.offsetX / width) * 100);
		const oY = Math.floor((e.nativeEvent.offsetY / height) * 100);

		

		const { x, y, size } = this.state;


		this.setState({
			x: oX,
			y: oY
		});

		this.tweenMove.to(this.title, .6, { webkitClipPath: `circle(${size}% at ${x}% ${y}%)` }).play();
	}

	mouseOut = (e) => {
		console.log('oiut')
		const { x, y, size } = this.state;

		this.tweenOut
			.to(this.title, .3, { webkitClipPath: `circle(${size + 10}% at ${x}% ${y}%)`, ease: Power4.easeInOut })
			.to(this.title, .3, { webkitClipPath: `circle(0% at ${x}% ${y}%)`, ease: Power0.easeNone });
	}

	render() {
		const {children = '', className} = this.props;
		return (
			<div className={`${className}`}>
					<div className={`${style.wrapper} slowCursor`}
						onMouseMove={this.mouseMove}
						onMouseOut={this.mouseOut}
					>
						<div className={style.text}>
							{children}	
						</div>
						<div className={`${style.mask} ${style.text}`} ref={title => this.title = title}>
							{children}	
						</div>
					</div>
			</div>
		);
	}
}

export default Heading;