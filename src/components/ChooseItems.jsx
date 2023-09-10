import React from 'react';

const ChooseItems = ({ item }) => {
    return (
        <div className='col-12 col-lg-6'>
            <div className='item'>
                <img src={item.img} alt="" className='img-fluid p-4 item-img' />
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
            </div>
        </div>
    );
}

export default ChooseItems;
