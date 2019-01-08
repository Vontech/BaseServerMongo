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

const IMAGE_SIZE = 48;
const styles = {
    profileContainer: {
        
    },
    imageContainer: {
        display: 'inline-block',
        verticalAlign: 'top'
    },
    image: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE/2,
    },
    otherContainer: {
        display: 'inline-block',
        paddingLeft: 12,
        paddingTop: 4
    },
    profileTag: {
        color: Colors.TEXT_BLACK,
        marginBottom: 0,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 500,
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
        verticalAlign: 'top',
        fontSize: 12
    }
};