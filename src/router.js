import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import SignIn from "./SignIn";

export default class MyRoute extends React.Component{
    render(){
        return(
            <Router>
                <Link to='/Sign in'></Link>
                <Switch>
                    <Route exact path="/" component={SignIn}/> 
                    <Route path="/Sign in" component={App}/>
                </Switch>
            </Router>
        )
    }  
}