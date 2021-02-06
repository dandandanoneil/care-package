import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Button from 'react-bootstrap/Button'
import "./style.css";

const Buttons = () => {
    return (
        <div className= 'mt-3 d-flex justify-content-center home-button'>
            
  <div className="mb-2 mx-3"> 
    <Button variant="custom" size="lg" style={{ color: "white"
        //  backgroundImage: `url("https://ps.w.org/woocommerce-gift-wrapper/assets/icon-256x256.png?rev=1301673")`,backgroundRepeat: 'no-repeat',width:'250px',height:'190px',color:'white'
      }}>
      Give
    </Button>{' '}
    </div>

    <div className="mb-2 mx-3">
    <Button variant="custom" size="lg" style={{ color: "white"
        //  backgroundImage: `url("https://ps.w.org/woocommerce-gift-wrapper/assets/icon-256x256.png?rev=1301673")`,backgroundRepeat: 'no-repeat',width:'250px',height:'190px',color:'white'
      }}>
      Receive
    </Button>
  </div>


        </div>
    )
}

export default Buttons
