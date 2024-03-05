import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dicriment, increment } from '../../service/action/UserAction'

const Header = () => {
    const {cart}=useSelector((state)=>state.userReducer)
  return (
    <Fragment>
    <div className='header'>
    <h1 className='title'>Product List  cart {cart}</h1>
    <div className='cart-arrow'><i class="fa fa-shopping-cart arrow"></i>
    </div>
    </div>
      </Fragment>
  )
}

export default Header