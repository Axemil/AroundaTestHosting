import React, {useRef, useEffect} from 'react';
import s from './style.scss';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

const pictures = [
  "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
  "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80"
    // {
    //   source:
    //     "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    //   content: {
    //     date: "04.29.2020",
    //     desc: "Behind the leaves. "
    //   }
    // },
    // {
    //   source:
    //     "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    //   content: {
    //     date: "04.28.2020",
    //     desc: "Minimal eucalyptus leaves"
    //   }
    // },
    // {
    //   source:
    //     "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
    //   content: {
    //     date: "04.28.2020",
    //     desc: "Rubber Plant"
    //   }
    // },
    // {
    //   source:
    //     "https://images.unsplash.com/photo-1506543277633-99deabfcd722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=623&q=80",
    //   content: {
    //     date: "04.27.2020",
    //     desc: "Person holding leaf plant"
    //   }
    // },
    // {
    //   source:
    //     "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    //   content: {
    //     date: "04.23.2020",
    //     desc: "Green leafed plant photography"
    //   }
    // },
    // {
    //   source:
    //     "https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    //   content: {
    //     date: "04.21.2020",
    //     desc: "Gree leafed plant in focus photography"
    //   }
    // },
    // {
    //   source:
    //     "https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    //   content: {
    //     date: "04.23.2020",
    //     desc: "I took the shot at home with Sigma 105 mm"
    //   }
    // },
    // {
    //   source:
    //     "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    //   content: {
    //     date: "04.21.2020",
    //     desc: "Cheese plant leaf in clear glass vase"
    //   }
    // }
  ];

  const Slide = ({ imageSource }) => {
    console.log(imageSource)
    return (
      <div className={s.slide}>
        <div className={s.preview}>
          <img src={imageSource} draggable="false" alt={imageSource} />
        </div>
        {/* <div className={s.infos}>
          <h3>{content.date}</h3>
          <h2>{content.desc}</h2>
        </div> */}
      </div>
    );
  };
  

const Slider = ({ pictures }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
      console.log(sliderRef.current.clientWidth, sliderRef.current.innerWidth);
      Draggable.create(sliderRef.current, {
        type: "x"
        /*bounds: {
          minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
          maxX: 0
        }*/
      });
    }, []);

    return(
        <div id="slider" className={s.slider} ref={sliderRef}>
        {pictures.map((item, index) => {
          return (
            <Slide key={index} imageSource={item} />
          );
        })}
      </div>
    )
}

export default Slider;