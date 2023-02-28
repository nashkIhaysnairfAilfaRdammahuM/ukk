import axios from "axios";
const baseUrl = '/api/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const post = async (data, config) => {
  const response = await axios.post(baseUrl, data, config)
  return response.data
}

const put = async (id, data, config) => {
  const response = await axios.put(`${baseUrl}/${id}`, data, config)
  return response.data
}

const usersService = {
  getAll,
  post,
  put
}

export default usersService