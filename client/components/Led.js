import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {switchLed} from '../actionCreators'

export class Led extends Component {
  constructor() {
    super();
   }

  componentWillMount() {

  }

  renderStatus (status) {
    if (status === 'on') {
      return (<span className="label label-primary">{status}</span>)
    } else {
      return (<span className="label label-error">{status}</span>)
    }
  }


  render() {
    const {status, switchLed} = this.props;
    return (
      <div className="content">
        <div>
          <div className="button-container">
            <div className="btn-group">
           <span className="action-button">
            <button type="button" className="btn btn-primary btn-lg" onClick={() => switchLed('on')}>ON</button>
           </span>
              <span className="action-button">
            <button type="button" className="btn btn-danger btn-lg" onClick={() => switchLed('off')}>OFF</button>
           </span>
              {status}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Led.propTypes = {
  status: PropTypes.string,
  fetched: PropTypes.bool,
  fetching: PropTypes.bool
};


const mapStateToProps = (state) => {
  return {
    status: state.led.status,
    fetched: state.led.fetched,
    fetching: state.led.fetching
  };
};

const mapDispatchToProps = {
  switchLed
};

export default connect(mapStateToProps, mapDispatchToProps)(Led);