import React, { useState, useEffect } from 'react';
import './Kids.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Kids = () => {

  const [Kids, SetKids] = useState([]);
  const data = useSelector((state) => {
    return state.Products;
  })

  let CheckData = true;

  useEffect(() => {
    data.forEach(element => {
      if (element.category == "Kids" && CheckData) {
        Kids.push(element)
      }
    });
    CheckData = false;
    SetKids([...Kids])
  }, [])
  return (
    <div className='Kids_div'>
      <h2>Kids Product Here!</h2>

      <div class="container mt-5">
        <div class="row">
          {
            Kids.map((item, ind) => {
              return <>
                <div class="col-sm-12 col-lg-4 col-md-6 products_card ">
                <Link to={'/productdetail/' + item.id} style={{ textDecoration: "none", color: "black" }}>
                  <div class="card mb-5" style={{ width: '20rem' }} >
                    <img class="card-img-top" src={item.image}/>
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

export default Kids