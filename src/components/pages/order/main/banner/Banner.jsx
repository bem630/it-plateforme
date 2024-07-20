import React from 'react'
import styled from 'styled-components';

export default function Banner() {
  return (
    <BannerStyled>
        <h1>Apprenez aujourd'hui, réussissez demain.</h1>
        <p>Chez INNOVA TECH,  nous transformons vos rêves en réalité. Avec une équipe d'experts dédiés et des ressources de classe mondiale, nous vous guidons vers la réussite. Nos programmes sont conçus pour répondre aux besoins du marché actuel, vous garantissant une éducation de qualité et des compétences applicables immédiatement.</p>
        <div className='btns-banner'>
            <button className='btn-banner btn1'>En savoir plus</button>
            <button className='btn-banner btn2'>Nous réjoindre</button>
        </div>
    </BannerStyled>
  )
}
const BannerStyled = styled.div`
  /*border: 1px solid blue;*/
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
  .btns-banner {
    margin-top: 20px;
    display: flex;
    align-items: center;
    .btn-banner {
        font-size: 16px;
        color: #fff;
        background-color: #007bff;
        padding: 10px 20px;
        border-radius: 5px;
        outline: none;
        border: none;
        transition: background-color 0.3s ease;
        text-align: center;
        display: block;
        margin: 20px;
        cursor: pointer;
        &:hover {
        background-color: #0056b3;
}
    }
  }
`;