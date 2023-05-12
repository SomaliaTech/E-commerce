import"./Card.scss"
import {Link} from 'react-router-dom'
const Card = ({item}) => {
  return (

    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
<div className="imge">
  <img src={item.urlImage} alt="" />
  {/* <img src={item.urlImage} alt="" /> */}
</div>
<h1>{item.name}</h1>
<div className="prices">
  <h3>${item.lastprice}</h3>
  <h3>${item.price}</h3>
</div>
</div>
    </Link>
  
  )
}

export default Card