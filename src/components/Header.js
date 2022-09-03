import { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { selectCars} from '../features/counter/car/carSlice';
import { useSelector } from 'react-redux';
import { selectedOptions } from '../features/options/optionSlice';
import { mobile } from '../responsive'

const Header = ({ burgerStatus, setBurgerStatus }) => {
   const cars = useSelector(selectCars);
   const options = useSelector(selectedOptions);
   
  return (
    <Container>
      <a>
         <img src='images/logo.svg' />
      </a>
      <Menu>
         {cars && cars.map((car, index) => (
               <a key={index} href='#'>{car}</a>
         ))}
      </Menu>
      <RightMenu>
         <Wrap>
            <a href='#'>Shop</a>
            <a href='#'>Tesla Account</a>
         </Wrap>
         <CustomMenu onClick={() => setBurgerStatus(!burgerStatus)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
         <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(!burgerStatus)}/>
         </CloseWrapper>
         {options && options.map((option, index) => (
               <li><a key={index} href='#'>{option}</a></li>
         ))}
      </BurgerNav>
      
    </Container>
  );
}

export default Header;

const Container = styled.div`
   width: 100%;
   min-height: 60px;
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 20px;
   top: 0;
   right: 0;
   left: 0;
   z-index: 1;

   ${mobile({ width: '95%' })}
`

const Menu = styled.div`
   display: flex;
   align-items: center;
   flex: 1;
   justify-content: center;

   a{
      font-weight: 540;
      text-transform: capitalize;
      padding: 0 10px;
      flex-wrap: nowrap;
      white-space: nowrap;
   }

   @media (max-width: 1100px){
      display: none;
   }

   
`
const Wrap = styled.div`
   ${mobile({ display: 'none' })}
`

const RightMenu = styled.div`
   display: flex;
   align-items: center;
   
   
   a{
      font-weight: 540;
      text-transform: capitalize;
      margin-right: 10px;
      flex-wrap: nowrap;
      white-space: nowrap;
   }
`

const CustomMenu = styled(FaBars)`
   width: 20px;
   cursor: pointer;
`

const BurgerNav = styled.div`
   position: fixed;
   background: #ffffff;
   top: 0;
   right: 0;
   button: 0;
   list-style-type: none;
   width: 250px;
   z-index: 1;
   height: 100%;
   padding: 20px;
   text-align: left;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
   transition: all 0.6s;

   li{
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      :hover{
         background-color: rgba(0, 0, 0, 0.1);
         transform: translateY(3px);
      }

      a{
         font-weight: 600;
         display: block;
      }
   }

   ${mobile({ width: '200px', overflow: 'scroll' })}
`

const CustomClose = styled(FaTimes)`
   cursor: pointer;
   font-size: 20px;
   font-weight: 300;
   
   :hover{
      background-color: aliceblue;
      border-radius: 50%;
   }
   ${mobile({ marginRight: '20px' })}
`

const CloseWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   margin-bottom: 0;
`