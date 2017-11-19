import React from 'react';

const Home = () => {

    const handleClick = () => {
        alert('Handle click');
    };

    return (
        <div>
            <button onClick={handleClick}>Button</button>
        </div>
    )

};



export default Home;