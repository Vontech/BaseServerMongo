import React, { Component } from "react";
import EventModel from "../models/EventModel";
import {getTitleElement, getContainerStyle} from "./CalendarItem";

type Props = {
  data: EventModel
};

type State = {};

export default class Event extends Component<State, Props> {
  styles = {
    title: {
      color: "white"
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.info);
  }

  render() {
    return(
        <div style={getContainerStyle(this.props.data)}>
          <div>{getTitleElement(this.props.data)}</div>
        </div>
    )
  }
}
