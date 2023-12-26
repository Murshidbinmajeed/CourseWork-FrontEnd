import React,{ useState} from 'react'; //useEffect,
import axios from 'axios';
import { Link } from "react-router-dom";
import {FaEdit,FaTrashAlt} from "react-icons/fa";


const InstanceView = () => {
    let [instances,setInstances] = useState ([]);
    const [sem, setSem] = useState([]);
    const [courses, setCourses] = useState([]);


     const handleSubmit = async () => {
        const result = await axios.get(
            'http://localhost/8083/api/viewAllInstances',
            {
                validateStatus: () => {
                    return true;
                },
            }
        );
        if (result.status === 302){
            setInstances(result.data);
            setSem(instances.semester);
        }
     };

     const handleDrop = async () =>{
         
     }

    //   const handleDrop = (event) => {
    //     event.preventDefault();
    //     setSelect(event.target.value);
    // };

     const handleDelete = async (instanceId) => {
        await axios.delete(
            `http://localhost:8083/api/delInstances`
        );
        handleSubmit();
    }

    
      



  return (
    <section>
        <div className='container mt-4'>
            <div className='mb-3 d-flex justify-content-center align-items-center col-6'>
                <input
                type="text"
                placeholder="Year"
                className='form-control me-2 small-textbox'
                id='year'
                aria-describedby='year'
                />
                <div className='col-6 text-center'>
                    <select className='form-select' aria-label='Default select example' onClick={handleDrop}>
                        <option value="" defaultValue>Select Semester</option>
                        {sem.map((sems, index)=>(
                            <option key={index} value={sems.sem}>{sems.sem}</option>
                        ))}
                    </select>
                </div>
                <div className='col-auto ms-1'>
                    <button type='button' className='ms-2 btn btn-primary' onClick={handleSubmit}>
                        List Instance
                    </button>
                </div>
            </div>
        </div>
      <table className="table table-bordered table-hover shadow">
        <thead>
            <tr className='text-center'>
                <th>Course Title</th>
                <th colSpan="2">Year-Sem</th>
                {/* <th>Course Code</th> */}
                <th colSpan="3">Actions</th>
            </tr>
        </thead>

        <tbody className='text-center'>
            {instances.map((instance, index)=>(
                <tr key={index}>
                    <td>{courses[index] ? courses[index].courseTitle : 'N/A'}</td>
                    {/* <td>{instance.instanceId}</td>                     */}
                    <td>{instance.year}-{instance.semester}</td>
                    <td>{courses[index] ? courses[index].courseCode : 'N/A'}</td>
                    <td className='mx-2'>
                        <Link to={{pathname:`/courses/${instance.instanceId}/edit`}} 
                        className="btn btn-primary"><FaEdit /></Link>
                    </td>
                    <td className='mx-2'>
                        <button
                        className='btn btn-danger'
                        onClick={() => handleDelete(
                            instance.instanceId)}><FaTrashAlt /></button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default InstanceView
