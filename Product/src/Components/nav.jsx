// import React from 'react';
// import {
//   Box,
//   Flex,
//   Heading,
//   HStack,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   useDisclosure,
//   Stack,
//   Link,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

// const NavLink = ({ children, path }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: 'gray.200',
//     }}
//     href={path}
//   >
//     {children}
//   </Link>
// );

// const Navbar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box bg={'white'} boxShadow={'md'} py={4}>
//       <Flex h={16} alignItems={'center'} justifyContent={'space-between'} maxW={'1200px'} mx={'auto'}>
//         <IconButton
//           size={'md'}
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           aria-label={'Open Menu'}
//           display={{ md: 'none' }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack spacing={8} alignItems={'center'}>
//           <Heading as={'h1'} size={'lg'} color={'green.500'}>
//             Product School
//           </Heading>
//           <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
//             <NavLink path={'#'}>Categories</NavLink>
//             <Menu>
//               <MenuButton as={Button} rightIcon={<AddIcon />}
//               _hover={{bg:'grey.100'}}
//               _expanded={{bg:'gray.100'}}
//               >
//                 Instructors
//               </MenuButton>
//               <MenuList>
//                 <MenuItem>Teach on Udemy</MenuItem>
//                 <MenuItem>Instructor Training</MenuItem>
//               </MenuList>
//             </Menu>
//           </HStack>
//         </HStack>
//         <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
//           <NavLink path={'#'}>
//             <Button variant={'outline'}>Sign In</Button>
//           </NavLink>
//           <NavLink path={'#'}>
//             <Button colorScheme={'black'} variant={'solid'}>
//               Sign Up
//             </Button>
//           </NavLink>
//         </HStack>
//       </Flex>

//       {isOpen ? (
//         <Box pb={4} display={{ md: 'none' }}>
//           <Stack as={'nav'} spacing={4}>
//             <NavLink path={'#'}>Categories</NavLink>
//             <NavLink path={'#'}>Instructors</NavLink>
//             <NavLink path={'#'}>
//               <Button variant={'outline'}>Sign In</Button>
//             </NavLink>
//             <NavLink path={'#'}>
//               <Button colorScheme={'black'} variant={'solid'}>
//                 Sign Up
//               </Button>
//             </NavLink>
//           </Stack>
//         </Box>
//       ) : null}
//     </Box>
//   );
// };

// export default Navbar;