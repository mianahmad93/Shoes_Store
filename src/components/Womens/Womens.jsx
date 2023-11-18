import React, { useState, useEffect } from 'react';
import './Womens.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Womens = () => {
  const [Womens, SetWomens] = useState([]);
  const data = useSelector((state) => {
    return state.Products;
  })

  let CheckData = true;

  useEffect(() => {
    data.forEach(element => {
      if (element.category == "Women" && CheckData) {
        Womens.push(element)
      }
    });
    CheckData = false;
    SetWomens([...Womens])
  }, [])

  return (
    <div className='Womens_div'>
      <h2>Womens Product Here!</h2>
      <div class="container mt-5">
        <div class="row">
          {
            Womens.map((item, ind) => {
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

export default Womens