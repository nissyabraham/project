export default function PetCountReducer(state=20,action){
    switch(action.type){
        case "PETCOUNTINCREMENT":
            return state+action.payload
        case "PETCOUNTDECREMENT":
            return state-1
        default:
            return state
    }
}