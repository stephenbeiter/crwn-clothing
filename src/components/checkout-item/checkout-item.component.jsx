import React from 'react';

const CheckoutItem = ({ item }) => {
  const { name, quanity, price, imageUrl } = item;

  return (
    <div className='checkout-list'>
      <img src={imageUrl} alt='product' />
      <div className='checkout-name'>{name}</div>
      <div className='checkout-quantity'>{quanity}</div>
      <div className='checkout-price'>{price}</div>
      <div className='checkout-remove'>X</div>
    </div>
  )
};

export default CheckoutItem;