import { createSlice } from "@reduxjs/toolkit";
import usersService from "../services/usersService";

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setState(state, action) {
      return action.payload
    },
    appendState(state, action) {
      state.push(action.payload)
    },
    updateState(state, action) {
      return state.map((user) => user.id === action.payload.id ? action.payload : user)
    }
  }
})

export const fetchUsers = () => {
  return async (dispatch) => {
    const fetchedUsers = await usersService.getAll()
    dispatch(setState(fetchedUsers))
  }
}

export const addUser = (data, config) => {
  return async (dispatch) => {
    const addedUser = await usersService.post(data, config)
    dispatch(appendState(addedUser))
  }
}

export const editUser = (id, data, config) => {
  return async (dispatch) => {
    const editedUser = await usersService.put(id, data, config)
    dispatch(updateState(editedUser))
  }
}

export const { setState, appendState, updateState } = usersSlice.actions
export default usersSlice.reducer