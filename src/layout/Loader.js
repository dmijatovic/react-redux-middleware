import React from 'react';

import './Loader.css';

export class Loader extends React.Component{
  /**
   * Create loader component
   * @param props.type: string, expected values first, second  
   */
  constructor(props){
    super(props)
    //set loader type to default
    this.state = {
      type: this.props.type || 'default'
    }
  }
  /**
   * Decide which html content to load based on loader type
   */
  loaderHtml(){
    switch (this.state.type.toLowerCase()){

      case 'first':
        return (
          <div className="lds-hourglass"></div>
        )
      case 'second':
        return (
          <div className="lds-roller">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        )
      default:
        return (
          <h1>Here is default loader content</h1>
        )
    }
  }
  render(){
    return (
      <div className="app-loader">
      { //add loader content here
        this.loaderHtml()
      }
      </div>
    )    
  }
}