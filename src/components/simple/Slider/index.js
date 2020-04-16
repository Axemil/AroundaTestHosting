import React, { useRef } from 'react';

import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import TitleH from "@simple/TitleH";

import Arrow from "@svg/slider-arrow.svg";

import slides from "@/data/mainPageSlider";

import s from "./style.scss";

const SliderSection = () => {
	const slider = useRef(null);

	const next = () => {
		slider.current.slickNext();
	}

	const previous = () => {
		slider.current.slickPrev();
	}

	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 700,
	}

	return (
		<div className={s.slider}>
			<Slider ref={slider} {...settings}>
				{
					slides.map(slide => (
						<div key={slide.id}>
							<div className={s.slide}>
								<div className={s.slideImage}>
									<LazyLoadImage
										alt={slide.name}
										src={slide.src}
										effect="blur"
										threshold={300}
									/>
									<span style={{ backgroundColor: "var(--gray300)", width: "100%", height: "100%" }}></span>
								</div>
								<div className={s.slideContent}>
									<p className={s.reviews}>REVIEWS</p>
									<div className={s.comment}>
										<TitleH>{slide.desc}</TitleH>
									</div>
									<div className={s.author}>
										<TitleH size="h6">{slide.name}</TitleH>
										<p className={s.position}>
											{`${slide.position} at  `}  <a className="stopCursor" href="/"> {slide.company} </a>
										</p>
										<button 
											className={`${s.btn}  ${s.prev}`} 
											onClick={previous}
											tabIndex="-1"
										>
											<Arrow />
										</button>
										<button 
											className={`${s.btn}  ${s.next}`} 
											onClick={next}
											tabIndex="-1"
										>
											<Arrow />
										</button>
									</div>
								</div>
							</div>
						</div>
					))
				}
			</Slider>
		</div>
	)
};

export default SliderSection;