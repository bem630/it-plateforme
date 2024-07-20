import React from 'react'
import {  NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function NavbarRightSide() {
  return (
    <NavbarRightSideStyled>
        <li className="nav-item"><NavLink className="navbar-links" to='/'>Accueil</NavLink></li>
        <li className="nav-item"><NavLink className="navbar-links" to='/about'>Apropos</NavLink></li>
        <li className="nav-item"><NavLink className="navbar-links" to='/formation'>Formations</NavLink></li>
        <li className="nav-item"><NavLink className="navbar-links" to='/evenement'>Evenements</NavLink></li>
        <li className="nav-item"><NavLink className="navbar-links" to='/blogs'>Blogs</NavLink></li>
        <li className="nav-item"><NavLink className="register-button" to='/signUp'>S'inscrire</NavLink></li>
    </NavbarRightSideStyled>
  )
}
const NavbarRightSideStyled = styled.ul`
  /*border: 1px solid red;*/
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-size: 1.2rem;
  .nav-item {
    margin: 0 10px;
    color: black;

    .navbar-links {
        color: #000;
        text-decoration: none;
        transition: 0.3s ease-in-out;      
    }
    .register-button {
        font-size: 16px;
        color: #fff;
        text-decoration: none;
        background-color: #007bff;
        padding: 10px 20px;
        border-radius: 5px;
        outline: none;
        border: none;
        transition: background-color 0.3s ease;
        text-decoration: none;
        text-align: center;
        display: block;
        &:hover {
        background-color: #0056b3;
}
    }
  }
`;