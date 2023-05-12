import "./Slider.scss"
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { useState } from "react";


const data =[
  "/img/gir.png",
  "/img/er.jpg",
  
  "/img/me.jpg",

]

const Slider = ()=>{
const [currentSlider, setCurrenSlider] = useState(0)
const nextSlider = ()=> {
setCurrenSlider(currentSlider === 2? 0  : (prev)=> prev -1 )
}
const prevSlider = ()=> {
setCurrenSlider(currentSlider === 0 ? 2: (prev) => prev +1)
}

return(
  <div className="slider">
    <div className="container" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
      <img src={data[0]} alt="" />
      <img src={data[1]} alt="" />
      <img src={data[2]} alt="" />
      
    </div>
    <div className="icons">
      <div className="icon" onClick={prevSlider}>
        <AiOutlineArrowLeft />
      </div>
      <div className="icon" onClick={nextSlider}>
        <AiOutlineArrowRight />
      </div>
    </div>

  </div>
)
}

export default Slider