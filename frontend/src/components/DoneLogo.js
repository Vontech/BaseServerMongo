import React, { Component } from 'react';

type Props = {
  color: String
}

type State = {

}

export default class DoneLogo extends Component<State, Props> {

  DEFAULT_COLOR = '#F86464';

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div style={{height: 64, backgroundColor: this.props.color || this.DEFAULT_COLOR, textAlign: 'center'}}>
        <p style={styles.text}>
          DONE.
        </p>
      </div>
    );
  }

}

const styles = {
  text: {
    color: 'white',
    fontFamily: 'Open Sans',
    fontWeight: 800, 
    fontSize: 32, 
    margin: 0,
    paddingTop: 8
  }
};