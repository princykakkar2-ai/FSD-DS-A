import React from 'react'
import Card from './Card.jsx'
import '../App.css'

const Main = () => {
  return (
    <div className='menu-container'>
        <Card image="https://b.zmtcdn.com/data/pictures/3/21330623/368b9c4d4de98193c5e11e2d3f44c506_o2_featured_v2.jpg" title="burger" price="$5.99" />
        <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9x9CHT37_2KYie07XVbb-xAKqUkXsBnl_HtMUHhL7Q&s=10" title="pizza" price="$7.99" />
        <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDduFw54H5IFfFDvng4Wws96yenR9yx_DZ0PFSul8mKg&s" title="pasta" price="$6.99" />
    </div>
  )
}

export default Main