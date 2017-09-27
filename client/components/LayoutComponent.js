import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

export default class DummieComponent extends Component {
  constructor() {
    super();
  }

  renderNavBar() {
    if(true) {
      return(<HeaderComponent />)
    }
  }

  renderFooter() {
    if(false) {
      return(<FooterComponent />)
    }
  }

  render() {
    return (
      <div>
        {this.renderNavBar()}
          {this.props.children}
        {this.renderFooter()}
      </div>
    )
  }
}