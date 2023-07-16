import React from "react";
import { FaPizzaSlice, FaPepperHot } from "react-icons/fa";
import { GiChopsticks, GiHamburger } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Buttons() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/Mexican"}>
        <FaPepperHot />
        <h4>Mexican</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <GiHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  margin: 2rem 0rem;
  justify-content: center;
`;

const SLink = styled(NavLink)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 50%;
  align-items: center;
  cursor: pointer;
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);
  background: linear-gradient(45deg, #494949, #313131);

  svg {
    color: white;
    font-size: 1.5rem;
    z-index: 10;
    position: absolute;
    top: 30%;
  }

  h4 {
    color: white;
    font-size: 0.9rem;
    position: absolute;
    bottom: 18%;
  }

  &.active {
    background: red;

    svg {
      color: whitesmoke;
    }
    h4 {
      color: whitesmoke;
    }
  }

  &:hover {
    background: linear-gradient(45deg, #fd1d1d, #ff8400);
  }
`;

export default Buttons;
