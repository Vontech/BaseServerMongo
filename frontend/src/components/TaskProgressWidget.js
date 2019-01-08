import React, { Component } from 'react';

import Strings from '../strings';
import Colors from '../colors';

type Props = {
    completed: int,
    remaining: int,
    progressColor: String
}

type State = {

}

export default class TaskProgressWidget extends Component<State, Props> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  getProgress(percentage: Float, color: String) {

    return (
      <div style={styles.progressBackground}>
        <div style={{
          borderRadius: 25,
          height: PROGRESS_HEIGHT,
          width: (percentage * 100.0) + '%',
          background: color }}>
        </div>
      </div>
      
    )
  }

  render() {
    return (
      <div>
        <div style={styles.title}>{Strings.W_P_TITLE}</div>
        <div style={styles.progressContainer}>
          {this.getProgress(this.props.completed / (this.props.completed + this.props.remaining), this.props.progressColor)}
        </div>
        <div style={styles.statsContainer}>
          <div style={styles.statContainer}>
            <div style={styles.statCount}>{this.props.completed}</div>
            <div style={styles.statByline}>{Strings.W_P_COMPLETE}<br />{Strings.W_P_TASKS}</div>
          </div>
          <div style={styles.statContainer}>
            <div style={styles.statCount}>{this.props.remaining}</div>
            <div style={styles.statByline}>{Strings.W_P_REMAINING}<br />{Strings.W_P_TASKS}</div>
          </div>
        </div>
      </div>
    );
  }

}

const PROGRESS_HEIGHT = 12;

const styles = {
    title: {
        fontWeight: 600,
        fontSize: 16,
    },
    statsContainer: {
      width: '100%'
    },
    statContainer: {
      display: 'inline-block',
      width: '50%',
      textAlign: 'center'
    },
    statCount: {
      fontWeight: 800,
      color: Colors.TEXT_BLACK,
      fontSize: 24
    },
    statByline: {
      color: Colors.TEXT_GREY,
      fontSize: 14
    },
    progressContainer: {
      marginTop: 12,
      marginBottom: 16,
      height: PROGRESS_HEIGHT,
    },
    progressBackground: {
      backgroundColor: Colors.PROGRESS_BACKGROUND,
      borderRadius: 25,
      height: PROGRESS_HEIGHT,
    }
};