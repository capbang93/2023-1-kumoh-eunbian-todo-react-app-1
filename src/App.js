import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Hello from "./Hello";

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <Hello />
            </div>
        )
    }
}
export default App;