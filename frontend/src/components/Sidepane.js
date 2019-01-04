import React, { Component } from 'react';

import DoneLogo from './DoneLogo';
import ProfileBadge from './ProfileBadge';

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

  render() {
    return (
      <div style={this.props.style}>
          <DoneLogo />
          <ProfileBadge
            name={"Aaron Vontell"}
            imageSrc={"https://media.licdn.com/dms/image/C4D03AQE-y5JfJ2NQCw/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=Ejzzdjun5CVHSjvKo1DxgNz1M42dLbm_STcTn1pdIn0"}
            streakCount={4} />
      </div>
    );
  }

}

const styles = {

};