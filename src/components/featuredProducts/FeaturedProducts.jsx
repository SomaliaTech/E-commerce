import React from "react"
import Card from "../card/Card"
import "./FeaturedProducts.scss"
const Data =  [
  
     
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
]



const FeaturedProducts = ({type}) => {

  

  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} Producs</h1>
            <p style={{fontSize: 22, color: "gray", fontWeight: '500'}}>
            Ku soo dhawada badeco cusub iyo qiimo ku raali galinaya ka so horjeedka Mogadishu
            </p>
        </div>
        <div className="bottom">
            {
                Data.map((item)=>(
                    <Card item={item} key={item.id} />
                ))
            }
        </div>
    </div>
  )
}

export default FeaturedProducts