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

        this.navOptions = {
            "main": "Main",
            "career": "Career",
            "graphics": "Graphics",
            "hobbies": "Hobbies"
        }


        this.state = {
            selectedState: this.navOptions.main
        };

        this.canvasRef = React.createRef();
    }

    componentDidMount(){
        if (this.canvasRef.current !== null){
            const threeWrapper = new ThreeWrapper(this.canvasRef.current);
        }
        else{
            console.error("Failed to create canvasRef")
        }
    }

    selectNavButton(newState){
        console.log(newState)
        //this.setState({selectedState: newState})
    }

    render() {
        return (
            <div className="app">
                <div className="header-container">
                    <header className="header-text">
                    Robert Butler
                    </header>
                    <div className="nav-container">
                    <NavBar
                        selectedState={this.state.selectedState}
                        navOptions={this.navOptions}
                        selectNavButton={this.selectNavButton}
                    />
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
