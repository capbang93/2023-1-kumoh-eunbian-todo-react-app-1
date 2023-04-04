import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Todo from "./Todo";
import {Paper, List} from "@material-ui/core";

class App extends React.Component {
    constructor(props){ // 매개변수 props 생성자
        super(props);   // props 초기화
        this.state={
            items: [
                {id:0, title:"Todo 1", done:false},
                {id:1, title:"Todo 2", done:false}
            ]
        }
    }
    render(){
        // 자바스크립트가 제공하는 map 함수를 이용해서 배열을 반복해 <Todo /> 컴포넌트를 여러 개 생성

        var todoItems = this.state.items.length > 0 &&(
            <Paper style={{margin:16}}>
                <List>
                    {this.state.items.map((item, idx)=>(
                        <Todo item={item} ket={item.id} />
                    ))}
                </List>
            </Paper>
        );
        
        return ( 
            <div className="App">
               {todoItems}
            </div>
        )
    }
}
export default App;