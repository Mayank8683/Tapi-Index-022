import React, { useEffect, useState } from "react";
import { Course } from "../interface/interface";
import { CourseCard } from "./CourseCard";
import { ChakraProvider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


interface CourseListProps {
  courses: Course[];
}

export const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  
  const navigate=useNavigate();

  const handleBackPage=()=>{
    navigate('/CertificationPage');
  }
  return (
    <div className="courseList" style={{width:'100%' }}>
 <div className="courseList" style={{height:'5rem', width: '100%',color:'antiquewhite', textAlign: 'center', backgroundColor:'#07182c' , backgroundSize: 'cover', padding:'1rem' }}>

     <b> Upcoming Start Dates</b>
<p>Choose the time that best fits your schedule</p>
    </div>
<div style={{width:'90%', margin:'0 5% 0 5%'}}>
 <div style={{display:'flex', justifyContent:'space-evenly', marginLeft:'10rem',padding:'1rem',color:'#444242'}}>
 <b>DATES</b>
<b>HOURS</b>
<b>INSTRUCTOR</b>
 </div>
{courses.map((course, index) => (
        <ChakraProvider><CourseCard key={index} course={course} /></ChakraProvider>
      ))}
</div>
         <button onClick={handleBackPage} style={{padding:"0.1rem 0.6rem 0.1rem 0.6rem", backgroundColor:"#912729",color:'antiquewhite',borderRadius:'10px',margin:'1% 0 0 50%'}}> X </button>
    </div>
  );
};
