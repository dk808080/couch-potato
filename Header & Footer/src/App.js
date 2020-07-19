import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
    render() {
        return (<
            div className='App' >
            <Navbar />
            <Footer />
            <
            /div>
        );
    }
}

export default App;