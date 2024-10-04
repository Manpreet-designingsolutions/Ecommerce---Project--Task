import React from 'react';
import useUsersStore from '../../App/UsersStore';

const UserListing = () => {
    const { registeredUsers, resetUsers } = useUsersStore();
    // const handleDelete = () => {
    //     resetUsers();
    // }
  return (
      <div className='h-screen overflow-x-scroll'>
          <table className='bg-gray-200  w-full mt-5 px-10 min-w-full '>
              <thead>
                  <tr className='bg-sky-800 '>
                      <th className='font-bold text-white px-10  '>Sr No.</th>
                      <th className='font-bold text-white px-10'>Username</th>
                      <th className='font-bold text-white px-10'>Email</th>
                      <th className='font-bold text-white px-10'>UserType</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      registeredUsers.length > 0 && registeredUsers.map(
                          (user, index) => {
                              return (
                                  <tr key={index}>
                                      <td className='text-center font-semibold px-10'>{index + 1}</td>
                                      <td className='text-left font-semibold px-10 '>{user.username}</td>
                                      <td className='text-left font-semibold px-10'>{user.email}</td>
                                      <td className='text-center font-semibold px-10'>{user.userType}</td>
                                  </tr>
                              )
                          }
                      )
                  }
              </tbody>
          </table>
      </div>
  )
}

export default UserListing
