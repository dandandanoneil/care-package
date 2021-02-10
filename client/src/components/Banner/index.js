import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import Search from '../Search'



const Banner = () => {
    return (
        <div className= "mb-5"style={{color:'white'}}>
            <Jumbotron style={{
               backgroundImage: 'linear-gradient(to right, #4c68a5, #021247)', 
             color:'white',
             textAlign: "center",
              margin: 'auto'
              }} >
            <h1 className= "d-flex justify-content-center" style={{color: '#d0c311'}}>Our Marketplace</h1>
<Search />

</Jumbotron>

        </div>
    )
}

export default Banner
