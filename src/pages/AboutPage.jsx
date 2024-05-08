import React, { useState, useEffect } from 'react';
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
import footballImg7 from "../components/image7.jpeg";
import { LoadingCard } from '../components/loadingcard'; // Changed from 'loadingCard' to 'LoadingCard'

import RecipeReviewCard from "../components/cards";

function About() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });

  useEffect(() => {
    const futureDate = new Date("2024-04-30T00:00:00"); // Future date to count down to
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = futureDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      const milliseconds = Math.floor(difference % 1000);

      setCountdown({ days, hours, minutes, seconds, milliseconds });

      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, []);

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
  
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0', paddingTop: '70px'}}>
      <RecipeReviewCard
          title="Premium Football Shirts"
          subheader="Explore our latest collection"
          image={footballImg2}
          content="Discover our premium collection of football shirts, featuring top teams and players from around the world. Made from high-quality materials, our shirts ensure both style and comfort on and off the field."
        />
        <RecipeReviewCard
          title="Quality Football Shoes"
          subheader="Step up your game"
          image={footballImg5}
          content="Elevate your performance with our range of quality football shoes. Designed for durability and performance, our shoes provide the support and grip you need to dominate the game."
        />
        <RecipeReviewCard
          title="Football Accessories"
          subheader="Complete your kit"
          image={footballImg7}
          content="Complete your football kit with our range of accessories. From socks and shin guards to bags and hats, we have everything you need to take your game to the next level."
        />
</div>
<LoadingCard /> {/* Changed from loadingCard to LoadingCard */}
<Grid container>
        <Grid item xs={12} md={6} className="details-left-con">
          <img src={footballImg1} width="383px" alt="Football Gear Line" style={{ width: "80%", height: "300px", margin: "50px", padding: "25px" }} />
        </Grid>
        <Grid item xs={12} md={6} className="details-right-con">
        <div className="details-content">
  <h1>Empowering Your Football Journey</h1>
  <p>
    Dive into the world of El Clasico, where passion meets precision. We're not just about football gear; we're about igniting your passion for the beautiful game. At El Clasico, we curate premium football equipment and apparel to elevate your performance and style on and off the field.
  </p>
  <Button
    variant="contained"
    size="large"
    style={{ ...primaryColor, color: "#000", padding: "5px 50px" }}
  >
    Discover More
  </Button>
</div>

        </Grid>
      </Grid>
      <Grid container direction="row-reverse">
        <Grid item xs={12} md={6} className="details-left-con">
          <img src={footballImg5} width="400px" alt="Football Merchandise" style={{width: "80%", height: "300px", margin: "50px", padding: "25px" }} />
        </Grid>
        <Grid item xs={12} md={6} className="details-right-con">
          <div className="details-content2">
            <h1>Exclusive Football Merchandise</h1>
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
          </div>
        </Grid>
      </Grid>
      <div className="countdown">
  <img src="https://www.ntfc.co.uk/siteassets/image/202324-season/midseasonsale-frontpage2.jpg" alt="Countdown" className="countdown-image" />
  <h2 className="countdown-title"> Hurry up! Don't miss out on our exclusive mid-season sales at El Clasico Store!<br></br> For a limited time only, shop our premium football gear and merchandise with discounts up to 50% off.<br></br> Whether you're looking for the latest football shirts, quality football shoes, or stylish accessories. </h2>
  <div className="countdown-timer">
    <div className="countdown-item">
      <span>{countdown.days}</span>
      <span className="countdown-item-label">Days</span>
    </div>
    <div className="countdown-item">
      <span>{countdown.hours}</span>
      <span className="countdown-item-label">Hours</span>
    </div>
    <div className="countdown-item">
      <span>{countdown.minutes}</span>
      <span className="countdown-item-label">Minutes</span>
    </div>
    <div className="countdown-item">
      <span>{countdown.seconds}</span>
      <span className="countdown-item-label">Seconds</span>
    </div>
    <div className="countdown-item">
      <span>{countdown.milliseconds}</span>
      <span className="countdown-item-label">Milliseconds</span>
    </div>
  </div>
</div>




    
      <Footer/>
    </>
  );
}

export default About;
