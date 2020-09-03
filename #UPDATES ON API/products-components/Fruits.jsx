import React,{useState,useEffect} from "react";
import "../../css/allproducts.css";
import fruits from "../../data/food/fruits-data.json";
import Navigation from "./../Homepage-components/Navigation";
import Product from "./../Product";
import axios from 'axios';
function Fruits() {
  const[items,setitem]=useState([])

  useEffect(()=>{
  axios.get('/api/food/fruits')
  .then((res)=>{
      console.log(res.data);
      setitem(res.data.data.fruits);
  })
  .catch((err)=>{
      console.log(err);
  })


},[])

const itemslist=items.map((item)=>{

  return (
      <div className="col-lg-4 col-md-6 col-sm-12 eachproduct">
         <Product
          key={item.id}
          image={item.image}
          productName={item.productName}
          quantity={item.quantity}
          price={item.price}
          />
      </div>
  )
})
  return (
    <div className="allprod">
      <Navigation />
      <h1 style={{ marginTop: "1rem" }}>Fruits</h1>
      <div className="row">{itemslist}</div>
    </div>
  );
}

export default Fruits;
