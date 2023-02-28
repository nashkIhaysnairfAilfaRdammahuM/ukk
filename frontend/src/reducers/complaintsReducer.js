import { createSlice } from "@reduxjs/toolkit";
import complaintsService from "../services/complaintsService";

const complaintsSlice = createSlice({
  name: 'complaints',
  initialState: [],
  reducers: {
    setState(state, action) {
      return action.payload
    },
    appendState(state, action) {
      state.push(action.payload)
    }
  }
})

export const fetchComplaints = () => {
  return async (dispatch) => {
    const fetchedComplaints = await complaintsService.getAll()
    dispatch(setState(fetchedComplaints))
  }
}

export const addComplaint = (data, config) => {
  return async (dispatch) => {
    const addedComplaint = await complaintsService.post(data, config)
    dispatch(appendState(addedComplaint))
  }
}

export const { setState, appendState } = complaintsSlice.actions
export default complaintsSlice.reducer