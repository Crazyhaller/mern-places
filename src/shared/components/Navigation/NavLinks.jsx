import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'
import './NavLinks.css'

function NavLinks() {
  const auth = useContext(AuthContext)

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact="true">
          All Users
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">My Places</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">Add Place</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      )}
    </ul>
  )
}

export default NavLinks
