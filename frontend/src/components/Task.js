import React, { Component } from "react";
import TaskModel from "../models/TaskModel";
import { getContainerStyle, getTitleElement, getTimeElement } from "./CalendarItem";

type Props = {
  data: TaskModel
};

type State = {};

export default class Task extends Component<State, Props> {
  styles = {
    title: {
      color: this.props.data.color,
      fontWeight: 600,
      fontSize: 18,
      textAlign: 'left',
      marginLeft: 0,
      marginTop: 0
    }, time: {
      color: this.props.data.color,
      fontWeight: 300,
      fontSize: 18,
      marginLeft: 0,
      marginTop: -10
    }, task: {
      background: this.props.data.secondaryColor,
      height: 76 // TODO: Fix this
    }, left: {
      background: this.props.data.color,
      width: 10,
      height: 100,
      marginLeft: -12,
      marginTop: -12,
      float: 'left'
    }, right: {
      marginLeft: 10
    }, priority: {
      color: this.props.data.color,
      fontSize: 16,
      textAlign: 'right',
      fontWeight: 600
    }, button: {
      height: 15, 
      width: 15, 
      border: '2px solid ' + this.props.data.color, 
      borderRadius: 50
    }, flexIt: {
      display: 'flex',
      flexWrap: 'nowrap'
    }, flexFill: {
      flex: '1 1 auto'
    }, flexShrink: {
      flex: '0 1 auto'
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.info);
  }

  getPriorityElement(data: TaskModel, additionalStyles: any) {
    return(<h2 style={additionalStyles}>{data.priority}</h2>);
  }

  render() {
    return(
      <div style={Object.assign({}, getContainerStyle(this.props.data), this.styles.task)}>
        <div style={this.styles.left}/>
        <div style={this.styles.right}>
        
        <div style={this.styles.flexIt}>
          <div style={this.styles.flexFill}>
            <div>{getTitleElement(this.props.data, this.styles.title)}</div>
          </div>
          
          <div style={this.styles.flexShrink}>
            <div style={this.styles.button} />
          </div>
        </div>

          <div>{getTimeElement(this.props.data, this.styles.time)}</div>
          <div>{this.getPriorityElement(this.props.data, this.styles.priority)}</div>
        </div>
      </div>
    );
  }
}
