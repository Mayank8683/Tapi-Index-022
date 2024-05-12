
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Radio,
  HStack,
  RadioGroup,
} from '@chakra-ui/react'

export const EnrollNowForm=({})=> {
  const [studentName, setStudentName] = useState('');
  const [studentemail,setStudentEmail]=useState('')

  return (
 <div className='EnrolFormDiv' style={{width:'50%', height:'auto', border:'1px solid #07183c'}}>
 <FormControl isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' />
  <FormLabel>Email</FormLabel>
  <Input placeholder='Email type here ex.(asd@gmail.com)' />
</FormControl>
  <form>
    <option value="1">Web</option>
    <option value="1">Web</option>
    <option value="1">Web</option>
  </form>

 </div>
  );
}