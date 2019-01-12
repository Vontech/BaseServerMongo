import React, { Component } from 'react';

import CalendarToolbar from './CalendarToolbar';

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
      <div>
        <CalendarToolbar
          month={'November'}
          year={'2018'}
         />
      </div>
    );
  }

}

const styles = {

};