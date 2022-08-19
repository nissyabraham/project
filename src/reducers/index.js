import { combineReducers } from "redux";
import PetCountReducer from "./PetCounter";
import userReducer from "./users";
const reducer=combineReducers({PetCountReducer,userReducer})
export default reducer
