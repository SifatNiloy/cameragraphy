import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-24 w-24"></div>
            </div>
        </div>
    );
};

export default Loading;