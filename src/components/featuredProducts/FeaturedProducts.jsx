import { useEffect, useState } from "react"
import Card from "../card/Card"
import "./FeaturedProducts.scss"
import axios from 'axios'
const data =  [
  
     
       {
        "id": "1",
        "name": "Small Removable Sticker",
        "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        "features": "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
        "price": "2.99",
        "lastprice" :"6.4",
        "keywords": "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
        "urlImage": "/Products/men1.jpg",
        "category": "accessories",
        "subcategory": "accessories"
      },
     
       {
        "id": "2",
        "name": "Sticker Sheet",
        "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        "features": "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
        "price": "2.99",
        "lastprice" :"4.4",
        "keywords": "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
        "urlImage": "/Products/men2.jpg",
        // "urlImage": "/Porudcts/men1.jpg",
        "category": "accessories",
        "subcategory": "accessories"
      },
     
       {
        "id": "3",
        "name": "T-shirt beatfull",
        "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        "features": "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
        "price": "2.99",
        "lastprice" :"10.4",
        "keywords": "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
        "urlImage": "/Products/men3.jpg",
        "category": "accessories",
        "subcategory": "accessories"
      },
     
       {
        "id": "4",
        "name": "Jacket For Wood",
        "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        "features": "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
        "price": "2.99",
        "lastprice" :"7.4",
        "keywords": "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
        "urlImage": "/Products/men9.jpg",
        "category": "accessories",
        "subcategory": "accessories"
      },
]

const FeaturedProducts = ({type}) => {

  
  const [product ,setproduct] = useState([])
useEffect(()=>{
  const fetchProdocut = async ()=>{
    try{
const date = await axios.get(process.env.REACT_APP_API_URL + "/products", {
  headers: {
 Authorization: "brearer" + process.env.REACT_APP_API_TOKEN,
  }
  
});
console.log(date)

    }catch (error){
      console.log(error)
    }
  }
  fetchProdocut();
},[])

  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} Producs</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et 
                explicabo soluta eveniet, consequatur fuga commodi facere, quam non
                 incidunt ab a itaque totam, beatae sunt rem dolorum cupiditate at sequi! Facere esse dolorum eos,
                  quasi deleniti quaerat assumenda consequuntur!
            </p>
        </div>
        <div className="bottom">
            {
                data.map((item)=>(
                    <Card item={item} key={item.id} />
                ))
            }
        </div>
    </div>
  )
}

export default FeaturedProducts