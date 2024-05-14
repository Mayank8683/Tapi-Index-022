import React, { useState, useEffect } from 'react';
import { Box, Image, Badge, Text, Button, Grid, HStack, useColorModeValue } from '@chakra-ui/react';
// import CartPage from '../cartPa';


const CourseCard = ({}) => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage  = 20;

  useEffect(() => {
    fetch('https://course-api-jo5j.onrender.com/courses')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  const handleAddToCart = (course : any) => {
    setCart((prevCart): any => [...prevCart, course]);
  };

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage; 
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  }

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Button key={i}
          onClick={() => handlePageChange(i)}
          colorScheme={currentPage === i ? 'teal' : 'blue'}
        >
          {i}
        </Button>
      );
    }
    return (
      <HStack mt={4} spacing={4} justifyContent="center">{pageNumbers}</HStack>
    );
  };

  return (
    <>
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {currentCourses.map((course: any) => (
        //    <CartPage cart={cart} />
          <Box
           
            key={course.Title}
            bg={useColorModeValue('white', 'gray.800')}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
          >
            <Image src={course.image } alt={`${course.Title} Thumbnail`} roundedTop="lg" />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge rounded="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {course.Rating} &bull; {course['instructor-name']}
                </Box>
              </Box>

              <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {course.Title}
              </Box>

              <Text mt="2" noOfLines={2}>
                {course.Description}
              </Text>

              <Box>
                <Box as="span" color="gray.600" fontSize="sm">
                  {course.hours}
                </Box>
              </Box>

              <Button mt="4" colorScheme="teal" variant="outline" onClick={() => handleAddToCart(course)}>
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
      {renderPagination()}
      
    </Box>
   
   
    </>
  );
};

export default CourseCard;
