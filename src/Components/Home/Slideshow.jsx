import {useEffect, useRef, useState} from "react";
import '../../Pictures/Slideshow1.jpeg'
import '../../Pictures/Slideshow2.jpeg'
import '../../Pictures/Slideshow3.jpeg'
const Slideshow = (props) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const slideRefs = useRef([]);

    const backgroundRef = useRef(null);

    const changeSlide = (n) => {
        let newIndex = slideIndex + n;
        if (newIndex > props.arr.length) newIndex = 1;
        if (newIndex < 1) newIndex = props.arr.length;
        setSlideIndex(newIndex);
    };

    useEffect(() => {
        // Make the active slide block and non actives none
        slideRefs.current.forEach((slide, i) => {
            if (slide) slide.style.display = i + 1 === slideIndex ? "block" : "none";
        });

        // Centers the image
        const currentSlide = slideRefs.current[slideIndex - 1];
        backgroundRef.current.src = currentSlide.src;
        if(currentSlide.width !== 0){
            const leftAlign = (window.outerWidth - currentSlide.width) / 2 - 30;
            currentSlide.style.left = `${leftAlign}px`;
        }
        // In case of refresh
        currentSlide.onload = () => {
            const leftAlign = (window.outerWidth - currentSlide.width) / 2 - 30;
            currentSlide.style.left = `${leftAlign}px`;
        }
    }, [slideIndex]);
    return (
        <>
            <div id="slideshow">
                <img id="background" ref={backgroundRef} alt="Background"/>
                {props.arr.map((item, index) => (
                    <img className="slide fade" alt="MSOE Baja Photos" src={item} key={index} ref={(el) => (slideRefs.current[index] = el)}/>
                    ))}
                <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
                <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
            </div>
        </>
    );
}
export default Slideshow;