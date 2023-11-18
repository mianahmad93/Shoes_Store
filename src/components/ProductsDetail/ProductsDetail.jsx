import React, { useState } from 'react';
import './ProductsDetail.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Store from '../../Store/Store';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../assets/ndure_logo.avif';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai'

const ProductsDetail = () => {

    let item = [];

    let { id } = useParams();

    const data = useSelector((state) => {
        return state.Products
    })

    data.forEach(element => {
        if (element.id == id) {
            item = element
        }
    });


    let { category, image, Title, Text, Price } = item;



    let [num, Setnum] = useState(1);
    function Decrement() {
        if (num > 0) {
            Setnum(num - 1)
        } else {
            Setnum(0)
        }
    }
    function Increment() {
        Setnum(num + 1)
    }


    const AddToCart = () => {
        let Send_Data = { ...item, Quantity: num }

        Store.dispatch({
            type: "ADD_CART",
            payload: Send_Data
        })
        toast.success("Your Cart is Added")
    }


    return (
        <div className='ProductsDetail_page'>
            <div className="category_name">
                <h3 className='text-start'>Category: <span>{category}</span> </h3> <hr style={{ border: "1px solid gray" }} />
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-5">
                            <div class="card" style={{ width: "26rem", border: "none" }}>
                                <img src={image} />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-8 col-lg-7">
                            <div className="mybox">
                                <img src={logo} style={{ height: "150px", width: "150px" }} />
                                <h4>{Text}</h4>
                                <p style={{ fontWeight: "600", fontSize: "18px" }}>RS. {Price}</p><hr />
                            </div>

                            <div className="button_div ">
                                <h5 style={{fontFamily:"'Roboto Slab', serif",fontWeight:"600"}}>Quantity</h5>
                                <button onClick={Decrement}><AiOutlineMinus/></button>
                                <input type="text" value={num} />
                                <button onClick={Increment}><AiOutlinePlus/></button>
                            </div>
                            <div className="AddCart_div">
                                <button onClick={AddToCart}>Add To Card</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Toaster />
        </div>
    )
}

export default ProductsDetail