import React from 'react'
import { Footer, Blog, Possibility,Feature,WhatGPT3,Header } from './containers';
import { CTA, Branch,Navbar } from './components';
const App = ()=>{
    return(
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Branch/>
            <WhatGPT3/>
            <Feature/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}
export default App;