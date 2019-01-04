import React, { Component } from 'react';

import TrendingUp from '@material-ui/icons/TrendingUp';
import Colors from '../colors';

type Props = {
    imageSrc: String,
    name: String,
    streakCount: Integer
}

type State = {

}

export default class ProfileBadge extends Component<State, Props> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div style={styles.profileContainer}>
          <div style={styles.imageContainer}>
            <img src={this.props.imageSrc} alt={"Your profile!"} style={styles.image} />
          </div>
          <div style={styles.otherContainer}>
            <p style={styles.profileTag}>{this.props.name}</p>
            <div style={styles.counterContainer}>
                <TrendingUp style={styles.counterLogo}/>
                <p style={styles.counterAmount}>{this.props.streakCount}</p>
            </div>
          </div>
      </div>
    );
  }

}

const styles = {
    profileContainer: {
        padding: 16
    },
    imageContainer: {
        display: 'inline-block',
        verticalAlign: 'top'
    },
    image: {
        width: 54,
        height: 54,
        borderRadius: 54/2,
    },
    otherContainer: {
        display: 'inline-block',
        paddingLeft: 12,
        paddingTop: 4
    },
    profileTag: {
        color: Colors.TEXT_BLACK,
        marginBottom: 0,
        marginTop: 0
    },
    counterContainer: {
        paddingTop: 4
    },
    counterLogo: {
        display: 'inline-block',
        color: Colors.LOGO_GREY,
    },
    counterAmount: {
        color: Colors.TEXT_BLACK,
        display: 'inline-block',
        marginBottom: 0,
        marginTop: 2,
        marginLeft: 4,
        verticalAlign: 'top'
    }
};