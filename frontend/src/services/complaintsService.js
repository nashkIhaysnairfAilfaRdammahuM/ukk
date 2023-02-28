import axios from 'axios'
const baseUrl = '/api/complaints'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const post = async (data, config) => {
  const response = await axios.post(baseUrl, data, config)
  return response.data
}

const complaintsService = {
  getAll,
  post
}

export default complaintsService