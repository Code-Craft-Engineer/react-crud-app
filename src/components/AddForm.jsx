import React, { useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../common/Form'
import { EmployeeData } from '../context/EmployeeContext'
import { useFormik } from 'formik';
import { signUpSchema } from '../utils/validation';

const AddForm = () => {
    const { setData } = useContext(EmployeeData)
    const navigate = useNavigate()
    const [employee, setEmployee] = useState({})

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setEmployee({ ...employee, [name]: value, id: Math.floor(Math.random() * 1000) })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setData(pre => [...pre, employee])
    //     navigate("/");
    // }
    const initialValues = {
        FirstName: '',
        LastName: '',
        Email: '',
        number: '',
        postion: ''
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit: (values,action) => {
            console.log(values);
            action.resetForm()
        },
    });

    // console.log(errors);
    return (
        <>
            <div className='p-10'>
                <Form handleChange={handleChange} handleSubmit={handleSubmit} employeeObj={values} errors={errors} touched={touched} handleBlur={handleBlur} />
            </div>
        </>
    )
}

export default AddForm;
