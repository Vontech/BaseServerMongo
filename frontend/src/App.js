import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';

import logo from "./logo.svg";
import Event from "./components/Event";
import EventModel from "./models/EventModel";
import Colors from "./colors";

import Sidepane from "./components/Sidepane";
import Task from "./components/Task";
import TaskModel from "./models/TaskModel";
import Calendar from "./components/Calendar";

const SIDEPANE_SIZE = 2.3

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
        <Row>
          <Col sm={SIDEPANE_SIZE}>
            <Sidepane />
          </Col>
          <Col sm={12 - SIDEPANE_SIZE}>
            <Calendar></Calendar>
          </Col>
        </Row>
    );
  }
}

const styles = {
  reset: {
    margin: 0
  }
}

export default App;
