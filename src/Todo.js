import React from "react";
import ReactDOM from "react-dom";

class Todo extends React.Component {
    constructor(props){ // 매개변수 props 생성자
        super(props);   // props 초기화
        this.state={
            item: props.item
        }
    }
    render(){
        return ( 
            <div className="Todo">
                <input 
                    type="checkbox"
                    id={this.state.item.id}
                    name={this.state.item.id}
                    checked={this.state.item.done}
                />
                <label for={this.state.item.id}>{this.state.item.title}</label>
            </div>
        )
    }
}
export default Todo;