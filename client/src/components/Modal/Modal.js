import React, {Component} from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  // this hook makes sure that this component only updates when the
  // show property of the Modal is tru
  shouldComponentUpdate(nextProps, nextState) {
      return nextProps.show !== this.props.show || nextProps.loading !== this.props.loading;
  }

  componentDidUpdate() {
    console.log('[ModalUpdated...]')
  }

  render () {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div
        className={classes.Modal}
        style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-150vh)',
          opacity: this.props.show ? '1' : ''
        }}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  };
}


export default Modal;
