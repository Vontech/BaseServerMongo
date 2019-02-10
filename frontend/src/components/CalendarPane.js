import React, { Component } from 'react';
import moment from 'moment';
import anime from 'animejs';

type Props = {
  viewType: "month" | "week"
}

type State = {
  
}

const THIRTY_MIN_HEIGHT = 30;
const HOUR_HEIGHT = THIRTY_MIN_HEIGHT * 2;
const DAY_HEADER_HEIGHT = 45;

export default class CalendarPane extends Component<State, Props> {

  constructor(props) {
    super(props);
    this.state = {
      paneRef: null
    }

    // Top animations
    this.isAnimatingTop = false;
    this.currentTopTarget = null;
    this.currentTopAnimation = null;

    this.isAnimatingLeft = false;
    this.currentLeftTarget = null;
    this.currentLeftAnimation = null;

  }

  setPaneRef = element => {
    this.setState({paneRef: element});
  };

  componentDidMount() {

    
    
  }

  getVerticalDividers() {
    let dividers = []
    let numSections = 7;
    let verticalSpacing = 0;
    if (this.state.paneRef) {
      verticalSpacing = this.state.paneRef.getBoundingClientRect().width/numSections;
    }
    for (let i = 0; i < numSections; i++) {
      dividers.push(
        <div key={`vert${i}`} style={{position: 'absolute', left: `${i*verticalSpacing}px`, height: '100vh', width: 1, background: '#D4DDE9'}}>
        </div>
      )
    }
    return dividers;
  }

  getDayHeader() {

    const today = moment();
    const fromDate = today.startOf('week');
    const toDate = today.endOf('week');

    console.log(fromDate);
    console.log(toDate);

    let elements = []
    for (let i = 0; i < 7; i++) {
      let day = moment().day(i);
      elements.push(
        <div style={styles.dayHeaderWeekly} key={day}>
          <span>{day.date()}</span><br />
          <span>{day.format("ddd")}</span>
        </div>
      );
    } 

    return (
      <div style={styles.dayHeader}>
        {elements}
      </div>
    )
  }

  snapHorizontally(x) {

    // First, handle boundaries
    if (x < 0) {
      return '0px';
    }

    // let pWidth = 100/7;
    // if(Math.abs(pWidth - (x )))

    return x + 'px';
  }

  snapVertically(y) {

    // First, handle boundaries
    if (y < 0) {
      return '0px';
    }

    if (Math.abs(THIRTY_MIN_HEIGHT - (y % THIRTY_MIN_HEIGHT)) <= 20) {
      return Math.round(y / THIRTY_MIN_HEIGHT) * THIRTY_MIN_HEIGHT + 'px';
    }
    return y;
  }

  animateSnapHorizontally(x, element) {

    const that = this;

    // First, handle boundaries
    // if (this.isAnimatingTop) {
    //   return;
    // }

    let targetPos = x

    if (x < 0) {
      targetPos = 0;
    }

    // If mouse is too far away, just follow, not snap
    const DAY_WIDTH = (this.state.paneRef.getBoundingClientRect().width / 7.0)

    if (Math.abs(DAY_WIDTH - (x % DAY_WIDTH)) <= 20) {
      targetPos = Math.round(x / DAY_WIDTH) * DAY_WIDTH;

      if (this.isAnimatingLeft && targetPos === this.currentLeftTarget) {
        return;
      }

      this.currentLeftTarget = targetPos;

      if (this.currentLeftAnimation) {
        this.currentLeftAnimation.pause();
        this.currentLeftAnimation = null;
      }

      // Get the start
      var position = {
        left: this.stripPx(element.style.left),
      }
      that.isAnimatingLeft = true;
      this.currentLeftAnimation = anime({
        targets: position,
        left: targetPos,
        easing: 'easeInQuad',
        duration: 250,
        update: function() {
          element.style.left = position.left + 'px';
        },
        begin: function(anim) {
          console.log("began");
          
        },
        complete: function(anim) {
          console.log("stopped");
          that.isAnimatingleft = false;
          that.currentLeftAnimation = null;
        }
      });
      that.currentLeftAnimation.play()

    } else {
      return;
    }

    if (this.stripPx(element.style.left) === targetPos) {
      return;
    }

  }

  animateSnapVertically(y, element) {

    const that = this;

    // First, handle boundaries
    // if (this.isAnimatingTop) {
    //   return;
    // }

    let targetPos = y

    if (y < 0) {
      targetPos = 0;
    }

    // If mouse is too far away, just follow, not snap

    if (Math.abs(THIRTY_MIN_HEIGHT - (y % THIRTY_MIN_HEIGHT)) <= 20) {
      targetPos = Math.round(y / THIRTY_MIN_HEIGHT) * THIRTY_MIN_HEIGHT;

      if (this.isAnimatingTop && targetPos === this.currentTopTarget) {
        return;
      }

      this.currentTopTarget = targetPos;

      if (this.currentTopAnimation) {
        this.currentTopAnimation.pause();
        this.currentTopAnimation = null;
      }

      // Get the start
      var position = {
        top: this.stripPx(element.style.top),
      }
      that.isAnimatingTop = true;
      this.currentTopAnimation = anime({
        targets: position,
        top: targetPos,
        easing: 'easeInQuad',
        duration: 250,
        update: function() {
          element.style.top = position.top + 'px';
        },
        begin: function(anim) {
          console.log("began");
          
        },
        complete: function(anim) {
          console.log("stopped");
          that.isAnimatingTop = false;
          that.currentTopAnimation = null;
        }
      });
      this.currentTopAnimation.play()

    } else {
      return;
    }

    if (this.stripPx(element.style.top) === targetPos) {
      return;
    }

  }

  stripPx(value) {
    return parseFloat(value.replace('px', ''))
  }

  getOnMouseDownListener(calendarEvent) {
    return (e) => {
      const element = e.target;
      e = e || window.event;
      e.preventDefault();

      const DAY_WIDTH = (this.state.paneRef.getBoundingClientRect().width / 7.0)

      // get the mouse cursor position at startup:
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Get the div position at startup
      let rect = element.getBoundingClientRect();
      console.log("Event", rect.left, rect.top);

      console.log("Mouse", mouseX, mouseY);

      // Calculate the original offset
      let offsetX = mouseX - rect.left;
      let offsetY = mouseY - rect.top;

      console.log("OFFSET", offsetX, offsetY);

      document.onmousemove = (event) => {
        event = event || window.event;
        event.preventDefault();
        
        // Calculate the distance from the div offset pointer to
        // the mouse's current position
        let newRect = element.getBoundingClientRect();

        let newMouseX = event.clientX;
        let newMouseY = event.clientY;
        let newDivPointX = newRect.left + offsetX;
        let newDivPointY = newRect.top + offsetY;
        
        let xDistanceToDesired = newMouseX - newDivPointX;
        let yDistanceToDesired = newMouseY - newDivPointY;

        let newTop = this.stripPx(element.style.top) + yDistanceToDesired;
        let newLeft = this.stripPx(element.style.left) + xDistanceToDesired

        if (Math.abs(yDistanceToDesired) > 30) {
          element.style.top = newTop + 'px'
          if (this.currentTopAnimation) {
            this.currentTopAnimation.pause();
          }
        }

        if (Math.abs(xDistanceToDesired) > DAY_WIDTH) {
          element.style.left = newLeft + 'px'
          if (this.currentLeftAnimation) {
            this.currentLeftAnimation.pause();
          }
        }

        // Now snap to grid and fix bounds if needed
        //let newTopString = this.snapVertically(newTop);
        this.animateSnapVertically(newTop, element)
        this.animateSnapHorizontally(newLeft, element);
        //let newLeftString = this.snapHorizontally(newLeft);

        //element.style.top = newTopString;
        //element.style.left = newLeftString;

        //console.log("DISTANCE", xDistanceToDesired, yDistanceToDesired);

        // set the element's new position, snapping if needed:
        // let newYPos = this.snapVertically(element.offsetTop - movementY);
        // let newXPos = this.snapHorizontally(element.offsetLeft - movementX)

        // element.style.top = newYPos + "px";
        // element.style.left = newXPos + "px";

      }
      document.onmouseup = (event) => {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }

  renderEvents() {
    return (
      <div style={{
            position: 'absolute',
            height: THIRTY_MIN_HEIGHT * 2,
            width: 100/7 + '%',
            background: 'red',
            borderRadius: 5,
            top: 0,
            left: 0
          }} 
          onMouseDown={this.getOnMouseDownListener(null)}>

      </div>
    )
  }

  render() {
    let numHours = 24;
    let divs = [];
    for (let i = 0; i < numHours; i++) {
      divs.push(
        <div key={`horiz${i}`} style={{position: 'absolute', top: i*HOUR_HEIGHT, width: '100%', height: 1, background: '#D4DDE9'}}>
        </div>
      )
    }
    return (
      <div style={styles.paneContainer} ref={this.setPaneRef}>
        {this.getDayHeader()}
        {divs}
        {this.getVerticalDividers()}
        {this.renderEvents()}
      </div>
    );
  }

}

const styles = {
  paneContainer: {
    width: '100%',
    height: '100%',
    background: '#F5F8FA',
    position: 'relative',
    overflow: 'scroll'
  },
  dayHeader: {
    background: '#E3E8EB',
    width: '100%',
    height: DAY_HEADER_HEIGHT,
    position: 'fixed',
    zIndex: 100
  },
  dayHeaderWeekly: {
    textAlign: 'center',
    width: 81.0 / 7 + '%',
    display: 'inline-block',
    border: '1px solid black'
  },
  draggableEvent: {
    position: 'absolute',
    height: THIRTY_MIN_HEIGHT * 2,
    width: 100/7 + '%',
    background: 'red',
    borderRadius: 5,
  }
};