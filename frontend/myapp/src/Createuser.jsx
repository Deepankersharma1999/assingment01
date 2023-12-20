import React, { useState } from 'react'
import axios from 'axios'


const Createuser = () => {

  const [Firstname, setFirstName] = useState('');
  const [Lastname, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Project, setProject] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:2000/Createuser', { Firstname, Lastname, Email, Phone, Project })
      .then((result) => {
        console.log(result.data);
        alert('Your Client was Created');
        window.location.reload(); // Reload the page after showing the alert
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="h3">Create</div>
          <form onSubmit={Submit}>
            <div class="form-group">
              <label for="html">First Name:</label>
              <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter your First Name"
                onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div class="form-group">
              <label for="=html">Last Name:</label>
              <input type="text" class="form-control" id="lastname" placeholder="Enter your Last Name"
                onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div class="form-group">
              <label for="html">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)} />
            </div>


            <div class="form-group">
              <label for="html">Mobile No</label>
              <input type="text" class="form-control" id="phone" placeholder="Enter Your Phone Number"
                onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div class="form-group">
              <label for="html">Project:</label>
              <input type="text" class="form-control" id="project" placeholder="Enter your Project"
                onChange={(e) => setProject(e.target.value)} />
            </div>


            <button type="submit" class="btn btn-primary mt-3 mb-1">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Createuser