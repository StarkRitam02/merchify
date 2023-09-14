import React from "react";

const Card=({product})=>{
  console.log('Product:', product); // Add this line for debugging

  return(
    <>
    <div class="card" style={{marginTop:"20px"}}>
      <img src={product.url} class="card-img-top" alt="..."/>
      <div class="card-body " style={{paddingLeft:"10px",paddingRight:"10px"}}>
      <h5 class="card-title">{product.name}</h5>
      <p class="card-text">{product.category}</p>
      <p class="card-text">{product.price}</p>

      <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>
    </>
  );
}
export default Card;