import React from 'react'
import Banner from '../banner/Banner'
import styled from 'styled-components';
import Formation from '../formation/Formation';

export default function Home() {
  return (
    <HomeStyled>
      <Banner/>
      <Formation/>
    </HomeStyled>
  )
}
const HomeStyled = styled.div`
  /*border: 1px solid red;*/
`;

