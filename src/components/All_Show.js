import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Navbars from './Navbars';
import { saveAs } from 'file-saver'

function All_Show() {


    const [imglist, setImgList] = useState([]);


    useEffect(() => {
        // axios.post('http://localhost:4500/user/viewall')
        axios.post('https://gallery-back.herokuapp.com/user/viewall')
            .then(response => {
                setImgList(response.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    function Style_Img() {
        return imglist.map((currentrow, index) => {
            return (
                <Col key={index} style={{ height: "300px", width: "200px", marginBottom: "30px" }}>
                    <Card style={{ height: "300px", width: "200px" }}>
                        <Card.Img variant="top" src={currentrow.image_path} style={{ height: "270px", width: "200px" }} />
                        <Card.ImgOverlay>
                            <Button style={{ marginLeft:"116px",backgroundColor: "#a20b08",color:"whitesmoke",fontSize: "1rem",
        boxShadow: "0 6px 6px rgba(0, 0, 0, 0.6)",borderRadius:"20px", marginTop:"-12%" }} 
                            onClick={()=>{saveAs(`${currentrow.image_path}`, 'image.jpg')}}>
                                Save
                            </Button>


                            </Card.ImgOverlay>
                        {/* <Card.Body> */}
                        <Card.Title style={{ height: "30px", width: "200px" }}>
                            {currentrow.email}
                            
                        </Card.Title>
                        {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text> */}

                        
                        {/* </Card.Body> */}

                    </Card>

                </Col>
            )
        })

    }


    return (
        <div class="gallery">
            <Navbars />
            <br />
            <Container>
                <Row>

                    {Style_Img()}
                </Row>
            </Container>
        </div>
    )
}

export default All_Show;