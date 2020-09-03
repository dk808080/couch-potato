import React,{useEffect,useState} from "react";
import "../../css/allproducts.css";
import winter from "../../data/winter-special/winter-data.json";
import Navigation from "./../Homepage-components/Navigation";
import Product from "./../Product";
import axios from 'axios';
function Winter() {
 
  const[items,setitem]=useState([])

  useEffect(()=>{
  axios.get('/api/winter-special')
  .then((res)=>{
      console.log(res.data);
      setitem(res.data.data.winterSpecial);
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
      <h1 style={{ marginTop: "1rem" }}>Winter specials</h1>
      <div className="row">{itemslist}</div>
    </div>
  );
}

export default Winter;
