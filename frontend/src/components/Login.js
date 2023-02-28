import {
  useNavigate
} from "react-router-dom"

const Login = (props) => {
  const navigate = useNavigate()
  return (
    <div>
      <form onSubmit={props.handleLogin}>
        <h2>Login</h2>
        <label htmlFor='username'>Username</label>
        <br />
        <input type='text' value={props.username} onChange={(event) => props.setUsername(event.target.value)} />
        <br />
        <label htmlFor='password'>Password</label>
        <br />
        <input type='password' value={props.password} onChange={(event) => props.setPassword(event.target.value)} />
        <br />
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => navigate('/register')}>Registrasi</button>
    </div>
  )
}

export default Login