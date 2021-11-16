import { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'

import logo from '../images/pin.jpg';
import axios from 'axios';

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 15 }
    const avatarStyle = { backgroundColor: '#F01F23' }
    const marginTop = { marginTop: 5 }

    const [uname, setUserName] = useState("");
    const [uemail, setUserEmail] = useState("");

    const [upass, setUserPass] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangeUserEmail = (e) => setUserEmail(e.target.value);
    const onChangeUserPass = (e) => setUserPass(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(`Form submitted:`);
        // console.log(`NAME: ${uname}`);
        // console.log(`EMAIL: ${uemail}`);

        const userinfo = {
            uname: uname,
            uemail: uemail,
           
            upass: upass,
        }

        // axios.post('http://localhost:4500/user/register', userinfo)
        axios.post('https://gallery-back.herokuapp.com/user/register', userinfo)
            .then(res => {
                // console.log(res.data.message)
                // setMessage('REGISTRATION SUCCESSFUL')
                setMessage(res.data.message)
                window.alert(res.data.message);
            })
            .catch(err => {
                setMessage(err.message)
                console.log(err);
            })

        setUserName('')
        setUserEmail('')
    
        setUserPass('')
    }

    return (
        <div>
            <Grid>
                <Paper style={paperStyle}>
                    <Grid align='center'>

                        <img src={logo} classname='App-logo' alt="logo"></img>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth label="Username" type="text" placeholder="Enter your name" name="name" value={uname} onChange={onChangeUserName} />
                        <TextField fullWidth label="Email" type="email" placeholder="Enter your email" name="email" value={uemail} onChange={onChangeUserEmail} />
                        <TextField fullWidth label="Password" type="password" placeholder="Enter your password" name="password" value={upass} onChange={onChangeUserPass} />

                        <br />
                        <br />
                        <Button variant='contained' color='secondary' type='submit' >
                            Signup
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>



    )
}

export default Signup;


