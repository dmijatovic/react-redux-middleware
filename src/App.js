//REACT
import React from 'react';

//THIRD PARTY
import { connect } from 'react-redux';

//LOCAL
import { Header, Footer, Loader, PageTitle } from './layout';
import Persons from './persons/Persons';
import * as actionType from './store/actions';
//import Header from './layout/Header';
//import Footer from './layout/Footer';
//import { Config } from './store/app.cfg';

export class App extends React.Component{
  /* this happens by default
  constructor(props){
    super(props);
  }*/
  componentDidMount(){
    //debugger 
    //this.showLoader();
    //change loader state after 5 seconds
    setTimeout(()=>{
      //dispatch action to redux store 
      //to hide loader
      this.props.onHideLoader();
      //set page title
      this.props.setPageTitle("Test custom middleware - add new person");
    },2000);
  }
  showLoader(){
    //debugger
    if (this.props.loader.show){
      return (
        <Loader type={this.props.loader.type}/>
      )
    } else{
      return(
        <section className="app-page-content">
          <Persons/>
        </section>
      );
    }
  }
  render(){
    return(
      <React.Fragment>
        <Header
          logo={this.props.logo} 
          appTitle={this.props.appTitle}
        />,
        <section className="app-body">
          <PageTitle title={this.props.pageTitle}/>
          {this.showLoader()}
        </section>,
        <Footer/>
      </React.Fragment>    
    );
  }
}
/**
 * Map redux store states to local component properties
 * @param state: object, redux store object 
 */
const mapStateToProps = state => {
  //debugger 
  return {
    logo: state.header.logo,
    appTitle: state.header.appTitle,
    pageTitle: state.header.pageTitle,
    loader: state.loader 
  }
}
/**
 * Map redux dispatch actions to local component props
 * @param dispatch: function, redux dispatch function 
 */
const mapDispatchToProps = dispatch =>{
  return {
    //note short ES6 fn notation (single line assumes return)
    onShowLoader: () => dispatch({type:actionType.SHOW_LOADER}),
    onHideLoader: () => dispatch({type:actionType.HIDE_LOADER}),
    setLoaderType: (loaderType) => dispatch({type:actionType.setLoaderType, payload: loaderType}),
    setPageTitle: (pageTitle) => {
      return dispatch({type:"SET_PAGE_TITLE",payload: pageTitle});
    }
  }  
}

/**
 * Export app class connected with Redux store
 * and props and discpatch actions mapped into 
 * a local App component 
 */
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);