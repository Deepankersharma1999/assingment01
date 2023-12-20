 import {NavLink} from 'react-router-dom'
 
 
 
 function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-light">

<div className="container-fluid">

  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink to='/' className="nav-link">Home </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to='/About' className="nav-link">Aboutus</NavLink>
    </li>

    <li className="nav-item">
      <NavLink to='/Services' className="nav-link">Services</NavLink>
    </li>

    
    <li className="nav-item">
      <NavLink to='/Regform' className="nav-link">Registration</NavLink>
    </li>

    
    <li className="nav-item">
      <NavLink to='/Loginform' className="nav-link">Login</NavLink>
    </li>


    
    <li className="nav-item">
      <NavLink to='/Contactform' className="nav-link">Contact Us</NavLink>
    </li>


  </ul>
</div>

</nav>

    
        </>
    )
}

export default Header