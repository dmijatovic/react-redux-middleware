import React from 'react';

export function PageTitle(props){
  //console.log("PageTitle..this..", props);
  return <h1 className="app-page-title">{props.title}</h1>;
};