import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Viewuser = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2000/')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err));
  }, []);



  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:2000/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.message);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
        <div className="h3">Clients</div>

      <table class="table">
        <thead>
          <tr  className='bg-dark'>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile NO</th>
            <th scope="col">Project</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.Firstname}</td>
              <td>{user.Lastname}</td>
              <td>{user.Email}</td>
              <td>{user.Phone}</td>
              <td>{user.Project}</td>
              <td>
                <Link onClick={() => handleDelete(user._id)}>Delete</Link>|
                <Link to={`/Updateuser/${user._id}`}>Update</Link>
              </td>


            </tr>

          ))}
        </tbody>
      </table>
    </div>

  )
}

export default Viewuser