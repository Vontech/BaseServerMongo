import React, { Component } from 'react';

import SlidingSelection from './SlidingSelection';
import Strings from '../strings';

type Props = {
  month: String,

}

type State = {

}

export default class CalendarToolbar extends Component<State, Props> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div style={styles.toolbarContainer}>
        <div style={styles.pullLeft}>
          {this.props.month} {this.props.year}
        </div>
        <div style={styles.sliderContainer}>
          <SlidingSelection
            itemWidth={8}
            options={Strings.C_TYPE_ARRAY}
          />
        </div>
        <div style={styles.pullRight}>
          TODAY
        </div>
      </div>
    );
  }

}

const styles = {
  toolbarContainer: {

  },
  sliderContainer: {
    
  },
  pullRight: {
    position: 'absolute'
  },
  pullLeft: {
    position: 'absolute'
  }
};