import {Outlet, Link, useNavigate} from "react-router-dom"


const UserLayout = () => {
  const id = 1;

  const navigate = useNavigate();
  const logOutHandler = () => {
    navigate("/", {replace: true});
  }
  return (
    <div className="wrapper2">
      <div className="nav">
        <ul>
          <li>
            <Link to="Info">Info</Link>
          </li>
          <li>
            <Link to={
              `${id}/edit`
            }>Edit</Link>
          </li>
          <li onClick={logOutHandler}>Logout</li>
        </ul>
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default UserLayout
