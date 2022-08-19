import logo from './logo.svg';
import './App.css';
 import {fetchUsers} from './actions'
 import {connect} from 'react-redux'
import { useEffect } from 'react';

function App({userInfo,fetchusers}) {
  let userslist=userInfo.users
  let error=userInfo.error
  let loading=userInfo.loading
  useEffect(()=>fetchusers(),[])
  // const petCount=useSelector((state)=>{return state.PetCountReducer})
  // const dispatch=useDispatch()
  return (
    <div className="App">
      {console.log(loading,userslist)}
      {loading&&<h2>loading...</h2>}
      {!loading&&error&&<h3>error occured</h3>}
      {userslist&&userslist.map((user,index)=><p id={index}>{user.name}</p>)}
      {/* <h2>number of pets:{petCount}</h2>
      <button onClick={()=>dispatch(PetIncrement(5))}>increment</button>
      <button onClick={()=>dispatch(Pet_countDecrement())}>decrement</button> */}
    </div>
  );
}
const mapStateProps=(state)=>{
  return {
        userInfo:state.userReducer
  }
}
const mapDispatchToprops=(dispatch)=>{
  return {
    fetchusers:()=>dispatch(fetchUsers())
  }
}
export default connect(mapStateProps,mapDispatchToprops) (App);
