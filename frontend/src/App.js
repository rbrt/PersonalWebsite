import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar.js';
import SkillsContainer from './SkillsContainer.js';
import PersonalInformation from './PersonalInformation.js';

function App() {
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
        </div>
    );
}

export default App;
