import React, { useState, useEffect } from "react";
import SliderForm from "../../components/slider/SliderForm";
import SliderMain from "../../components/slider/SliderMain";
import event1 from "../../lib/styles/img/event1.jpg";
import event2 from "../../lib/styles/img/event12.jpg";
import event3 from "../../lib/styles/img/event13.jpg";
import event4 from "../../lib/styles/img/event14.jpg";
const SliderContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testImageArray, setTestImageArray] = useState([]);
  const handlePreviousButton = () => {
    const previous = currentIndex - 1;
    setCurrentIndex(previous < 0 ? testImageArray.length - 1 : previous);
  };

  const handleNextButton = () => {
    const next = currentIndex + 1;
    setCurrentIndex(next === testImageArray.length ? 0 : next);
  };

  const handleSlideClick = index => {
    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
  };

  const marginLeft = () => {
    if (currentIndex === 0) {
      return '-40px'
    } else if (currentIndex === 1) {
      return '-30px'
    } else if (currentIndex === 2) {
      return '-20px'
    } else {
      return '-10px'
    }
  }

  const wrapperTransform = {
    transform: `translateX(-${currentIndex * (100 / testImageArray.length)}%)`,
    display: "flex",
    transition: "1s",
    width: "calc(100% * 4)",
    "margin-left": `${marginLeft()}`
    // 'overflow':'hidden',
    // 'position':'relative'
  };

  const TemplateOverflow = {
    display: "inline-block",
    "align-items": "center",
    width: "980px",
    height: "500px",
    overflow: "hidden",
    "justify-content": "center"
  };
  /**
   * test Iamge
   */

  useEffect(() => {
    setTestImageArray(state => [
      ...state,
      {
        index: 0,
        headline: "New Fashion Apparel",
        button: "Shop now",
        src: event1
      },
      {
        index: 1,
        headline: "In The Wilderness",
        button: "Book travel",
        src: event2
      },
      {
        index: 2,
        headline: "For Your Current Mood",
        button: "Listen",
        src: event3
      },
      {
        index: 3,
        headline: "Focus On The Writing",
        button: "Get Focused",
        src: event4
      }
    ]);
  }, []);

  return (
    <>
      <div className="slider" style={TemplateOverflow}>
        <ul className="slider__wrapper" style={wrapperTransform}>
          {testImageArray.map(slide => {
            return (
              <SliderMain
                key={slide.index}
                slide={slide}
                current={currentIndex}
                handleSlideClick={handleSlideClick}
              />
            );
          })}
        </ul>
      </div>
      <div className="slider__controller">
        <SliderForm
          type="previous"
          handlePreviousButton={handlePreviousButton}
          handleNextButton={handleNextButton}
        />

        {/* <SliderForm
          type="previous"
          handleClick={handlePreviousButton}
        />
        <SliderForm
          type="next"
          handleClick={handleNextButton}
        /> */}
      </div>
    </>
  );
};

export default SliderContainer;
