import React from "react";
import ticketsImage from "./../img/ticket.jpg";
import { styles } from '../styles/main'

function Header(){
  return (
    <>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="ticket" style={styles.imgStyle} />
    </>
  );
}

export default Header;
