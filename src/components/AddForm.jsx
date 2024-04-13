import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Form from '../common/Form'
import { EmployeeData } from '../context/EmployeeContext'

const AddForm = () => {
    const {setData} = useContext(EmployeeData)
    const navigate = useNavigate()
    const [employee, setEmployee] = useState({})
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value,id:Math.floor(Math.random() *1000) })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(pre => [...pre, employee])
        navigate("/");
    }
    return (
        <>
            <div className='p-10'>
                <Form handleChange={handleChange} handleSubmit={handleSubmit} employeeObj={employee}/>
            </div>
        </>
    )
}

export default AddForm
