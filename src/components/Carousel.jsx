import { useState } from "react";
import './Carousel.css'

const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    
  };

export default function Carousel({ slides }){
  const [currentIndex, setCurrentIndex] = useState(slides.length-1);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
 
  return (
    <div className="slider-container">
      <div>
        
        <div onClick={goToPrevious} className='left-arrow-carousel'>
          ❰
        </div>
        <div onClick={goToNext} className='right-arrow-carousel'>
          ❱
        </div>
      </div>
      
      <div>
        <img src={slides[currentIndex]} alt='' className="img-carousel"></img>
      </div>
      
      <div className="dots-container-carousel">
        {slides.map((slides, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};
