import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./SignIn";
import Todo from "./todoapp";

function UserGreeting(props) {
  return   (
    <div>
      <h1 style={headerStyle} > Hi CGUer, please sign in.</h1>
      <SignIn/>
    </div>
  )
   
}
const headerStyle = {
  background:"black",
  color: "#fff",
  textAlign: 'center',
  padding: '10px'

}
function GuestGreeting(props) {
    return  (
      <div>
        <h1 color="red"> Welcome back, CGUER!</h1>
        <Todo/>
      </div>
    )
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <GuestGreeting />;
    
  } else {
    return <UserGreeting />;
  }
}
ReactDOM.render(
    <Greeting isLoggedIn={false} />, 
    document.getElementById('root')
);
export default Greeting;
