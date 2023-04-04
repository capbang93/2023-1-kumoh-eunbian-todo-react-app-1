import React from "react";
import { ListItem, ListItemText, InputBase, Checkbox} from "@material-ui/core";

class Todo extends React.Component {
    constructor(props){ // 매개변수 props 생성자
        super(props);   // props 초기화
        this.state={
            item: props.item
        }
    }
    render(){
        const item = this.state.item;
        return ( 
            <ListItem>
                <Checkbox checked={item.done}/>
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label":"naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>
              </ListItem>
        )
    }
}
export default Todo;