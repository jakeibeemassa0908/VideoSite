import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main role="main" class="container">
        <Movies />
      </main>
    );
  }
}

export default App;
