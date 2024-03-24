import React from 'react';
import { Footer, Navbar } from '../components';
import './AboutPage.css';
import { Button, Container, Grid, Card, CardContent } from "@mui/material";
import styled from "@mui/system/styled";
import underline from "../components/our mission.jpg";
import line from "../components/football-gear.png";
import footballImg1 from "../components/image1.jpg";
import footballImg2 from "../components/image2 (2).jpg";
import footballImg3 from "../components/image3.jpg";
import footballImg4 from "../components/image4.jpg";
import footballImg5 from "../components/image5.png";


function About() {
  const primaryColor = { backgroundColor: "#f3f25b" };
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    padding: theme.spacing(1),
    borderRadius: "4px",
    textAlign: "center",
  }));

  return (
    <>
      <Navbar />
      <div className="aboutus-hero">
        <h1>Welcome to El Clasico Football Store</h1>
        <Container maxWidth="sm">
          <p>
            Whether you're a seasoned player looking to upgrade your equipment or a die-hard fan seeking the perfect merchandise to support your favorite team, El Clasico is here to cater to your needs.
          </p>
        </Container>
        <Button
          variant="contained"
          size="large"
          style={{ ...primaryColor, color: "#000" }}
        >
          Explore More
        </Button>
      </div>
      <Container maxWidth="fluid" style={{ textAlign: "center",  padding: "20px 0" }}>
  <h1 style={{ fontFamily: "serif" }}>Our Mission</h1>
  <img src={underline} width="583px" alt="Mission Underline" />
  <p style={{ fontFamily: "inherit", fontSize: "1.2rem", marginTop: "20px" }}>
    Welcome to our website! At El Clasico, our mission is to<br></br> provide our visitors with the best possible experience while browsing our<br></br> platform. We strive to offer high-quality content, intuitive navigation, and a user-friendly interface.<br></br>
    
    Whether you're here to explore our products, learn more about our services, or simply enjoy engaging with our<br></br> community, we're dedicated to meeting your needs and exceeding your expectations.Thank you for choosing El Clasico.
    
   </p>
</Container>

      <Grid container>
        <Grid item xs={12} md={6} className="details-left-con">
          <h1>Providing Premium Football Gear</h1>
          <img src={line} width="383px" alt="Football Gear Line" style={{ width: "100%", height: "auto", margin: "20px", padding: "10px" }} />
          <p>
            At El Clasico, we are dedicated to offering top-notch football equipment and apparel for players and fans alike. Our mission is to ensure every customer finds exactly what they need to enhance their football experience.
          </p>
          <Button
            variant="contained"
            size="large"
            style={{ ...primaryColor, color: "#000", padding: "5px 50px" }}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
        </Grid>
      </Grid>
      <Grid container direction="row-reverse">
        <Grid item xs={12} md={6} className="details-left-con">
          <h1>Exclusive Football Merchandise</h1>
          <img src={footballImg3} width="400px" alt="Football Merchandise" style={{ width: "100%", height: "auto", margin: "0px", padding: "10px" }} />
          <p>
            Our collection features a wide range of premium football shoes, jerseys, accessories, and more. Each product is carefully curated to meet the standards of quality and style that our customers expect from El Clasico.
          </p>
          <Button
            variant="contained"
            size="large"
            style={{ ...primaryColor, color: "#000", padding: "5px 50px" }}
          >
            Explore Collection
          </Button>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6} className="details-left-con">
          <h1>Embrace Your Football Passion</h1>
          <img src={footballImg5} alt="Football Passion" style={{ width: "100%", height: "auto", margin: "20px", padding: "10px" }} />
          <p>
            We understand the love and passion football fans have for the game. That's why we offer a diverse selection of fan merchandise, allowing you to represent your favorite teams and players with pride.
          </p>
          <Button
            variant="contained"
            size="large"
            style={{ ...primaryColor, color: "#000", padding: "5px 50px" }}
          >
            Shop Fan Gear
          </Button>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
        </Grid>
      </Grid>
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1
          style={{
            fontFamily: "serif",
            fontSize: "2.4em",
          }}
        >
          Our Commitment to Excellence
        </h1>
        <img src={underline} width="983px" alt="Excellence Underline" />
      </div>
      <Grid container spacing={3} direction="row" justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <img src={footballImg1} alt="Football Gear 1" style={{ width: "100%", height: "auto" }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <img src={footballImg2} alt="Football Gear 2" style={{ width: "100%", height: "auto" }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <img src={footballImg4} alt="Football Gear 3" style={{ width: "100%", height: "auto" }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
}

export default About;
