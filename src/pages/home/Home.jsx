import React from 'react'
import Cotgories from '../../components/catogories/Cotgories'
import Contact from '../../components/contact/Contact'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import Slider from '../../components/slider/Slider'

const Home = () => {
  return (
    <div className='home'>
<Slider/>
<FeaturedProducts type='featured'/>
<Cotgories/>
<FeaturedProducts type='trandings'/>
<Contact/>
    </div>
  )
}

export default Home