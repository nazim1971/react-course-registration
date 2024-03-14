import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

// eslint-disable-next-line react/prop-types
const Courses = ({handleDatas}) => {

    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    }
        
    )

    return (
        <div className="md:w-[64%] " >                     
            <div className="md:grid md:grid-cols-3 md:gap-3 space-y-3 md:space-y-0 " >
            {
                courses.map((i,idx)=> <Course handleDatas={handleDatas} key={idx} course={i} ></Course>)
            }
            </div>
            
        </div>
    );
};

export default Courses;