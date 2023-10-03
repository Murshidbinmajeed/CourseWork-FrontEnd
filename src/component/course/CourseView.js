import React, { useEffect, useState } from 'react'
import axios from "axios";
import {FaTrashAlt} from "react-icons/fa";

const CourseView = () => {
  const[courses, setCourses] = useState([]);

  useEffect(()=>{
    loadCourses();
  }, []);

  const loadCourses = async()=>{
    const result = await axios.get(
        "http://localhost:8083/api/viewAllCourses"
    );
    setCourses(result.data)
  }
  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
        <tr className='text-center'>
            <th>Course Id</th>
            <th>Course Title</th>
            <th>Course Code</th>
            <th colSpan="3">Actions</th>
        </tr>
        </thead>

        <tbody className='text-center'>
            {courses.map((course, index)=>(
                <tr key={course.id}>
                    <th scope="row" key={index}>
                        {index + 1}
                    </th>
                    <td>{course.courseTitle}</td>
                    <td>{course.courseCode}</td>
                    <td className='mx-2'>
                        <button className='btn btn-info'>
                        View</button></td>
                    <td className='mx-2'><button className='btn btn-danger'><FaTrashAlt /></button></td>
                </tr>
            ))}
        </tbody>
      </table>
    </section>
  )
}

export default CourseView
