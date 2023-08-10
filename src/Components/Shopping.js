import React from 'react'

export default function Shopping(props) {
    const {cartItems}=props;
  return (
    <>
    <div>{cartItems.length==0 && <div>Cart is empty</div>}</div>
    </>
  )
}
