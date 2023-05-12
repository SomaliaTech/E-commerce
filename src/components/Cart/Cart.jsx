import "./Cart.scss"
import {AiFillDelete} from 'react-icons/ai'
const Cart = () => {
  const data =[
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
      "urlImage": "/Products/men2.jpg",
      "category": "accessories",
      "subcategory": "accessories"
    },
  ]
  return (
    <div className="cart">
      <h1>Products for Features </h1>
{
  data?.map((item)=> (
    <div className="item" key={item.id}>
<img src={item.urlImage} alt="" />
<div className="detail">
<h2>{item.name}</h2>
<p>{item.description.substring(0, 50)}</p>
</div>
<AiFillDelete className="delete"/>
</div>
      ))
    }

    <div className="total">
    
    <h2>SUBTOTAL</h2>
  <h2>$111</h2>
</div>

   <div className="count">
   <button>PROCCED TO CHECKOUT</button>
<span>Reset</span>
    </div> 
    </div>
   
    
  )
}

export default Cart