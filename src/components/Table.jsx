import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import EmployeeContext, { EmployeeData } from '../context/EmployeeContext'

const Table = () => {
     const {data} = useContext(EmployeeData)
    
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">

                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Position
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((employee,index) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                                    <td className="w-4 p-4">
                                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                            <span className="font-medium text-gray-600 dark:text-gray-300">
                                                {employee.FirstName.toUpperCase().charAt(0) + employee.LastName.toUpperCase().charAt(0)}</span>
                                        </div>
                                    </td>
                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">{employee.FirstName}</div>
                                            <div className="font-normal text-gray-500">{employee.Email
                                            }</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        {employee.postion}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            {employee.number}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link to={`/edit/${employee.id}`} type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</Link>

                                    </td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
