import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Todo from "./Todo";
import {Paper, List, Container} from "@material-ui/core";
import AddTodo from "./AddTodo";
import { call } from "./service/ApiService";

class App extends React.Component {
    constructor(props){ // 매개변수 props 생성자
        super(props);   // props 초기화
        this.state={
            items: []
        }
    }

    // add 함수 -> item 추가 함수
    add=(item)=>{
        call("/todo","POST",item).then((response)=>{
            this.setState({items: response.data});
        })
    }

    // delete 함수
    delete=(item)=>{
        call("/todo","DELETE",item).then((response)=>{
            this.setState({items: response.data});
        })
    }

    // update
    update=(item)=>{
        call("/todo","PUT",item).then((response)=>{
            this.setState({items: response.data});
        })
    }

    componentDidMount(){
        call("/todo","GET",null).then((response)=>{
            this.setState({items: response.data});
        });
    }

    render(){
        // 자바스크립트가 제공하는 map 함수를 이용해서 배열을 반복해 <Todo /> 컴포넌트를 여러 개 생성

        var todoItems = this.state.items.length > 0 &&(
            <Paper style={{margin:16}}>
                <List>
                    {this.state.items.map((item, idx)=>(
                        <Todo item={item} ket={item.id} delete={this.delete} update={this.update}/>
                    ))}
                </List>
            </Paper>
        );
        
        return ( 
            <div className="App">
                <Container maxWidth="md">
                    <AddTodo add={this.add}/>
                    <div className="TodoList"> {todoItems}</div>
                </Container>
              
            </div>
        )
    }
}
export default App;