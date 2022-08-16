import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { useRouter } from 'next/router'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [searchText, setSearchText] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(searchText === '') return
    router.push(`/search/${searchText}`)
  }

  return (
    <div className="navbar-container">
       <Link href="/">
      <p className="logo">
       DG Store
      </p>
      </Link>

      <form className='search' onSubmit={handleSubmit}>
        {/* <label>Search</label> */}
        <input type="text" placeholder='Search' onChange={e => setSearchText(e.target.value)} />
        <button type='submit' className=''>Search</button>
      </form>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

     <Cart showCart={showCart}/>
    </div>
  )
}

export default Navbar