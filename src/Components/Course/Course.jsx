import { FaDollarSign,FaBookOpen } from "react-icons/fa";
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Course = ({course,handleDatas}) => {
    const {name,description,photo,price,credit} = course;
    return (
        <div >
           <div className="p-4 bg-white space-y-2 rounded-2xl ">
             <img className="w-full" src={photo} alt={`Courses photo ${name}`} />
            <h3 className=' font-bold' >{name}</h3>
            <p className="text-[#1717177b]">{description} </p>
            <div className="flex justify-between text-sm">
                <p className="flex items-center gap-1" > <FaDollarSign></FaDollarSign> Price: <span className="text-red-600 font-semibold">{price}</span> </p>
                <p className="flex items-center gap-1" >  <FaBookOpen></FaBookOpen> Credit: <span className="text-red-600 font-semibold">{credit}</span>Hr </p>
            </div>
            <button onClick={()=>handleDatas(course)} className="btn w-full bg-blue-600 text-white" >Select</button>
            </div>

        </div>
    );
};

Course.propTypes = {
    course: PropTypes.array.isRequired
};

export default Course;