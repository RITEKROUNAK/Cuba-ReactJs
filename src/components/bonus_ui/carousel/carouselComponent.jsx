import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators, CarouselCaption, CarouselControl, UncontrolledCarousel, Media } from 'reactstrap'
const items1 = [
  {
    src: require("../../../assets/images/Carousel/1.jpg"),
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: require("../../../assets/images/Carousel/2.jpg"),
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: require("../../../assets/images/Carousel/3.jpg"),
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const items2 = [
  {
    src: require("../../../assets/images/Carousel/1.jpg"),
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: require("../../../assets/images/Carousel/2.jpg"),
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: require("../../../assets/images/Carousel/3.jpg"),
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const items3 = [
  {
    id: 1,
    src: require("../../../assets/images/Carousel/1.jpg"),
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    src: require("../../../assets/images/Carousel/2.jpg"),
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    src: require("../../../assets/images/Carousel/3.jpg"),
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

export const CarsouselDemoone = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items1.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items1.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
    if (animating) return;
  }
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items1} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {items1.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            key={item.src}
          >
            <Media src={item.src} alt={item.altText} className="img-fluid" />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      })}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}


export const CarsouselDemotwo = (props) => {

  return (
    <UncontrolledCarousel items={items2} />
  );
}

export const CarsouselDemothree = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items3.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items3.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
    if (animating) return;
  }
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items3} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {items3.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            key={item.id}
          >
            <Media src={item.src} alt={item.altText} className="img-fluid" />
            <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      })}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

