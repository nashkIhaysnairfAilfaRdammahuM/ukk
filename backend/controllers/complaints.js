const complaintsRouter = require('express').Router()
const Complaint = require('../models/complaint')
const multer = require('multer')
const fs = require('fs')

const upload = multer({ dest: 'images/' })

complaintsRouter.get('/', async (request, response) => {
  const complaints = await Complaint.find({})
  response.status(200).json(complaints)
})

complaintsRouter.get('/:id/image', async (request, response) => {
  const complaint = await Complaint.findById(request.params.id)
  
  const readStream = fs.createReadStream(`images/${complaint.image}`)
  readStream.pipe(response)
})

complaintsRouter.post('/', upload.single('complaintImage'), async (request, response) => {  
  const complaint = new Complaint({
    ...JSON.parse(request.body.description),
    image: request.file.filename,
    date: new Date().toISOString()
  })

  const savedComplaint = await complaint.save()
  response.status(201).json(savedComplaint)
})

module.exports = complaintsRouter