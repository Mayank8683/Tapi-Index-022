import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const CartPage = ({ cart,setCart  }:any) => {
  const handleRemoveFromCart = (courseToRemove : any) => {
    setCart((prevCart:any) => prevCart.filter((course : any) => course !== courseToRemove));
  };

  return (
    <Box>
        <CartPage cart={cart} setCart={setCart} />
      <Text>Your Cart:</Text>
      {cart.map((course : any) => (
        <Box key={course.Title} bg={useColorModeValue('gray.200', 'gray.700')} p={4} rounded="md">
          <Text>{course.Title}</Text>
          <button onClick={() => handleRemoveFromCart(course)}>Remove</button>
        </Box>
      ))}
    </Box>
  );
};

export default CartPage;
