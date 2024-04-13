import React, { createContext, useState } from 'react'

 export const EmployeeData = createContext()

const EmployeeContext = ({ children }) => {
    const [data, setData] = useState([{
        id: 1,
        FirstName: "Shlok",
        LastName: "Tripathi",
        Email: "shloak@123gmail.com",
        number: "12234444",
        postion: "react devloper"
    }]);
    return (
        <EmployeeData.Provider value={{data,setData} }>
            {children}
        </EmployeeData.Provider>
    )
}

export default EmployeeContext
