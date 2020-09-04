import Link from 'next/link';
import style from './style.scss';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import { LazyLoadImage } from "react-lazy-load-image-component"

const services = [
    {
        id: '01',
        title: 'Strategy',
        image: ['assets/images/chess.png', 'assets/images/chess.webp'],
        desc: 'Defining the initial point of the idea to work out the development plan. Working on the initial idea, testing the hypothesis, researching the target audience. Measuring the value of the product of the initial stages.'
    },
    {
        id: '02',
        title: 'UX Design',
        image: ['assets/images/lego.png', 'assets/images/lego.webp'],
        desc: 'Creating the system of the efficient interaction between the customer and the product. Aiming at providing the conditions for the customer’s intuitive navigation inside the digital product.'
    },
    {
        id: '03',
        title: 'UI Design',
        image: ['assets/images/icecream.png', 'assets/images/icecream.webp'],
        desc: 'Process of developing of the user interface. Working on the content, setting the elements and placing the accents. Creating the visual atmosphere and the mood to interact with the product.'
    },
    {
        id: '04',
        title: 'Development',
        image: ['assets/images/dna.png', 'assets/images/dna.webp'],
        desc: 'Developing aimed at making the user interface design look lively. Implementing the modern technology into the digital product corresponding to the main product goals and the market demand.'
    },
    {
        id: '05',
        title: 'Branding',
        image: ['assets/images/gasbottle.png', 'assets/images/gasbottle.webp'],
        desc: 'A system of actions aimed at identifying a digital product in a digital environment. Creating a variety of graphic media based on the mental shell of the product.'
    },
]

class HowSection extends PureComponent {

    state =  {
        currentItem: ''
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize)
        window.addEventListener('load', this.handleResize)
    }

    componentUnMount() {
        window.removeEventListener('resize', this.handleResize)
        window.removeEventListener('load', this.handleResize)
    }
    handleItem = (e) => {
        const id = e.target.getAttribute('id');

        this.setState({
            currentItem: id
        })
    }

    handleClear = (e) => {
        const width = window.innerWidth <= 1080;
        this.setState({
            currentItem: width ?  '01' : ''
        })
    }

    handleResize = () => {
        if(window.innerWidth <= 1080){
            this.setState({
                currentItem: '01'
            })
        }
    }
    
    render() {
        const {currentItem } = this.state;
    return (
        <section className={style.section}>
                    <div className={style.content}>
                        <div className={style.titleWrapper}>
                            <TitleSecondary text={'How?'}/>
                        </div>
                        <div className={style.descWrapper}>
                            <Description 
                                text='We use our capabilities to make successful digital products using our own user-oriented methods that create the&nbsp;results'
                                light={true}
                                />
                        </div>
                    </div>
                    <div className={style.image} ref={(el) => this.image = el }>
                        {services.map((el,i) => {
                                return (
                                    <picture className={style.picture} key={el.id} >
                                        <source srcSet={el.image[1]} type="image/webp"/>
                                        <LazyLoadImage 
                                            className={`${currentItem === el.id ? style.active : ''}`}
                                            src={el.image[0]}  
                                            alt={el.title}/>
                                    </picture>
                                )
                            })}
                        
                    </div>
                    <div className={style.services}>
                        {services.map((el,i) => {
                            return (
                                <div className={style.item} key={el.id}  tabIndex='-1'>
                                    <div className={style.title} 
                                        id={el.id} 
                                        onMouseEnter={this.handleItem}
                                        onMouseLeave={this.handleClear}
                                    >{el.title}</div>
                                    <div className={style.desc}>
                                        {el.desc}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={style.more}>
                        <Link href={'/services/'}>
                            <a className={`${style.link} stopCursor`}>
                                More about expertise
                            </a>
                        </Link>
                    </div>
        </section>
    )
   }
};
export default HowSection;