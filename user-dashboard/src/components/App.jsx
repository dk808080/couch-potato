import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import SideMenu from "./SideMenu"
import 'bootstrap/dist/css/bootstrap.min.css';

function App()
{
    return(
        <div>
          <Header/>
            <SideMenu/>
            <Footer/>
           
        </div>
    );
}
export default App;