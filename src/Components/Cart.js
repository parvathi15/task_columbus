import React from 'react';
import {ProductConsumer} from './Context';


export default function Cart(props) {
return (
<ProductConsumer>
{value=>{
    const {cart,total}=value;
    return(
      <div className="cart-page container">
      {cart.length===0 ?
     <div className='empty'>
     </div>:
<div className="container">
<div className="row">
 <div class="col-md-9 p-5" style = {{background:"white",padding:"29px 15px"}}> 
 {cart.map(product=>{
    return(
      <div class="row">
      <div class="col-md-2 col-md-offset-1 mt-2 mb-2">
      <div className="img-cart">
           <img src={product.img}  alt="img"/>
       </div>
      </div>
      <div class="col-md-2  mt-2 mb-2"><b>{product.title}</b> </div>
      <div class="col-md-2  mt-2 mb-2">
       <button onClick={() =>
       value.increaseItem(product.id)} className="btn btn-outline-secondary btn-sm mr-2">+</button>
      <b>{product.count}</b>
      <button onClick={() => value.decreaseItem(product.id)} className="btn btn-outline-secondary btn-sm ml-2">-</button>
      </div>
      <div class="col-md-2  mt-2 mb-2">
      <button onClick={() => {value.deleteItem(product.id)}}className="btn btn-danger">
     <i className="fa fa-trash"></i></button>
      </div>
      <div class="col-md-2  mt-2 mb-2">
      <b>{product.price*product.count} SEK</b>
        </div>
    </div>
    )
 })}
</div>




{/* total */}
<div class="col-md-3 p-5" style = {{background:"#343a40",color:"white"}}> 
<div className="text-center mt-3">
<p style = {{fontSize:"23px"}}>Subtotal {cart.length} items</p>
<h3><span>Total:</span>{total} SEK</h3>

</div>
</div>
</div> 
</div>
}
{/* </div> */}
</div>
)
}}
</ProductConsumer>
)
}


