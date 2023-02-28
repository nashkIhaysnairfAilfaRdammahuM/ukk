import { Link } from "react-router-dom"

const Navbar = (props) => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/users'>Users</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Navbar