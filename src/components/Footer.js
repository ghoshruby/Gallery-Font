import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import logo from '../images/logo1.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Footer = () => {

return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		{/* Gargi Memorial Institute of Technology */}
	</h1>
	<Container className="footer">
		<Row>
		{/* <Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column> */}
		<Column>
			<Heading>Services</Heading>
			{/* <FooterLink href="#">Writing</FooterLink> */}
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Baruipur,</FooterLink>
			<FooterLink href="#">Balarampur,Kolkata,</FooterLink>
			<FooterLink href="#">West Bengal 700144</FooterLink>
			<FooterLink href="#"></FooterLink>
			{/* <p>Baruipur, Mouza Beralia, Balarampur, Kolkata, </p> */}
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			
			<FooterLink href="https://www.facebook.com/gargimemorial/">
                        
					<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px"}}>
				<FacebookIcon />   Facebook
				</span>
			</i>	
			</FooterLink>
		
			<FooterLink href="https://www.instagram.com/gmitkolkata/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				<InstagramIcon />  Instagram
				</span>
			</i>
			</FooterLink>
			
			<FooterLink href="https://www.youtube.com/channel/UCvAsaxBt8S-cc6koiDlqxVA">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				 <YouTubeIcon />   Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
        <img style={{height:"100px",width:"200px",marginTop:"-20%",marginLeft:"75%"}} 
        src ={logo}></img> 
	</Container>
	</Box>
);
};
export default Footer;
