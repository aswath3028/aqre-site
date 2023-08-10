import React from 'react'

export default function description() {
  return (
    <>
    <div class="container">
 
 <div class="left-column">
   
   <img data-image="red" class="active" src="images/red.png" alt="" />
 </div>


 <div class="right-column">

   <div class="product-description">
     <span>Headphones</span>
     <h1>Beats EP</h1>
     <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
   </div>

   <div class="product-configuration">

     

     </div>

     <div class="cable-config">
       <span>Cable configuration</span>

       <div class="cable-choose">
         <button>Straight</button>
         <button>Coiled</button>
         <button>Long-coiled</button>
       </div>

       <a href="#">How to configurate your headphones</a>
     </div>
   </div>

   <div class="product-price">
     <span>148$</span>
     <a href="#" class="cart-btn">Add to cart</a>
   </div>
 </div>
    </>
  )
}
