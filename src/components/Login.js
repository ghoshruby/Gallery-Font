import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import { useHistory } from "react-router-dom";
// import history from '../history';
// import PropTypes from "prop-types";
import logo from '../images/pin.jpg';
import Axios from 'axios';
import jwt from 'jwt-decode';

import axios from 'axios';

const Login=({handleChange})=> {
    const paperStyle = { padding: 20, height: '55vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#F01F23' }
    const btnstyle = { margin: '8px 0' }

    let history = useHistory();

    const [userid, setUserId] = useState("");
    const [password, setpassword] = useState("");;
    const [msg, setMessage] = useState("");;

    const onChangeUserId = (e) => setUserId(e.target.value);
    const onChangePassword = (e) => setpassword(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const cred = {
            userid: userid,
            password: password,
        }

        // axios.post('http://localhost:4500/user/login', cred)
        axios.post('https://gallery-back.herokuapp.com/user/login', cred)
            .then(res => {
                sessionStorage.setItem("user", res.data[0].email);
                sessionStorage.setItem("name", res.data[0].username);
                sessionStorage.setItem("uid", res.data[0]._id);

                window.alert("Login Sucessfull")

                history.push("/upload")

            

            })
            .catch(err => {
                console.log(err);
                setMessage("Email Id Password not matched")
            })

        // if ((userid === "admin") && (password === "admin")) {
        //     setMessage('WELCOME ADMIN')

        // }
        // else
        //     setMessage('INVALID UID OR PASSWORD')

        setUserId('')
        setpassword('')

    }


    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>

                    <img src={logo} classname='App-logo' alt="logo"></img>
                    <br />
                    {msg}
                    <br />
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField label='Email' placeholder='Enter email' fullWidth required name="email" value={userid} onChange={onChangeUserId} />
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required name="password" value={password} onChange={onChangePassword} />
                    {/* <Button type='submit' color='secondary' variant="contained" style={btnstyle} fullWidth onClick={userData}>Sign in</Button> */}
                    <br />
<br/>
                    <Button variant="contained" color='secondary' type="submit">
                        Login
                    </Button>
                </form>
                {/* <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography> */}
                <Typography > Do you have an account ?
                    <br/>
                    <Link href="#" onClick={() => handleChange("event", 1)} >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
// const Login = ({ handleChange }, props) => {

   
// }

export default Login;