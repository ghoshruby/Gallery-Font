

import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
// import { useHistory } from "react-router-dom";
import axios from 'axios';

import logo from '../images/pin.jpg';


function Upload_Img() {
    const paperStyle = { padding: 20, height: '50vh', width: 300, margin: "50 auto",marginTop:60,marginLeft:"20%" }
    const avatarStyle = { backgroundColor: '#F01F23' }
    const btnstyle = { margin: '8px 0' }

    let name= sessionStorage.getItem('name')
    let user= sessionStorage.getItem('user')
    let uid= sessionStorage.getItem('uid')

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [image_path, setImg_path] = useState("");

    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeCategory = (e) => setCategory(e.target.value);
    

    const handleImage = async e => {
        e.preventDefault()
        let img = e.target.files[0]
        if (!img) return alert("File not exist.")
        //5242880 == 5 mb
        if (img.size > 1024 * 1024 * 10) return alert("Size too large!")
        if (img.type !== 'image/jpeg' && img.type !== 'image/png') return alert("File format is incorrect.")

        let data = new FormData()
        data.append('file', img)
        data.append('upload_preset', "rubyghosh")
        data.append('cloud_name', "ruby27")
        fetch(' https://api.cloudinary.com/v1_1/ruby27/image/upload', {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setImg_path(data.url)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(`Form submitted:`);
        // console.log(`NAME: ${uname}`);
        // console.log(`EMAIL: ${uemail}`);

        const userinfo = {
            title: title,
            category: category,
           image_path:image_path,
           username:name,
           email:user,
           uid:uid,
           
        }
console.log(image_path)
        axios.post('http://localhost:4500/user/image', userinfo)
            .then(res => {
                // console.log(res.data.message)
                // setMessage('REGISTRATION SUCCESSFUL')
                // setMessage(res.data.message)
                window.alert("Image Uploaded Sucessfully");
            })
            .catch(err => {
                // setMessage(err.message)
                console.log(err);
            })

        setTitle('')
        setCategory('')
    
        
    }


    return(
        <div>
       
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                <img src={logo} classname='App-logo' alt="logo"></img>
                    <br />
                    <br />
                    <h2>Upload Image</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField label='Title' placeholder='Image Titile' fullWidth required name="title" value={title} onChange={onChangeTitle} />
                    <TextField label='Category' placeholder='category' type='text' fullWidth required name="category" value={category} onChange={onChangeCategory} />
                    <br/>
                    <br/>
                    <div className="form-group">
                            {/* <label>Image Upload</label> */}
                            <input type="file" className="form-control" placeholder="Image link" onChange={handleImage} required />
                        </div>
                    <br />
                    <br/>

                    <Button variant="contained" color='secondary' type="submit">
                        Upload Image
                    </Button>
                </form>
                
            </Paper>
        </Grid>
        </div>

    )

}
   
    

export default Upload_Img;