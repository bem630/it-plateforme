import React from 'react'
import Banner from '../banner/Banner'
import styled from 'styled-components';
import Category from '../formation/Category';
import Evenement from '../evenement/Evenement';

export default function Home() {
  return (
    <HomeStyled>
      <Banner/>
      <Category/>
      <Evenement/>
    </HomeStyled>
  )
}
const HomeStyled = styled.div`
  /*border: 1px solid red;*/
`;

