import React, { Component } from 'react';
import Strings from '../strings';

import Search from '@material-ui/icons/Search';
import Timelapse from '@material-ui/icons/Timelapse';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Settings from '@material-ui/icons/Settings';

type Props = {
    clickSearch: Function,
    clickReschedule: Function,
    clickTasks: Function,
    clickSettings: Function
}

type State = {

}

export default class CalendarToolLinks extends Component<State, Props> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  renderButton(icon: String, text: String, clickFn: Function) {
      return (
        <div onClick={clickFn} style={styles.linkContainer}>
            {icon}
            <p style={styles.linkText}>{text}</p>
        </div>
      );
  }

  render() {
    return (
      <div>
          {this.renderButton(<Search style={styles.linkIcon}/>, Strings.C_L_SEARCH, this.props.clickSearch)}
          {this.renderButton(<Timelapse style={styles.linkIcon}/>, Strings.C_L_RESCHEDULE, this.props.clickReschedule)}
          {this.renderButton(<CheckCircle style={styles.linkIcon}/>, Strings.C_L_TASKS, this.props.clickTasks)}
          {this.renderButton(<Settings style={styles.linkIcon}/>, Strings.C_L_SETTINGS, this.props.clickSettings)}
      </div>
    );
  }

}

const styles = {
    linkContainer: {
        marginTop: 12,
        fontSize: 14,
        cursor: 'pointer'
    },
    linkIcon: {
        display: 'inline-block',
        height: 22
    },
    linkText: {
        display: 'inline-block',
        margin: 0,
        verticalAlign: 'top',
        paddingTop: 2,
        paddingLeft: 12,
        fontWeight: 500,
    }
};