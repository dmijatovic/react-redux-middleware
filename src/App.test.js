import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Config } from './store/app.cfg';

configure({adapter: new Adapter()});

// use named export to test only component
// not default react export that includes redux
import { App } from './App';

describe('App',()=>{
  it('should render App',()=>{
    const wrapper = shallow(<App loader={()=>{show: true}}/>);

    wrapper.setProps({
      logo: Config.header.logo,
      appTitle: Config.header.appTitle,
      pageTitle: Config.header.pageTitle,
      loader: Config.loader 
    });
    expect(wrapper.instance()).toBeTruthy();
  })
})