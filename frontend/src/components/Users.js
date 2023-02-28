const Users = (props) => {
  if (!props.users) {
    return null
  }
  
  return (
    <div>
      <h2>Daftar pengguna</h2>
      <ul>
        {props.users.map((user) => user.level !== 'admin'
          ? <li key={user.id}>
              {user.name}, level: {user.level}
              <select value={user.level} onChange={(event) => props.handleUserEdit(user.id, {...user, level: event.target.value})}>
                <option value='masyarakat'>masyarakat</option>
                <option value='petugas'>petugas</option>
              </select>
            </li>
          : null
        )}
      </ul>
      <div>
        <h3>Tambah pengguna</h3>
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
          <label htmlFor='newLevel'>Level pengguna</label> <select value={props.newLevel} onChange={(event) => props.setNewLevel(event.target.value)}>
            <option value='masyarakat'>masyarakat</option>
            <option value='petugas'>petugas</option>
          </select>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Users