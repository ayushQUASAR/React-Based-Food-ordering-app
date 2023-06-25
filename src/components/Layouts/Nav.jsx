
import { NavLink, useLocation } from "react-router-dom";


const Nav = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <div className="nav">
        <NavLink className={pathname === '/Home' ? 'active' : 'bar'} exact to="/Home">
          <p>Home</p>
        </NavLink>
        <NavLink className={pathname === '/Menu' ? 'active' : 'bar'} to="/Menu">
          <p>Menu</p>
        </NavLink>
        <NavLink className={pathname === '/Contact' ? 'active' : 'bar'} to="/Contact">
          <p>Contact</p>
        </NavLink>
        <NavLink className={pathname === '/About' ? 'active' : 'bar'}to ='/About'>
          <p>About</p>
        </NavLink>
       
        <div  className="logo">Foody</div>
        
      </div>
    </>
  );
};

export default Nav;
