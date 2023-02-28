import { createSlice } from "@reduxjs/toolkit";
import responsesService from "../services/responsesService";

const responsesReducer = createSlice({
  name: 'responses',
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

export const fetchResponses = () => {
  return async (dispatch) => {
    const fetchedResponses = await responsesService.getAll()
    dispatch(setState(fetchedResponses))
  }
}

export const addResponse = (data, config) => {
  return async (dispatch) => {
    const addedResponse = await responsesService.post(data, config)
    dispatch(appendState(addedResponse))
  }
}

export const { setState, appendState } = responsesReducer.actions
export default responsesReducer.reducer