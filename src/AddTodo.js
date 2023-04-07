import React, {useState, useEffect} from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

function AddTodo(props){
    const [title, setTitle] = useState("");

    const onInputChange=(e)=>{
        setTitle(e.target.value);
    }
    const onButtonClick=()=>{
        props.add({title: title});
        setTitle("");  // text 값 추가 후 입력 필드는 초기화
    }
    const enterKeyEventHandler=(e)=>{
        if(e.key=="Enter"){
           onButtonClick();
        }
    }

        return (
           <Paper style={{margin:16, padding:16}}>
            <Grid container>
                <Grid xs={11} md ={11} item style={{paddingRight:16}}>
                    <TextField 
                    placeholder="Add Todo here"
                    fullWidth
                    onChange={(e)=>onInputChange(e)}
                    value={title}
                    onKeyPress={(e)=>enterKeyEventHandler(e)}
                    />
                </Grid>
                <Grid xs={1} md ={1} item >
                    <Button
                    fullWidth
                    color="secondary"
                    variant="outlined"
                    onClick={()=>onButtonClick()}
                    >+</Button>

                </Grid>
            </Grid>
           </Paper>
        )
}
export default AddTodo;