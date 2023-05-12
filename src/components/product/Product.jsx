import React, { useState } from 'react'
import './Product.scss'
import {BsCartCheck} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {MdOutlineCompare} from 'react-icons/md'

const images = [
    '/Products/men7.jpg',
    '/Products/men8.jpg'
]
function Product() {
const  [quanity,setquantity] = useState(1)
const [selectImge,setImage] = useState(0);
console.log(selectImge)  
  return (
    <div className='product'>
        <div className="left">

        <div className='container'>
        <div className="images">
            <img src={images[0]} alt="" onClick={()=> setImage(0)}/>
            <img src={images[1]} alt="" onClick={()=>setImage(1)} />
        </div>
      
            <div className="mainImage">
            <img src={images[selectImge]} alt="" />
        </div>
     

            </div>
     
        </div>
        
        <div className="right">
            <h2>Long Sleve Graphic</h2>
            <span className='price'>$110</span>
            
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis itaque aspernatur nisi amet dolorum, asperiores, fugiat suscipit qui explicabo reiciendis unde aliquid accusantium voluptatem quas nobis voluptates dolorem, iusto quos.</p>
        <div className="quanitiy">
            <button onClick={()=> setquantity((curent)=> curent === 1 ? 1: curent -1)}>-</button>
    {quanity}
            <button onClick={()=> setquantity((prev)=> prev + 1)
            }>+</button>
        </div>
        <div className="add">
            
<button>
    <BsCartCheck className='icon'/>
    ADD TO CART
</button>
        </div>
        <div className="link">
            <div className="item">
                <AiFillHeart className='icon'/>
                <span>ADD TO WISH LIST</span>
            </div>
            <div className="item">
                <MdOutlineCompare className='icon'/>
                <span>ADD TO COMPIRE</span>
            </div>
        </div>
        <div className="info">
            <span>Vounder</span>
            <span>Product Type T-shirt </span>
            <span>Product Type awsome top </span>
        </div>
        <hr />
        <div className="info">
            <span>Descriptions</span>
            <span className='s'>ADDINOAL INMONCTIONAL</span>
            <span>FAQ</span>
        </div>
            </div>


    </div>
  )
}

export default Product