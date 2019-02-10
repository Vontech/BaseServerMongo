import React, { Component } from 'react';

import CalendarToolbar from './CalendarToolbar';
import CalendarPane from './CalendarPane';

type Props = {

}

type State = {

}

export default class Calendar extends Component<State, Props> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div style={styles.calendarContainer}>
        {/* <CalendarToolbar
          month={'November'}
          year={'2018'}
         /> */}
         <CalendarPane 
         />
      </div>
    );
  }

}

const styles = {
  calendarContainer: {
    width: '100%',
    height: '100%'
  }
};