import React from "react";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);


        this.state = {};

        this.canvasRef = React.createRef();
    }

    renderButtons(){
        let buttons = [];
        Object.keys(this.props.navOptions).forEach(key => {
            let navClass = "nav-button"
            if (this.props.selectedState.toLowerCase() === key){
                navClass = "nav-button selected-nav-button"
            }
            buttons.push(
                <div className={navClass} onClick={(key => this.props.selectNavButton(key))}>
                    {this.props.navOptions[key]}
                </div>
            )
        });

        return buttons;
    }

    render() {
        return(
            <div>
                <div className="horizontal-container">
                    {this.renderButtons()}
                </div>
            </div>
        )
    }
}
