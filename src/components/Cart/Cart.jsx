import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import CartImage from '../assets/cart1.png';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
const Cart = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.Carts;
    })

    if (data.length == 0) {
        return <div className='No_item'>
            <Link to={'/'} className='link'>
                <img src={CartImage} style={{ height: "500px", maxWidth: "100%" }} />
            </Link>
        </div>

    }
    let total = 0;

    data.forEach(element => {
        let bill = element.Price * element.Quantity;
        total = total + bill;
        console.log(total);
    });

    const DeleteItem = (id) => {
        dispatch({
            type: "DELETE_CART",
            payload: id
        })
        toast.success("Your Cart is Deleted Successfully!")
    }

    return <>
        <div className='Cart_div'>
            <h4 className='mb-4 mt-4'>Shopping Cart</h4>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-7 col-l-8">
                        <table class="table ">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => {
                                        return <>
                                            <tr>
                                                <th scope="row">
                                                    <img src={item.image} style={{ height: "100px", width: "100px" }} />
                                                </th>
                                                <td>{item.Title} <br />{item.Text} </td>
                                                <td>{item.Price * item.Quantity}</td>
                                                <td>{item.Quantity}</td>
                                                <td><MdDelete style={{ fontSize: "20px", cursor: "pointer" }} onClick={() => DeleteItem(item.id)} /></td>
                                            </tr>
                                        </>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                    <div class="col-sm-12 col-md-5 col-l-4">
                        <div class="card" style={{backgroundColor:"#F8F9FA"}}>

                            <div class="card-body">
                                <h2>Total</h2>

                                <div className="sub_total d-flex mt-4">
                                    <h5>SubTotal:</h5>
                                    <h6 className='total'>{total}</h6>
                                </div><hr />

                                <div className="sub_total d-flex mt-4">
                                    <h5 style={{ fontWeight: "bold" }}>Total:</h5>
                                    <h6 className='total'>{total}</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Toaster />
        </div>
    </>
}

export default Cart