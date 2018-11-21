import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = (props) =>
  <StyledNavbar className="flexCenter">
    <StyledNavOptions><Link to={`${props.match.path}/`}>Stats</Link></StyledNavOptions>
    <StyledNavOptions><Link to={`${props.match.path}/create`}>CreationLab</Link></StyledNavOptions>
    <StyledNavOptions><Link to={`${props.match.path}/session`}>Session</Link></StyledNavOptions>
    <StyledNavOptions><Link to={`${props.match.path}/admin`}>Admin</Link></StyledNavOptions>
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