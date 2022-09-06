import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = ({ burgerStatus }) => {
  return (
    <Container blur={burgerStatus}>
      <Section 
         title = 'Model S'
         description = 'Order Online for Touchless Delivery'
         backgroundImg = 'model-s.jpg'
         leftTxtBtn = 'Custom Order'
         rightTxtBtn= 'Existing Inventory'      
         />
      <Section 
         title = 'Model Y'
         description = 'Order Online for Touchless Delivery'
         backgroundImg = 'model-y.jpg'
         leftTxtBtn = 'Custom Order'
         rightTxtBtn= 'Existing Inventory'      
         />
      <Section 
         title = 'Model 3'
         description = 'Order Online for Touchless Delivery'
         backgroundImg = 'model-3.jpg'
         leftTxtBtn = 'Custom Order'
         rightTxtBtn= 'Existing Inventory'      
         />
      <Section 
         title = 'Model X'
         description = 'Order Online for Touchless Delivery'
         backgroundImg = 'model-x.jpg'
         leftTxtBtn = 'Custom Order'
         rightTxtBtn= 'Existing Inventory'      
         />
      <Section 
         title = 'Lowest Cost Solar Panels in America'
         description = 'Money-back guarantees'
         backgroundImg = 'solar-panel.jpg'
         leftTxtBtn = 'Order Now'
         rightTxtBtn= 'Learn more'      
         />
      <Section 
         title = 'Solar for New Roofs'
         description = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
         backgroundImg = 'solar-roof.jpg'
         leftTxtBtn = 'Order Now'
         rightTxtBtn= 'Learn more'      
         />
      <Section 
         title = 'Accessories'
         description = ''
         backgroundImg = 'accessories.jpg'
         leftTxtBtn = 'Shop Now'      
         />
    </Container>
  );
}

export default Home;

const Container = styled.div`
   height: 100vh;
   overflow: ${props => props.blur ? 'hidden' : 'visible' };
`
