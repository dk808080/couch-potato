import React from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import CarouselImg from "./Components/CarouselImg";
import Savers from "./Components/Savers";
import Bank_offers from "./Components/Bank_offers";
import Category from "./Components/Category";
import Zip from "./Components/Zip";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";


function App(){
return(
    <div>
        <Header />
        <Navigation />
        <CarouselImg />
        <Savers />
        <Bank_offers />
        <Category />
        <Zip />
        <Connect />
        {/* <Footer /> */}
    </div>
);
}

export default App;
