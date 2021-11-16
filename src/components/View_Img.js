import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbars from './Navbars';
import Card from 'react-bootstrap/Card';

function View_Img() {
    let name = sessionStorage.getItem('name')
    let user = sessionStorage.getItem('user')
    let uid = sessionStorage.getItem('uid')

    const [imglist, setImgList] = useState([]);


    useEffect(() => {
        // axios.post('http://localhost:4500/user/viewall/' + uid)
        axios.post('https://gallery-back.herokuapp.com/user/viewall/' + uid)
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
                <Col key={index} style={{height:"300px",width:"200px",marginBottom:"30px"}}>
                    <Card style={{height:"300px",width:"200px"}}>
                        <Card.Img variant="top" src={currentrow.image_path} style={{height:"300px",width:"200px"}}/>
                        {/* <Card.Body> */}
                            {/* <Card.Title>Card title</Card.Title> */}
                            {/* <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text> */}

{/* <button className="e-card-btn">Save</button> */}
                        {/* </Card.Body> */}
                        
                    </Card>

                </Col>
            )
        })

    }
    return (
        <div class="upload_img">

            <Navbars />
            <br/>
            <Container>
                <Row>
                    
                    {Style_Img()}
                </Row>
            </Container>
           

        </div>
    )
}

export default View_Img;