import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Lists from '../../components/lists/Lists'
import './Products.scss'

function Products() {
  const cartid = parseInt(useParams().id)
 const [maxprice, setmaxprice] = useState(1000)
 const [sort,setsort] = useState(null)
  return (
    <div className='product'>
    <div className="left">
     <div className="filterItems">
      <h2>Products Categories</h2>
      <div className="inputitem">
        <input type="checkbox" value={1} id="1"/>
        <label htmlFor="1">Shoes</label>
      </div>
      <div className="inputitem">
        <input type="checkbox" value={2} id="2"/>
        <label htmlFor="2">Shirt</label>
      </div>
      </div> 
     <div className="filterItems">
      <h2>Filter by price</h2>
      <div className="inputitem">
        <span>0</span>
        <input type="range" min={0} max={1000} id='asc' onChange={(e)=> setmaxprice(e.target.value)}/>
        <span id='asc'>{maxprice}</span>
      </div>
      </div> 
     <div className="filterItems">
      <h2>Sort by</h2>
      <div className="inputitem">
        <input type="radio" id='1' name='asc' onChange={(e)=>setsort(e.target.value("asc"))}/>
        <label htmlFor="1" name="asc">Price (lowest First)</label>
      </div>
      <div className="inputitem">
        <input type="radio" id='1' name='asc' onChange={(e)=> setsort(e.target.value('desce'))}/>
        <label htmlFor="1" name="asc">Price (Highest First)</label>
      </div>
      </div> 
    </div>
    <div className="right">
      <img className='imgcard' src="/img/me.jpg" alt="" />
      <Lists cartid={cartid} maxprice={maxprice} sort={sort} />
    </div>
    </div>
  )
}

export default Products