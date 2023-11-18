import React from 'react';
import './Products.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const data = useSelector((state) => {
    return state.Products;
  })

  return (
    <div className='products_div'>
      <h2>Products Page Here!</h2>
      <div class="container mt-5">
        <div class="row">
          {
            data.map((item) => {
              return <>
                <div class="col-sm-12 col-lg-4 col-md-6 products_card ">
                  <Link to={'/productdetail/' + item.id} style={{ textDecoration: "none", color: "black" }}>
                    <div class="card mb-5" style={{ width: '20rem' }} >
                      <img class="card-img-top" src={item.image} alt="Card image cap" />
                      <div class="card-body">
                        <p class="card-text">{item.Title}</p>
                        <p>{item.Text}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Products