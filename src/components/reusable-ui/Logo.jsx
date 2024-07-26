import React from 'react'
import styled from 'styled-components';

export default function Logo({className, onClick}) {
  return (
    <LogoStyled className={className} onClick={onClick}>
        {/*<div className='ligne'></div>*/}
        <div className='text-logo'>
            <h3>Innova Tech</h3>
            <h6>organisme de formation</h6>
        </div>
    </LogoStyled>
  )
}
const LogoStyled = styled.div`
  /*border: 1px solid red;*/
  display: flex;
  align-items: center;
  font-style: italic;
  .ligne {
    width: 5px;
    height: 7vh;
    background-color: #000;
    margin-right: 3px;
    
  }
  .text-logo {
    line-height: 1rem;
  h3 {
    /*border: 1px solid green;*/
    line-height: 1em;
    letter-spacing: 1.5px;
    padding-bottom: 0;
    margin-bottom: 0;
    font-size: 18px;
    color: #333;
    border-bottom: 2px solid #007bff;
  }
  h6{
    padding-top: 0;
    margin-top: 0;
    color: #333;
    font-size: 10px;
    
    
  }
}
`;
