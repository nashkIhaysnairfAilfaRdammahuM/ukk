import { configureStore } from '@reduxjs/toolkit'
import complaintsReducer from './reducers/complaintsReducer'
import responsesReducer from './reducers/responsesReducer'
import usersReducer from './reducers/usersReducer'

const store = configureStore({
  reducer: {
    users: usersReducer,
    complaints: complaintsReducer,
    responses: responsesReducer
  }
})

export default store