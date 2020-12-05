import React from 'react';

import classes from './Timer.module.css';
import Modal from '../../components/Modal/Modal';

class Timer extends React.Component {
  state = {
    minutes: null,
    seconds: null,
    countDownTimer: null,
    disableTimer: false
  }


  UNSAFE_componentWillReceiveProps(nextProps) {
    clearInterval(this.timeInterval)
    if (nextProps.disableTimer === false) {
      this.setState({ minutes: nextProps.minutes, seconds: nextProps.seconds });
      this.timeInterval = setInterval(this.tick, 1000);
    } else {
      this.setState({ disableTimer: nextProps.disableTimer });
      clearInterval(this.timeInterval)
    }
  }

  tick = () => {
    const oldMin = this.state.minutes * 60;
    const oldSec = this.state.seconds;
    const oldCountDownTimer = oldMin + oldSec;
    const newCountDownTimer = oldCountDownTimer - 1;
    const seconds = Math.floor(newCountDownTimer % 60);
    const minutes = Math.floor((newCountDownTimer % (60 * 60)) / 60);
    this.setState({ minutes: minutes, seconds: seconds, countDownTimer: newCountDownTimer });
    if (newCountDownTimer === 0) {
      clearInterval(this.timeInterval);
    }
  }

  pad = (num, size) => ('0' + num).substr(-size);

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    let classesArray = [classes.Timer];
    if (this.state.minutes === 0) {
      classesArray.push(classes.LastMin);
    }
    let timerComponent = (
      <div className={classesArray.join(' ')} >
        <h3 style={{
          fontSize: "25px",
          position: "fixed", top: "0", left: "8px",
          fontFamily: 'Indie Flower'
        }}>{this.pad(this.state.minutes, 2)}:{this.pad(this.state.seconds, 2)}<br />
          <span style={{
            fontSize: "15px",
            position: "fixed", top: "32px", left: "15px",
            fontFamily: 'Indie Flower'
          }}>
            Timer</span></h3>
        <div className={classes.BorderLine}> </div>
      </div>
    );
    if (this.state.disableTimer || this.state.minutes === null) {
      timerComponent = null;
    }
    return (
      <React.Fragment>
        {timerComponent}
        <Modal show={this.state.countDownTimer === 0}>
          <h1>Time's up! Unfortunately, you can't continue to the game.<br />
            <span role="img"
              aria-label="unhuppyFace"
              style={{ fontSize: "60px" }}>&#128577;</span></h1>
        </Modal>
      </React.Fragment>

    );
  }

}

export default Timer;
