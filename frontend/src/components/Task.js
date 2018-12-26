import React, { Component } from "react";
import TaskModel from "../models/TaskModel";

type Props = {
  data: TaskModel
};

type State = {};

export default class Task extends Component<State, Props> {
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
    return(<div>{this.props.data.title}</div>);
  }
}
