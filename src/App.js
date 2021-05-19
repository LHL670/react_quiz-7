import React, { Component } from "react";
import LoginControl from "./loginCon";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <LoginControl />
        </section>
      </div>
    );
  }
}
export default App;