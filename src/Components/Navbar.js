import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function End() {
    const state = useSelector((state) => state.handleCard)
    return (
        <div className='fixed'>
            <nav class="navbar navbar-expand-lg  py-3 shadow-sm stck ">
                <div class="container text-color">
                    <a class="navbar-brand fw-bold fs-4" href="#">LA COLLECTION</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-3 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="products" class="nav-link active">Products</Link>


                            </li>
                           
                           
                          
                            {/* <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        <div className="buttons">
                            <a href="" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i> Login </a>
                            <a href="" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Rigister  </a>
                            <a href="" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})</a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default End
