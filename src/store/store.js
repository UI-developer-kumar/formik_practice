import { combineReducers,createStore } from 'redux'
import counterReducer from '../counterReducer'
import todoReducer from '../todoReducer'


const store = createStore(combineReducers({counterR:counterReducer,todoR:todoReducer}))

export default store
