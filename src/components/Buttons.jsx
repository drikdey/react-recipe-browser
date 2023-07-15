import React from "react";
import { FaPizzaSlice, FaPepperHot } from "react-icons/fa";
import { GiChopsticks, GiHamburger } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Buttons() {
  return (
    <List>
      <NavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </NavLink>
      <NavLink to={"/cuisine/Mexican"}>
        <FaPepperHot />
        <h3>Mexican</h3>
      </NavLink>
      <NavLink to={"/cuisine/American"}>
        <GiHamburger />
        <h3>American</h3>
      </NavLink>
      <NavLink to={"/cuisine/Chinese"}>
        <GiChopsticks />
        <h3>Chinese</h3>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  margin: 2rem 0rem;
  justify-content: center;
`;

export default Buttons;
