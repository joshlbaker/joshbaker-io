import React from "react";
import "./App.scss";
import headshot from "./assets/headshot.png";
import { Card } from "./components";
import { SocialIcon } from "react-social-icons";

function App() {
  const avatar = <img src={headshot} className="Avatar" />;
  const iconStyle = {
    width: 30,
    height: 30,
    borderRadius: "50%",
    margin: "0 5px",
  };
  const footer = (
    <div className="Footer">
      <SocialIcon url="https://twitter.com/joshlbaker_" style={iconStyle} />
      <SocialIcon
        url="https://www.linkedin.com/in/joshlbaker/"
        style={iconStyle}
      />
      <SocialIcon url="https://github.com/joshlbaker" style={iconStyle} />
    </div>
  );
  return (
    <div className="Main">
      <Card
        title="Josh Baker"
        avatar={avatar}
        centered
        description="I'm a Senior Web Developer currently working at Shopify in San Francisco. I have a passion for music, coding, and video games."
        footer={footer}
      />
    </div>
  );
}

export default App;
