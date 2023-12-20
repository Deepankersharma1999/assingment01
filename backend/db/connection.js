const mongoose= require('mongoose');
var connection=mongoose.connect("mongodb+srv://deepankersharma06:9711731607mi@cluster0.q1roi6n.mongodb.net/test?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology: true


})

.then(()=>console.log("connection succesfull..."))
.catch((err)=>console.log(err));

module.exports = connection;