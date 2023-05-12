import"./Card.scss"
import {Link} from 'react-router-dom'
const Card = ({item}) => {
  console.log(item)
  return (

    <Link className="link">
      <div className="card">
<div className="imge">
  <img src={item.urlImage} alt="" />
  {/* <img src={item.urlImage} alt="" /> */}
</div>
<h1>{item.title}</h1>
<div className="prices">
  <h3>${item?.lastprice || item.price + 20}</h3>
  <h3>${item.price}</h3>
</div>
</div>
    </Link>
  
  )
}

export default Card