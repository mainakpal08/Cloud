import React, { Component } from 'react';
import './App.css';
import CardsContainer from './components/ProjectList/CardsContainer';


class App extends Component {
    render() {
        return (
            <div className="App">
                
                <div className="App-header">
                    <h1>Looking for Open Source project?</h1>
                    <h2>Here it is...</h2>
                </div>
                
                <CardsContainer />
                
            </div>
        );
    }
}

export default App;
