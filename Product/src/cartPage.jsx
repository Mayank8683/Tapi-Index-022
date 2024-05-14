import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const CartPage = ({ cart,setCart }) => {
  const handleRemoveFromCart = (courseToRemove) => {
    setCart((prevCart) => prevCart.filter((course) => course !== courseToRemove));
  };

  return (
    <Box>
        <CartPage cart={cart} setCart={setCart} />
      <Text>Your Cart:</Text>
      {cart.map((course) => (
        <Box key={course.Title} bg={useColorModeValue('gray.200', 'gray.700')} p={4} rounded="md">
          <Text>{course.Title}</Text>
          <button onClick={() => handleRemoveFromCart(course)}>Remove</button>
        </Box>
      ))}
    </Box>
  );
};

export default CartPage;
