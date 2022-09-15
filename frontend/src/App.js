import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar.js';
import SkillsContainer from './SkillsContainer.js';
import PersonalInformation from './PersonalInformation.js';
import ThreeWrapper from './ThreeWrapper';

import React from "react";

export default class App extends React.Component {

    constructor(props) {
        super(props);


        this.state = {

        };

        this.canvasRef = React.createRef();
    }

    componentDidMount(){
        if (this.canvasRef.current !== null){
            const threeWrapper = new ThreeWrapper(this.canvasRef.current);
        }
        else{
            console.log(this.canvasRef)
            console.log("Failed to create canvasRef")
        }
    }

    render() {
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
                </div>

                <canvas ref={this.canvasRef} id="three-canvas" className="display-canvas"/>
            </div>
        );
    }
}
