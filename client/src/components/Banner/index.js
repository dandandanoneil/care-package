import React from 'react';

function Banner(props) {
    return (
        <div className="mb-3 p-4"
            style={{
                backgroundImage: 'linear-gradient(to right, #4c68a5, #021247)',
                color: 'white',
                textAlign: "center"
            }}
        >
            <h1 className="d-flex justify-content-center" style={{ color: '#d0c311', textShadow: "2px 2px 4px #000000", fontSize: "70px" }}>Free Marketplace</h1>
            
            {props.children}
        </div>
    )
}

export default Banner