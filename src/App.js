import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Hello from "./Hello";
import Todo from "./Todo";

class App extends React.Component {
    constructor(props){ // 매개변수 props 생성자
        super(props);   // props 초기화
        this.state={
            item: {id:0, title:"Hello world!", done:true}
        }
    }
    render(){
        return ( //   매개변수 item에 변수명/값을 전달
            <div className="App">
                <Todo item ={this.state.item}/>
            </div>
        )
    }
}
export default App;