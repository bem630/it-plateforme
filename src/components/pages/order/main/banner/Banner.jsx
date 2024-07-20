import React from 'react'
import styled from 'styled-components';

export default function Banner() {
  return (
    <BannerStyled>
        <h1>Apprenez aujourd'hui, réussissez demain.</h1>
        <p>Chez INNOVA TECH,  nous transformons vos rêves en réalité. Avec une équipe d'experts dédiés et des ressources de classe mondiale, nous vous guidons vers la réussite. Nos programmes sont conçus pour répondre aux besoins du marché actuel, vous garantissant une éducation de qualité et des compétences applicables immédiatement.</p>
    </BannerStyled>
  )
}
const BannerStyled = styled.div`
  /*border: 1px solid blue;*/
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    background: url("/src/assets/work-6.jpg") rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  h1 {
    color: #fff;
    font-size: 5rem;
    margin-bottom: 20px;
    text-align: center;
  }
  p{
    text-align: justify;
    color: white;
    width: 80%;
    font-size: 16px;
  }
`;