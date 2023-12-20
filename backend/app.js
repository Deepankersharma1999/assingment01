const express = require('express');
const cors = require('cors');
const mongoose = require('./db/connection');
const UserModel = require('./model/Userschema'); 
const bodyParser = require('body-parser');
const app = express();
const PORT = 2000;//We create a port number for backend
app.use(cors());
app.use(express.json());


app.get('/',async(req,res)=>{
  try{const users = await UserModel.find();
      console.log(users);
      res.json(users);}
  catch(error){console.log(error);}});
//Post Api

app.post('/Createuser', async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.delete('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    
    // Check if the user with the given ID exists
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the user
    await UserModel.findByIdAndDelete(userId);

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/updateuser/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/updateuser/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const { Firstname, Lastname,Email, Phone, Project } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { Firstname, Lastname,Email, Phone, Project },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});























app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`);
  });