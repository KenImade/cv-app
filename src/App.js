import React, { Component } from "react";
import CV from "./components/CV";
import Footer from "./components/Footer";
import Header from "./components/Header";



class App extends Component{
    

    render() {
        return (
            <>
                <Header/>
                <CV />
                <Footer />
            </>
        )
    }
}


export default App;