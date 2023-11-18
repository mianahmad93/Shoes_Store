import React, { useEffect, useState } from 'react';
import './Mens.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Mens = () => {
  const [Mens, SetMens] = useState([]);
  const data = useSelector((state) => {
    return state.Products;
  })

  let CheckData = true;

  useEffect(() => {
    data.forEach(element => {
      if (element.category == "Men" && CheckData) {
        Mens.push(element)
      }
    });
    CheckData = false;
    SetMens([...Mens])
  }, [])


  return (
    <div className='Mens_div'>
      <h2>Mens Product Here!</h2>


      <div class="container mt-5">
        <div class="row">
          {
            Mens.map((item, ind) => {
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

export default Mens