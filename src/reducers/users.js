
const initialState={
    users:[],
    loading:false,
    error:null
}

export default function userReducer(state=initialState,action){
switch(action.type){
    case "GETUSERREQUES":
        return {...state,loading:true}  
    case  "GETUSERSUCCESS":
        return {users:action.payload,loading:false}
    case "GETUSERREQFALIURE":
        return {loading:false,error:action.payload}
    default:
        return state
}
}