import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () =>
  <StyledNavbar className="flexCenter">
    <StyledNavOptions><Link to="/main">Stats</Link></StyledNavOptions>
    <StyledNavOptions><Link to="/create">Create</Link></StyledNavOptions>
    <StyledNavOptions><Link to="/session">Session</Link></StyledNavOptions>
  </StyledNavbar>

const StyledNavbar = styled.div`
  background-color: black;
  height: 50px;
  width: 100%;
`;

const StyledNavOptions = styled.div`
  margin-left: 1%;
  margin-right: 1%;
`;

export default Navbar;