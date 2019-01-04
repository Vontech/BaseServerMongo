import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Event from "./components/Event";
import EventModel from "./models/EventModel";

import Sidepane from "./components/Sidepane";

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div style={styles.appcontainer}>
        <Sidepane style={styles.sidepane} />
      </div>
    );
  }
}

const styles = {
  appcontainer: {
    
  },
  sidepane: {
    width: 200
  }
  
}

export default App;
