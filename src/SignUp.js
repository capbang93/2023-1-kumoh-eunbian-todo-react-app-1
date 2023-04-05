import React from 'react';
import { signin, signup } from './service/ApiService';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import { Form, Link } from 'react-router-dom';
class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");

        signup({email: email,username:username, password:password}).then(
            (response)=>{
                window.location.href = "/login";
            }
        );
    }
    render(){
        return (
            <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
                <Grid container spacing={2}>
                    <Typography component="h1" variant="h5">
                       계정생성
                    </Typography>
                </Grid>
                <form noValidate onSubmit={this.handleSubmit}>
                {" "}
                <Grid container spacing={2}>
                <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="사용자 이름"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            />
                    </Grid>   
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="이메일"
                            name="email"
                            autoComplete="email"
                            />
                    </Grid>   
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="password"
                            label="비밀번호"
                            name="password"
                            autoComplete="password"
                            />
                    </Grid>  
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            >
                                계정생성
                            </Button>
                    </Grid> 
                    <Link to = "/login" variant="body2">
                        <Grid item>이미 계정이 없습니까? 여기서 로그인하세요.</Grid>    
                    </Link>   
                </Grid>
                </form>
            </Container>
        )
    }
}
export  default SignUp;