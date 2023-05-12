import React, { useState } from 'react'
import { AiOutlineSearch,AiOutlineHeart,AiOutlineShopping} from 'react-icons/ai'
import { MdKeyboardArrowDown,MdPersonOutline} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import './Navbar.scss'
const Navbar = () => {
const [oepencart,setopencart] = useState(false)

  return (
    <div className='navbar'>
        <div className="wrapper">
            {/* <div className="left">
<div className="item">
    <img src="/img/en.png" alt="" />
    <MdKeyboardArrowDown/>
</div>
<div className="item">
    <span>USD</span>
    <MdKeyboardArrowDown/>
</div>
<div className="item">
    <Link className='link' to="/prodcuts/1">MAN</Link>
    
</div>
<div className="item">
    <Link className='link' to="/prodcuts/2">WOMEN</Link>

</div>
<div className="itme">
    <Link className='link' to="/proudcts/3">CHIDLREN</Link>
</div>
            </div> */}
            <div className="center">
                <Link className='link' to="/"><span>Hubaal</span> MARKET </Link>
            </div>
            <div className="right">
                <div className="item">
                    <Link className='link' to="/">Home</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">About</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products">Products</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Store</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Conteact Us</Link>
                </div>
                <div className="icons">
                    <AiOutlineSearch/>
                    <AiOutlineHeart/>
                    <MdPersonOutline/>
                    <div className="carticon" onClick={()=>setopencart(!oepencart)}>
                        <AiOutlineShopping/>
                        <span>0</span>
                    </div>
                </div>
             
            </div>
          
        </div>
        {
                    oepencart && <div>
                        <Cart/>
                    </div>
                }
    </div>
  )
}

export default Navbar