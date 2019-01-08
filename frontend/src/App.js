import React, { Component } from "react";
import logo from "./logo.svg";
import Event from "./components/Event";
import EventModel from "./models/EventModel";
import Colors from "./colors";

import Sidepane from "./components/Sidepane";
import Task from "./components/Task";
import TaskModel from "./models/TaskModel";

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div style={styles.appcontainer}>
        <Sidepane style={styles.sidepane} />
        <Event
          data={new EventModel("This is a test", null, null, "This is the description", null, "red", null)}
        />
        <div style={{marginTop: 10}}></div>
        <Task data={new TaskModel("Example Task", null, null, "This is a description", "Category", "#54CA7A", "#D0FFDF", 1, false)}/>
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
