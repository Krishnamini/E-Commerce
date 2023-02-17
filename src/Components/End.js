import React from 'react'

function Footer() {
  return (
    <div>
        <div className='back-color'>
            <div className="container">
                <div className='text-center ' style={{width:"60%",margin:"0 auto",paddingTop:"100px"}}>
                    <h1 style={{color:'white'}}>
                    LA COLLECTION

                    </h1><hr style={{color:"white"}} />
                    <div className="row aa" >
                        <div className="col-md-2">
                        <a href=""><p>Best Sellers</p></a>

                        </div>
                        <div className="col-md-2">
                       <a href=""><p>Gift Ideas</p></a> 
                            </div>
                            <div className="col-md-2">
                           <a href=""><p>New Releases</p></a> 
                           
                            
                            </div>
                            <div className="col-md-2">
                           <a href=""><p>Today's Deals</p></a> 
                            
                            </div>
                            <div className="col-md-4">
                           <a href=""><p>Customer Service</p></a> 
                            
                            </div>
                 
                       
                       
                       
                        
                            
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
