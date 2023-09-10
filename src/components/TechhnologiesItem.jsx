import React from 'react';

const TechhnologiesItem = ({ item }) => {
    return (
        <div className='col-3 col-lg-3 pt-4'>
            <div className='flex-center technologies-sectin__item'>
                <img src={item.img} alt={item.span} title={item.span} className='img-fluid p-3' />
                <span>{item.span}</span>
            </div>
        </div>
    );
}

export default TechhnologiesItem;
