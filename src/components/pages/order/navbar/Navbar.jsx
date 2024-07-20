import React from 'react'
import Logo from '../../../reusable-ui/Logo'
import NavbarRightSide from './NavbarRightSide'
import styled from 'styled-components';

export default function Navbar() {
  return (
    <NavbarStyled>
        <Logo className="logo-order-page"/>
        <NavbarRightSide/>
    </NavbarStyled>
  )
}
const NavbarStyled = styled.nav`
  /*border: 1px solid blue;*/
  background-color: #fff;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  align-items: center;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-sizing: border-box;
`;
