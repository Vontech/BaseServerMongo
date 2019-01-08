import React, { Component } from 'react';
import CalendarCategory from '../models/CalendarCategory';
import Strings from '../strings';
import Colors from '../colors';

type Props = {
    categories: CalendarCategory[]
}

type State = {

}

const INDICATOR_SIZE = 14;

export default class CalendarFiltersList extends Component<State, Props> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  renderCategory(catEntry: CalendarCategory) {

    let indicatorStyle = {
      backgroundColor: catEntry.color,
      display: 'inline-block',
      height: INDICATOR_SIZE,
      width: INDICATOR_SIZE,
      borderRadius: INDICATOR_SIZE/2,
      verticalAlign: 'middle'
    };

    return (
      <div style={styles.categoryContainer}>
        <div style={indicatorStyle}></div>
        <div style={styles.categoryTitle}>{catEntry.title}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div style={styles.title}>{Strings.S_C_TITLE}</div>
        {this.props.categories.map((val) => this.renderCategory(val))}
      </div>
    );
  }

}

const styles = {
  title: {
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 16
  },
  categoryContainer: {
    marginBottom: 12,
    cursor: 'pointer'
  },
  categoryTitle: {
    display: 'inline-block',
    fontSize: 14,
    paddingLeft: 14,
    fontWeight: 500,
  }
};