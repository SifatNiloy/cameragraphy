import React from 'react';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Products></Products>
        </div>
    );
};

export default Home;