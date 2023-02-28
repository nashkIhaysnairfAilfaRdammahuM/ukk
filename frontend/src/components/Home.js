import {
  Link
} from "react-router-dom"

const Home = (props) => {
  return (
    <div>
      <h1>Pengaduan</h1>
      <ul>
      {props.complaints.map((complaint) => 
        <li key={complaint.id}>
          <Link to={`/complaints/${complaint.id}`}>{complaint.content}</Link>
        </li>
      )}
      </ul>
      <div>
        <h2>Tambah pengaduan</h2>
        <form onSubmit={props.handleComplaintSubmit} encType='multipart/form-data'>
          <label htmlFor='newComplaint'>Isi pengaduan</label>
          <br />
          <input id='newComplaint' type='text' value={props.newComplaint} onChange={(event) => props.setNewComplaint(event.target.value)} />
          <br />
          <label htmlFor='complaintImage'>Foto pengaduan</label>
          <br />
          <input id='complaintImage' type='file' onChange={(event) => props.setComplaintImage(event.target.files[0])} />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Home