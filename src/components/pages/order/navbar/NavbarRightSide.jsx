import React from 'react'
import {  NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaCalendarAlt, FaGraduationCap, FaHome, FaInfoCircle } from "react-icons/fa";

export default function NavbarRightSide({ isOpen, toggleMenu }) {
  return (
    <NavbarRightSideStyled isOpen={isOpen}>
        <li className='nav-item'>
          <NavLink className="navbar-links" to='/'>Accueil</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="navbar-links" to='/about'>Apropos</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="navbar-links" to='/formation'>Formations</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="navbar-links" to='/evenement'>Evenements</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="navbar-links" to='/blogs'>Blogs</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="register-button" to='/signUp'>S'inscrire</NavLink>
        </li>
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

    .navbar-links {
        color: #000;
        text-decoration: none;
        transition: 0.3s ease-in-out; 
        &:hover {
            color: #007bff;
        }      
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
  @media (max-width: 968px) {
    position: fixed;
    top: 12vh;
    top: 80px;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .nav-item {
      margin: 20px 0;
    }
  }
`;