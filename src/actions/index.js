export const PetIncrement=(number)=>{
    console.log("pet increment")
    return {type:"PETCOUNTINCREMENT",payload:number}
}
export const Pet_countDecrement=()=>{
    return {type:"PETCOUNTDECREMENT"}
}
export const getUsers=()=>{
    return {type:"GETUSERREQUEST"}
}
export const getUserSuccess=(users)=>{
 return {type:"GETUSERSUCCESS",payload:users}
}
export const getUserReqFailure=(error)=>{
    return {type:"GETUSERREQFALIURE",payload:error}
}
export const fetchUsers=()=>{
    return (dispatch)=>{
       dispatch((getUsers()))
       fetch("https://jsonplaceholder.typicode.com/users").
       then(response=>response.json()).then(data=>dispatch(getUserSuccess(data)))
       .catch(err=>dispatch(getUserReqFailure(err)))
    }
}