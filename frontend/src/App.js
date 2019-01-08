import React, { Component } from "react";
import logo from "./logo.svg";
import Event from "./components/Event";
import EventModel from "./models/EventModel";
import Colors from "./colors";

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
    height: '100%'
  },
  sidepane: {
    width: 248
  }
  
}

export default App;
