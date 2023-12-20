import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';





const Updateuser = () => {


  const { id } = useParams();
  const [Firstname, setFirstName] = useState('');
  const [Lastname, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Project, setProject] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:2000/updateuser/${id}`)
      .then(result => {
        const userData = result.data;
        setFirstName(userData.Firstname);
        setLastName(userData.Lastname);
        setEmail(userData.Email);
        setPhone(userData.Phone);
        setProject(userData.Project);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:2000/updateuser/${id}`, {
        Firstname,
        Lastname,
        Email,
        Phone,
        Project,
      });

      console.log(response.data); // Output: User updated successfully

      // Optionally, you can navigate to a different page after a successful update
      navigate("./src/Viewuser");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row col-lg-8">
          <div className="h1">Update Client Details</div>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <inpuT type="text" className="form-control" id="firstname" placeholder="Enter your first name"
                value={Firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label htmlFor="LastName">Last Name:</label>
              <inpuT type="text" className="form-control" id="lastname" placeholder="Enter your Last Name"
                value={Lastname}
                onChange={(e) => Lastname(e.target.value)}
              />

             <label htmlFor="Email">Email:</label>
              <inpuT type="email" className="form-control" id="email" placeholder="Enter your email"
                value={Email}
                onChange={(e) => Lastname(e.target.value)}
              />



              <label htmlFor="firstName">Mobile NO:</label>
              <inpuT type="text" className="form-control" id="phone" placeholder="Enter your Phone Number"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="firstName">Project:</label>
              <inpuT type="text" className="form-control" id="project" placeholder="Enter your Project"
                value={Project}
                onChange={(e) => setProject(e.target.value)}
              />
            </div>


            <button type="button" className="btn btn-primary mt-5" onClick={handleUpdate}>
              Update
            </button>
          </form>

        </div>
      </div>

    </div>
  )
}

export default Updateuser