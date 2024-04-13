import React, { useContext } from 'react'
import EmployeeContext, { EmployeeData } from '../context/EmployeeContext'

const Home = () => {
  const {data} = useContext(EmployeeData)
  return (
    <div>
      home hello
    </div>
  )
}

export default Home
