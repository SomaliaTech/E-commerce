import Card from "../card/Card"
import "./Lists.scss"
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
function Lists() {
  return (
    <div className="lists">
        {
            data.map((item)=> (
                <Card item={item} key={item.id} />
            ))
        }
    </div>
  )
}

export default Lists