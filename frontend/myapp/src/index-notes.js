import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import "./index.css"

// img variable creating
const img1="https://picsum.photos/200/300"

ReactDOM.render(
  <>
    {/* write a text in react */}
    <h1>hello world</h1>

    {/* write a text in react and use inline css */}
    <h2 style={{ marginTop: 30, fontSize: 50 }}>Margin Top With inline css </h2>


    {/*how to set image tap link in open image */}
    <img src={img1}alt='img1'></img>
    

    {/* extranal css */}
    <p class='p1'>Note: In JSX, JavaScript expressions are written 
      inside curly braces, and since JavaScript objects 
      also use curly braces,the styling in the example
       above is written</p>


    {/* using bootstrap classes */}
    <center>
    <button className='btn btn-outline-success'>Pandat</button>
    </center>


    













  </>,
  document.getElementById('root')
);
