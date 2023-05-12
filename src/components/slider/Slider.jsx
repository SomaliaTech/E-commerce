import "./Slider.scss"
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { useState } from "react";


const data =[
  "/img/gir.png",
  "/img/er.jpg",
  
  "/img/me.jpg",

]

const Slider = ()=>{

const [currenSlider, setCurrentSlider] = useState(0)  

const sliderPrevev =()=>{
setCurrentSlider(currenSlider === 0 ? 2 : (prev) => prev +1 )
}
const nextSlider = ()=>{
setCurrentSlider(currenSlider === 2 ? 0 : (prev) => prev - 1)
}
return(
  <div className="slider">
    <div className="container" style={{transform:`translateX(-${currenSlider * 100}vw)`}}>
      <img src={data[0]} alt="" />
      <img src={data[1]} alt="" />
      <img src={data[2]} alt="" />
      
    </div>
    <div className="icons">
      <div className="icon">
        <AiOutlineArrowLeft onClick={sliderPrevev}/>
      </div>
      <div className="icon">
        <AiOutlineArrowRight onClick={nextSlider}/>
      </div>
    </div>

  </div>
)
}

export default Slider