const Complaint = (props) => {
  if (!props.complaint) {
    return null
  }
  
  const date = new Date(props.complaint.date)
  const weekdays = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu']
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  
  return (
    <div>
      <h2>Pengaduan dari {props.complaint.user}</h2>
      <p>pada hari {weekdays[date.getDay() - 1]}, {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</p>
      <img src={`/api/complaints/${props.complaint.id}/image`} alt={props.complaint.content} />
      <h3>Isi pengaduan</h3>
      <p>{props.complaint.content}</p>
      {props.complaint.response
        ? <div>
            <h3>Tanggapan</h3>
            <p>{props.complaint.response}</p>
          </div>
        : <div>
            <h3>Tambah tanggapan</h3>
            <form onSubmit={props.handleResponseSubmit}>
              <label htmlFor='newResponse'>Isi tanggapan</label>
              <br />
              <input type='text' value={props.newResponse} onChange={(event) => props.setNewResponse(event.target.value)} />
              <br />
              <button type='submit'>Submit</button>
            </form>
          </div>
      }
    </div>
  )
}

export default Complaint