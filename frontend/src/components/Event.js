import React, { Component } from "react";
import EventModel from "../models/EventModel";
import {getTitleElement, getContainerStyle, getTimeElement} from "./CalendarItem";

type Props = {
  data: EventModel
};

type State = {};

export default class Event extends Component<State, Props> {
  styles = {
    title: {
      color: 'white',
      fontWeight: 600,
      fontSize: 18,
      marginLeft: 0,
      marginTop: 0
    }, time: {
      color: 'white',
      fontWeight: 300,
      fontSize: 18,
      marginLeft: 0,
      marginTop: -10
    }, event: {
      borderRadius: 6
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {

    let color = 'red' // some color from this.props.data.primaryColor

    return(
        <div style={Object.assign({}, getContainerStyle(this.props.data), this.styles.event)}>
          <div>{getTitleElement(this.props.data, this.styles.title)}</div>
          <div>{getTimeElement(this.props.data, this.styles.time)}</div>
        </div>
    )
  }
}
