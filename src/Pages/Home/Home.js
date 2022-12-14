import React from 'react';
import Article from './Article';
import Banner from './Banner';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Products></Products>           
            <Reviews></Reviews>
            <Article></Article>
        </div>
    );
};

export default Home;