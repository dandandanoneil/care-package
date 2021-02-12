import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Search from '../Search';

const Banner = (props) => {
    return (
        <div className="mb-5" style={{ color: 'white' }}>
            <Jumbotron style={{
                backgroundImage: 'linear-gradient(to right, #4c68a5, #021247)',
                color: 'white',
                textAlign: "center",
                margin: 'auto'
            }} >
                <h1 className="d-flex justify-content-center" style={{ color: '#d0c311', textShadow: "2px 2px 4px #000000" }}>Our Marketplace</h1>
                <Search change={props.change} searchTerm={props.searchTerm} myFilter={props.myFilter} />
            </Jumbotron>
        </div>
    )
}

export default Banner