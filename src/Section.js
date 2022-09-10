import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';


const Section = ({ title, description, leftTxtBtn, rightTxtBtn, backgroundImg }) => {
  return (
    <Wrap bgImage = {backgroundImg}>
      <ItemText>
         <h1>{title}</h1>
         <p>{description}</p>
      </ItemText>
      <Buttons>
         <ButtonGroup>
            <LeftButton>
                  {leftTxtBtn}
            </LeftButton>
            {rightTxtBtn &&
            <RightButton>
                  {rightTxtBtn}
            </RightButton>
            }
         </ButtonGroup>
         <DownArrow />
      </Buttons>   
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
   z-index: 0;
   width: 100%;
   height: 100vh;
   background-size: cover;
   background-position: center;
   backgorund-repeat: no-repeat;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   background-image: ${props => `url('images/${props.bgImage}')`};
`

const ItemText = styled.div`
   padding-top: 15vh;
   text-align: center;
   animation-name: fade;
   animation-duration: 0.8s;
   animation-iteration-count: 1; 
   animation-fill-mode: forwards;  
   animation-timing-function: ease-in;   
`

const ButtonGroup = styled.div`
   display: flex;
   margin-bottom: 30px;
   @media (max-width: 768px){
      flex-direction: column
   }
   animation-name: fade;
   animation-duration: 0.8s;
   animation-iteration-count: 1;
   animation-timing-function: ease-in;
   animation-fill-mode: forwards;
`
const LeftButton = styled.div`
   background-color: rgba(23, 26, 32, 0.8);
   height: 40px;
   width: 256px;
   color: #ffffff;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100px;
   opacity: 0.85;
   text-transform: uppercase;
   font-size: 12px;
   cursor: pointer;
   margin: 8px
`
const RightButton = styled(LeftButton)`
   background-color: #ffffff;
   opacity: 0.65;
   color: #000;
   
`

const DownArrow = styled(IoIosArrowDown)`
   font-size: 36px;
   overflow-x: hidden;
   margin-buttom: 5px;
   color: #000000;
   animation-name: animateDown;
   animation-duration: 1.5s;
   animation-iteration-count: infinite;
   animation-timing-function: ease-in-out;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`