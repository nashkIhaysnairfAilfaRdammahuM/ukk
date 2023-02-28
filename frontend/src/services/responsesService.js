import axios from "axios";
const baseUrl = 'http://localhost:3001/responses'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const post = async (data, config) => {
  const response = await axios.post(baseUrl, data, config)
  return response.data
}

const responsesService = {
  getAll,
  post
}

export default responsesService