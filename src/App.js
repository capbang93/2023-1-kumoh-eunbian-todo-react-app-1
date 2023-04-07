import React, {useState, useEffect} from "react";
import './App.css';
import Todo from "./Todo";
import {Paper, List, Container, AppBar} from "@material-ui/core";
import AddTodo from "./AddTodo";
import { call, signout } from "./service/ApiService";
import { Button,  Grid, Typography, Toolbar } from '@material-ui/core';
const App = ()=>{ 
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTodos(); 
    },[items]);

  const fetchTodos = ()=> {
    console.log(" fetchTodos 호출");
    call("/todo","GET",null).then((response)=>{
        console.log(" response ");
           setItems(response.data);
           setLoading(false);
        });
  };

    // add 함수 -> item 추가 함수
   const add=(item)=>{
        call("/todo","POST",item).then((response)=>{
            setItems(...response.data);
        })
    };

    // delete 함수
  const deleteItems=(item)=>{
        call("/todo","DELETE",item).then((response)=>{
            setItems(response.data);
        })
    };

    // update
  const  updateItems=(item)=>{
        call("/todo","PUT",item).then((response)=>{
            setItems(response.data);
        })
    };

    // 일괄 삭제
    const completedDelte=(e)=>{
        // items 중 체크된(done이 true인) 애들 삭제
        items.filter(item=>item.done===true).map((item,index)=>{
            deleteItems(item);
       });
    };


        // 자바스크립트가 제공하는 map 함수를 이용해서 배열을 반복해 <Todo /> 컴포넌트를 여러 개 생성

        var todoItems = items.length > 0 &&(
            <Paper style={{margin:16}}>
                <List>
                    {items.map((item, idx)=>(
                        <Todo item={item} ket={item.id} delete={deleteItems} update={updateItems}/>
                    ))}
                </List>
            </Paper>
        );
        
     var navigationBar=(
            <AppBar position="static">
                <Toolbar>
                    <Grid justify="space-between" Container>
                        <Grid item>
                            <Typography variant="h6">오늘의 할 일</Typography>
                        </Grid>
                        <Grid item>
                            <Button color="inherit" onClick={signout}>logout</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )

        // 로딩 중이 아닐 때
        var todoListPage=(
            <div>
                {navigationBar}
                <Container maxWidth="md">
                    <AddTodo add={add} />
                    <div className="TodoList">{todoItems}</div>
                    <Button onClick={(e)=>completedDelte(e)}>
                        <p>Delete Completed Item</p>
                    </Button>
                </Container>
            </div>
        );

        // 로딩중일때
        var loadingPage = <h1>로딩중..</h1>
        var content = loadingPage;

        if(!loading) {
            content = todoListPage;
        }
        // 생성된 컴포넌트 JPX 리턴
        return ( 
            <div className="App">
               {content}
            </div>
        )
    
}
export default App;