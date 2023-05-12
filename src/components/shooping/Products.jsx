import"./products.scss"
import {Link} from 'react-router-dom'
import {data} from './data'
export const Products =()=> {
    return(
        <div className="button">
            {
                data.map((item)=> (
                    <ProductsShop item={item}/>
                ))
            }
        </div>
    )
}

export const ProductsShop = ({item}) => {
  return (

    <Link className="link" to={`/product/${item.id}`}>
      <div className="products">
<div className="imge">
  <img src={item.urlImage}/>
  {/* <img src={item.urlImage} alt="" /> */}
</div>
<h1>{item.title}</h1>
<div className="prices">
  <h3>${item?.oldprice || item.price + 20}</h3>
  <h3>${item.price}</h3>
</div>
</div>
    </Link>
  
  )
}
