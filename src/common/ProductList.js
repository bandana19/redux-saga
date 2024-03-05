import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../service/action/UserAction'

const ProductList = ({ arr }) => {
    const dispatch = useDispatch()
    // const { cart } = useSelector((state) => state.userReducer)
    return (
        <Fragment>
            <div className='row  m-4'>
                {
                    arr.map((item) => (
                        <div className='col-4 border box'>
                            <div className='Image'><img className='thumbnail' src={item.thumbnail} /></div>
                            <div className='row'>
                                <div className='col-6 price'>ID : {item.id}</div>
                                <div className='col-6 price'>Title : {item.title}</div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <h5 className='name'>Product Name : {item.category}</h5>
                                </div>
                                <div className='col-6'>
                                    <h5 className='name'>Brand Name : {item.brand}</h5>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 price'>Price : {item.price}</div>
                                <div className='col-6  price'>Rating : {item.rating}</div>
                            </div>
                            <hr />
                            <div className='row '>
                                <p className='des-list text-center'>description</p>
                                <p className='text-center list'>{item.description}</p>
                            </div>
                            <div className='col-12 text-center'><button className='btn btn-primary'
                                // onClick={() => dispatch(addCart(item))}
                                >
                                {/* {cart?.some((itm) => itm.id == item.id) ? "Remove to cart" : "Add to cart"} */}
                                </button></div>
                        </div>
                    ))
                }
            </div>
        </Fragment>

    )
}

export default ProductList