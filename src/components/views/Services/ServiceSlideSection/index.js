import style from './style.scss';
import TimelineMax from 'gsap/TimelineMax';
import TweenMax from 'gsap/TweenMax';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import _debounce from 'lodash/debounce';



const scrollPlugin = ScrollToPlugin;


export default class ServiceSlideSection extends React.Component {

    state = {
        activeItem: this.props.children[0].props.id,
        desktop: true,
    }
    
    images = [];
    videos=[];
    scrollUp = undefined;
    isScrolling = false;
    isAnimating = false;

    section = React.createRef();

    componentDidMount() {
        const { activeItem } = this.state;
        const {background} = this.props.children[0].props;
        const t = new TimelineMax();

        // sets the right image visible when the copmonent mounts
        t
            .set(this.images[activeItem], { zIndex: 1 })
            .set(this.videos[activeItem], {zIndex: 2, background: background})
        ;


        window.addEventListener("mousewheel", this.onMouseWheel);
        window.addEventListener(
        "scroll",
        (this.scrollRef = _debounce(this.onScroll, 100))
        );
    }

    componentWillUnmount() {
        clearTimeout(this.scrollTimer);

        window.removeEventListener("mousewheel", this.onMouseWheel);
        window.removeEventListener("scroll", this.scrollRef);
    }

    // Find out scroll direction
    onMouseWheel = ({ deltaY }) => {
        this.scrollUp = deltaY < -0.01;
    };

    // On scroll function handles item position
    onScroll = () => {
        clearTimeout(this.scrollTimer);

        this.scrollTimer = setTimeout(() => {
            this.positionItem()
        }, 500);
    };

    // Positioning the item content
    positionItem = () => {
        const section = this.section.current;
        if(!section) return
        const child = section && section.querySelector(`#${this.state.activeItem}`);
        const scrollTop = window.pageYOffset || window.scrollY;
        const { top, bottom } = section.getBoundingClientRect();
        const childTop = child.getBoundingClientRect().top;
        const scrollTo = Math.round(childTop + scrollTop);
        const threshold = window.innerHeight / 3;

        // Not positioning if not active child or is scrolling
        if (!child || this.isScrolling) {
        return;
        }

        // Not positioning first item until scrolled 1/3 of screen height
        if (top > threshold) {
        return;
        }

        // Not positioning when scrolled through last item
        if (bottom + threshold < window.innerHeight) {
        return;
        }

        clearTimeout(this.scrollTimer);

        this.isScrolling = true;

        const t = new TimelineMax();

        // Positioning the item content with gsap scroll to plugin
        t.to(window, 0.6, {
        scrollTo: scrollTo,
        ease: "Power4.easeInOut"
        }).call(() => {
        this.isScrolling = false;
        });
    };

    // Sets active item and animates the right image in
    onItemChange = id => {
        if (id === this.state.activeItem) return false;
        this.setState({ activeItem: id });

        const t = new TimelineMax();
        const section = this.section.current;
        const activeImage = this.images[id];
        const activeVideo = this.videos[id];
        const allImages = section.querySelectorAll(".section__image");
        const allVideos = section.querySelectorAll(".section__video");
        const imageOverlay = section.querySelector(
        ".section__imageOverlayAnimation"
        );
        const overlayColor = this.images[id].getAttribute('background');

        if (!this.isAnimating) {
            this.isAnimating = true;
            t.set(imageOverlay, { 
                background: overlayColor,
                y: this.scrollUp ? "-100%" : "100%"
            })
            .set(activeVideo, {background: overlayColor})
            .fromTo(
                imageOverlay,
                0.6,
                { y: this.scrollUp ? "-100%" : "100%" },
                {
                y: "0%",
                ease: "Power4.easeInOut"
                }
            );

            t.set(allImages, { zIndex: 0 }).set(activeImage, { zIndex: 1 });
            t.set(allVideos, {zIndex: 0}).set(activeVideo, {zIndex: 2})

            t
            .to(imageOverlay, 0.6, {
                y: this.scrollUp ? "100%" : "-100%",
                ease: "Power4.easeInOut"
            }).call(() => {
                this.isAnimating = false;
            });
        }
    };

    // Scroll to element used in navigation
    scrollToElement = id => {
        TweenMax.to(window, .5, {
        ease: "Power4.easeInOut",
        scrollTo: id
        });
    };

    // // Render Buttons
    // renderNavigationItem = item => (
    //     <button
    //     key={`button-${item.props.id}`}
    //     className={classnames("section__button", {
    //         isActive: item.props.id === this.state.activeItem
    //     })}
    //     onClick={() => this.scrollToElement(`#${item.props.id}`)}
    //     >
    //     {item.props.title}
    //     </button>
    // );

    // Render Images
    renderImages = item => (
        <div key={`image-${item.props.id}`}>
            <div 
                className={`${style.videoWrapper} section__video`}
                ref={c => this.videos[item.props.id] = c}
            >
                <video autoPlay="autoplay" loop muted className='video'>
                    <source src={item.props.video.webm}  type='video/webm'/>
                    <source src={item.props.video.mp4}  type='video/mp4'/>  
                </video>
            </div>
            <div
                className={`section__image ${style.image}`}
                ref={c => {
                    this.images[item.props.id] = c;
                }}
                background={item.props.background}
                >
                    <img src={item.props.image} alt={this.props.title} />
            </div>
        </div>
    );
    render() {
        const { children } = this.props;
        return (
                <section className={style.section} ref={this.section}>
                    <div className={style.contentWrapper}>
                        <div className={`${style.imageWrapper}`} onMouseEnter={this.handlerIn}>
                            <div className={style.images}>
                                <div 
                                    className={`${style.imageOverlay} section__imageOverlayAnimation`}
                                ></div>
                                    {children.map(this.renderImages)}
                            </div>
                        </div>
                            {children.map(child =>
                                React.cloneElement(child, {
                                key: child.props.id,
                                onChange: () => this.onItemChange(child.props.id),
                                })
                            )}
                    </div>
                </section>
            )
    }
};
