import React, { Component } from 'react';

import DoneLogo from './DoneLogo';
import ProfileBadge from './ProfileBadge';
import CalendarToolLinks from './CalendarToolLinks';
import TaskProgressWidget from './TaskProgressWidget';
import CalendarFiltersList from './CalendarFiltersList';
import Colors from '../colors';

import {getFakeCategories} from '../utils/testing';

type Props = {

}

type State = {

}

export default class Sidepane extends Component<State, Props> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  generateSpacer(size: int) {
    return (
      <div style={{height: size}}></div>
    )
  }

  render() {
    return (
      <div style={this.props.style}>
          <DoneLogo />
          <div style={styles.sidepaneContents}>
            <ProfileBadge
              name={"Aaron Vontell"}
              imageSrc={"https://media.licdn.com/dms/image/C4D03AQE-y5JfJ2NQCw/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=Ejzzdjun5CVHSjvKo1DxgNz1M42dLbm_STcTn1pdIn0"}
              streakCount={4} />
            {this.generateSpacer(32)}
            <CalendarToolLinks
              clickSearch={() => {console.log("Clicked Search");}}
              clickReschedule={() => {console.log("Clicked Reschedule");}}
              clickTasks={() => {console.log("Clicked Tasks");}}
              clickSettings={() => {console.log("Clicked Settings");}} />
            {this.generateSpacer(32)}
            <TaskProgressWidget
              completed={12}
              remaining={4}
              progressColor={Colors.DEFAULT_PROGRESS_GREEN}
            />
            {this.generateSpacer(32)}
            <CalendarFiltersList 
              categories={getFakeCategories()}
            />
          </div>
          
      </div>
    );
  }

}

const styles = {
  sidepaneContents: {
    padding: 16
  }
};