import React, { useContext, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Form from '../common/Form'
import { EmployeeData } from '../context/EmployeeContext'

const EditUser = () => {
    const {data,setData} = useContext(EmployeeData)
    const { id } = useParams()
    const navigate = useNavigate();
    const findemployee = data.find((employee)=> employee.id === Number(id))
    const [employeeObj,setEmployeeObj] = useState(findemployee);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeObj({ ...employeeObj, [name]: value })
    }

   

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateData = data.map((employee) => employee.id === Number(id) ? {...employee,...employeeObj} : employee)
        setData(updateData)
        navigate("/");
    }
    return (
        <>
            <div className='p-10'>
                <Form handleSubmit={handleSubmit} handleChange={handleChange} employeeObj={employeeObj} />
            </div>
        </>
    )
}

export default EditUser
