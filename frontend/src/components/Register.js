const Register = (props) => {
  return (
    <div>
      <form onSubmit={props.handleRegister}>
        <label htmlFor='newNik'>NIK</label>
        <br />
        <input type='text' value={props.newNik} onChange={(event) => props.setNewNik(event.target.value)} />
        <br />
        <label htmlFor='newName'>Nama</label>
        <br />
        <input type='text' value={props.newName} onChange={(event) => props.setNewName(event.target.value)} />
        <br />
        <label htmlFor='newUsername'>Username</label>
        <br />
        <input type='text' value={props.newUsername} onChange={(event) => props.setNewUsername(event.target.value)} />
        <br />
        <label htmlFor='newPassword'>Password</label>
        <br />
        <input type='text' value={props.newPassword} onChange={(event) => props.setNewPassword(event.target.value)} />
        <br />
        <label htmlFor='newPhoneNumber'>Nomor Telepon</label>
        <br />
        <input type='text' value={props.newPhoneNumber} onChange={(event) => props.setNewPhoneNumber(event.target.value)} />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register