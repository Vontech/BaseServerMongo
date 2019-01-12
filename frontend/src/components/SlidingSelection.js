import React, { Component } from 'react';

import { easeExpOut } from 'd3-ease';
import Animate from 'react-move/Animate';

type Props = {
    itemWidth: Int,
    options: String[]
}

type State = {
  selectedIndex: Int
}

export default class SlidingSelection extends Component<State, Props> {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    }

    this.createRefs();
    
  }

  createRefs() {
    this.refHolder = [];
    for(let _ in this.props.options) {
      this.refHolder.push(React.createRef())
    }
  }

  componentDidMount() {
    this.createRefs();
  }

  getTab(text: String, index: Int) {

    let style = {
      display: 'inline-block',
      marginLeft: this.props.itemWidth,
      marginRight: this.props.itemWidth,
      textAlign: 'center',
      fontWeight: 600,
    }

    return (
      <div style={style} ref={this.refHolder[index]} key={index}>
        <span style={styles.tab} onClick={() => this.setState({selectedIndex: index})}>{text}</span>
      </div>
    )

  }

  getTabs() {

    let elements = [];
    for (let i in this.props.options) {
      let val = this.props.options[i];
      let element = this.getTab(val, i);
      elements.push(element);
    }
    return elements;

  }

  render() {

    let elements = this.getTabs();

    let slideWidth = 0;
    let slideX = 0;
    if (this.refHolder[this.state.selectedIndex] && this.refHolder[this.state.selectedIndex].current != null) {
      for (let i = 0; i < this.state.selectedIndex; i++) {
        slideX += outerWidth(this.refHolder[i].current);
      }
      slideWidth = outerWidth(this.refHolder[this.state.selectedIndex].current);

      // Add offset for effect
      let offset = 12;
      slideX += offset;
      slideWidth -= offset*2

    }
    
    return (
      <div style={styles.container}>
          <div style={styles.tabRow}>
            {elements}
          </div>
          <div style={styles.sliderContainer}>

          <Animate
              key={'slider'}

              start={{
                x: 0,
                width: 0
              }}

              update={{
                x: [slideX],
                width: [slideWidth],
                timing: { duration: 300, ease: easeExpOut },
              }} >

                {({ x, width }) => {
                  return (
                    <div style={{
                      backgroundColor: 'black',
                      height: 4,
                      width: width,
                      transform: `translate(${x}px)`
                    }}></div>
                  );
                }}

            </Animate>
          
            
          </div>
      </div>
    );
  }

}

const styles = {
  tab: {
    cursor: 'pointer',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  tabRow: {
    marginBottom: 4
  },
  sliderContainer: {

  },
  container: {
    
  }
};

function outerWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);

  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
}