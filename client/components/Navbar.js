import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () =>
  <StyledNavbar className="flexCenter">
    <Link to="/">Home</Link>
  </StyledNavbar>

const StyledNavbar = styled.div`
  background-color: black;
  height: 50px;
  width: 100%;
`

export default Navbar;