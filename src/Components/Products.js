import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

function Products() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoding] = useState(false)
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoding(true)
      const response = await fetch(`https://fakestoreapi.com/products`)
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json())
        setLoding(false)

      }
      return () => {
        componentMounted = false
      }

    }
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />

        </div>
        <div className="col-md-3">
          <Skeleton height={350} />

        </div>
        <div className="col-md-3">
          <Skeleton height={350} />

        </div>
        <div className="col-md-3">
          <Skeleton height={350} />

        </div>

      </>
    )
  }
  const filterProduct = (cat) => {
    const updatelist = data.filter((x) => x.category === cat)
    setFilter(updatelist)

  }


  const ShowProdcts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center">
          <button className='btn btn-outline-dark me-2 ' onClick={() => setFilter(data)}>All</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing  </button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing  </button>
          {/* <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewalary")}>Jewalery </button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("Electronic")}>Electronic  </button> */}
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3"><br /><br /><br />
                <div class="card text-center p-4" key={product.id} >
                  <img src={product.image} class="card-img-top" height={"250px"} alt={product.title} />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.title.substring(0, 12)}</h5>
                    <p class="card-text lead fw-bold">${product.price}</p>
                    <Link to={`/contact/${product.id}`} class="btn btn-outline-dark">Buy Now</Link>
                  </div>
                </div>
              </div>


            </>
          )
        })}
      </>

    )
  }


  return (

    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>Latest products</h1><hr />

          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProdcts />}

        </div>
      </div>

    </div>
  )
}

export default Products
// import React, { useEffect, useCallback, useMemo } from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "../Components/Navbar";
// import ProductComponent from "./ProductComponent";

// const Products = () => {
//   const products = useSelector((state) => state.allProducts.products);
//   const dispatch = useDispatch();
//   const fetchProducts = async () => {
//     const response = await axios
//       .get("https://fakestoreapi.com/products")
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//     dispatch(setProducts(response.data));
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   console.log("Products :", products);
//   return (
//     <div className="ui grid container">
//       <ProductComponent />
//     </div>
//   );
// };

// export default Products;