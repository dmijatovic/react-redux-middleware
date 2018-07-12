
/**
 * Inital app configuration
 * note! the values are imported inyo redux store
 */
export const Config = {
  header:{
    logo:{
      src:'img/dv4all_logo_v7_2016_hd.svg'
    },
    appTitle:'This is app title received from Redux',
    pageTitle: "Wait for page to load..."
  },
  //clock inital values
  clock: {
    time:{
      hrs: "00",
      min: "00",
    },
    update: 1000,
    semicolon: true 
  },
  //app-loader
  loader:{
    type:'second',
    show: true
  }
}