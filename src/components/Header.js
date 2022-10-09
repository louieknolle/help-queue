import React from "react";
import ticketsImage from "./../img/ticket.jpg";

function Header(){
  const imgStyle = {
    width: '30%',
    height: 'auto',
  }

  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="An image of tickets" style={imgStyle}/>
    </React.Fragment>
  );
}

export default Header;