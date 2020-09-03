import React,{useEffect,useState} from "react";
import "../../css/allproducts.css";
import grains from "../../data/grocery/grains-data.json";
import Navigation from "./../Homepage-components/Navigation";
import Product from "./../Product";
import axios from 'axios';

function Grains() {
  const[items,setitem]=useState([])

  useEffect(()=>{
  axios.get('/api/grocery/grains')
  .then((res)=>{
      console.log(res.data);
      setitem(res.data.data.grains);
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
      <h1 style={{ marginTop: "1rem" }}>Grains</h1>
      <div className="row">{itemslist}</div>
    </div>
  );
}

export default Grains;
