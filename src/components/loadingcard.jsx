import React, { useState } from 'react';
import { Avatar, Card, Switch } from 'antd';
const { Meta } = Card;

export const LoadingCard = () => {
  const [loading, setLoading] = useState(true);

  const onChange = (checked) => {
    setLoading(!checked);
  };

  // Internal styles
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '70px', // Added padding at the top
  };

  const rowStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px', // Adds space between cards
    marginBottom: '20px', // Space before the switch button
  };

  const cardStyle = {
    width: 300,
    marginBottom: '20px', 
    fontFamily: 'cursive',
  };

  return (
    <div style={containerStyles}>
      {/* First row of cards */}
      <div style={rowStyles}>
        <Card style={cardStyle} loading={loading}>
          <Meta
            avatar={<Avatar src="https://yt3.googleusercontent.com/ytc/AIdro_mYKiW6PZu-PaVQBYK6WWP4a-OxN-qxxLJ9akL9=s900-c-k-c0x00ffffff-no-rj" />}
            title="El Clásico Football Accessories"
            description="Complete your match-day look with our exclusive range of football accessories. From scarves to caps, show your support for your favorite team in style with our El Clásico collection."
          />
        </Card>
        <Card style={cardStyle} loading={loading}>
          <Meta
            avatar={<Avatar src="https://preview.redd.it/soccer-boots-seller-v0-nami2rx4cksb1.jpg?width=640&crop=smart&auto=webp&s=17a00702e4734a3de11e944046e78e0466cd7e76" />}
            title="El Clásico Football Boots"
            description="Experience the thrill and precision of El Clásico with our premium football boots. Engineered for performance and style, our boots are crafted to elevate your game to new heights on the pitch."
          />
        </Card>
        <Card style={cardStyle} loading={loading}>
          <Meta
            avatar={<Avatar src="https://animeape.com/wp-content/uploads/2023/08/Personalized-Firebenders-A_AOP-Baseball-Jerse_BACK_Mockup.jpg" />}
            title="El Clásico Football Jerseys"
            description="Celebrate the legacy of El Clásico with our authentic football jerseys. Designed with iconic club colors and premium materials, our jerseys are a symbol of passion and pride for every football fan."
          />
        </Card>
      </div>
      
      {/* Second row of cards */}
      <div style={rowStyles}>
        <Card style={cardStyle} loading={loading}>
          <Meta
            avatar={<Avatar src="https://static.dezeen.com/uploads/2014/07/Nike-Vapor-Cleat_dezeen_784_8.jpg" />}
            title="El Clásico Performance Football Shoes"
            description="Ultimate grip and comfort on the field, these shoes feature state-of-the-art technology to enhance your agility, speed, and control. With a design inspired by the passion and intensity of El Clásico."
          />
        </Card>
        <Card style={cardStyle} loading={loading}>
          <Meta
            avatar={<Avatar src="https://avachara.com/fashion/img/m_tops/uf_football_stripe.jpg" />}
            title="El Clásico Heritage Football Jersey"
            description="A fusion of advanced fabric technology with classic design elements. Showcasing the iconic colors and crest, it's designed to keep you cool and comfortable whether you're  cheering from the stands. "
          />
        </Card>
        <Card style={cardStyle} loading={loading}>
          <Meta
            avatar={<Avatar src="https://www.coindesk.com/resizer/xcdVw45Zj8k9aFHjjkxPj4TNyD4=/567x425/filters:quality(80):format(jpg)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/2CB34ZCXQFDZ5NE6QW6EO4VY3A.jpg" />}
            title="Premium El Clásico Football Ball"
            description="Embrace the thrill of El Clásico with our premium football ball. Engineered for performance and durability, our ball is designed to enhance your game on the pitch. Made from high-quality materials ."
          />
        </Card>
      </div>
      
      {/* Switch button */}
      <div>
        <Switch checked={!loading} onChange={onChange} />
      </div>
    </div>
  );
};

export default LoadingCard;
