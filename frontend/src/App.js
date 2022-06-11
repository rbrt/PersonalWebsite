import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar.js';
import SkillsContainer from './SkillsContainer.js';
import PersonalInformation from './PersonalInformation.js';
import ThreeWrapper from './ThreeWrapper';

import React, { useRef } from "react";

function App() {

    const canvasRef = useRef(null);

    if (canvasRef.current !== null){
        const threeWrapper = new ThreeWrapper(canvasRef);
        console.log("Made the three wrapper")
    }
    else{
        console.log(canvasRef.current);
    }

    return (
        <div className="app">
            <div className="header-container">
                <header className="header-text">
                Header Here
                </header>
                <div className="nav-container">
                <NavBar/>
                </div>
            </div>
            <div className="body">
                <div className="content-container">
                    <PersonalInformation/>
                    <SkillsContainer/>
                </div>

                <canvas ref={canvasRef} id="three-canvas"/>
            </div>
        </div>
    );
}

export default App;
