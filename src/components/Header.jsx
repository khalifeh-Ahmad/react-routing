import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <h1>Learn code</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="Faq">Faq</NavLink>
        </li>
        <li>
          <NavLink to="Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="User">User</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
