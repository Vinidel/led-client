import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {logout} from '../actionCreators'

export class HeaderComponent extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Switch</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">LED</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="header-user-options" > <span className="glyphicon glyphicon-user" /> </li>
              <li className="header-user-options" onClick={logout}><span className="glyphicon glyphicon-off" /> Logout</li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}


HeaderComponent.propTypes = {
  user: PropTypes.object,
  fetched: PropTypes.bool,
  fetching: PropTypes.bool,
};


const mapStateToProps = (state) => {
  return {
    fetched: state.user.fetched,
    fetching: state.user.fetching,
  };
};

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);