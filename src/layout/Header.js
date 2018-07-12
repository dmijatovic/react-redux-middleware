import React, { Component } from 'react';

import './Header.scss';

import { Clock } from './Clock';

export class Header extends Component {
  render() {
    //console.log("Header props...", this.props);
    return (
      <header className="app-header">
        <div className="app-header-left">
          <img className="app-logo" src={ this.props.logo.src }/>
          <h1 className="app-title">{ this.props.appTitle }</h1>
        </div>
        <Clock />
      </header>
    );
  }
}
