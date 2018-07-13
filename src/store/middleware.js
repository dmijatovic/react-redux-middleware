import * as actionType from './actions';

/**
 * Custom middleware function that simply logs when called,
 * it should return next(action) function 
 * and call it to continue action 'chain' and reach the reducer
 * note! if next(action) is not called the chain will break and action 
 * will never reach the reducer which is the function of middleware 
 * @param param.getState: fn, received from redux
 * @param param.dispatch: fn, received from redux
 */
export const myLogger = ({ getState, dispatch }) => {
  console.log("Redux-middleware.myLogger...enter"); 
  /*
  debugger
  groupLog("Redux-middleware.myLogger...",[
    {label: "getState", value: getState()},
    {label: "dispatch", value: dispatch}
  ]);*/
  return next => action => {
    console.log(`Redux-middleware.myLogger...next(action.type=${action.type})`);
    /*debugger
    groupLog("Redux-middleware.myLogger.next.action...",[
      {label: "next", value: next},
      {label: "action", value: action}
    ]);*/
    //call next to continue the chain 
    return next(action);
  }
}

/**
 * Async middleware action test. This function checks for 
 * specific actionType and if matched it:
 * 1. emits next with changed action to show loader
 * 2. calls another function that returns a promise
 * 3. when promise resolve emits another next to hide a loader 
 * @param {*} param: object {getState, dispatch} redux functions
 */
export const myAsyncAction = ({getState, dispatch}) => {
  //debugger 
  console.log("Redux-middleware.myAsyncAction...enter");
  /*groupLog("Redux-middleware.myAsyncAction...",[
    {label: "getState", value: getState()},
    {label: "dispatch", value: dispatch}
  ]);*/
  return next => action =>{
    console.log(`Redux-middleware.myAsyncAction...next(action.type=${action.type})`);
    //pick ADD_PERSON action
    //and apply promise 
    if (action.type===actionType.ADD_PERSON){
      //show loader 
      next ({
        type: actionType.SHOW_LOADER
      })
      //execute promise 
      asyncPromise().then((b)=>{
        //pass action
        next (action);
        //hide loader?
        next ({
          type: actionType.HIDE_LOADER
        });
      },(err)=>{
        //when promise rejected
        //change action to ADD_PERSON_ERR
        next({
          type: actionType.ADD_PERSON_ERR,
          err: err  
        });
      });
    }else{
      //call next 
      next (action);
    }
  } 
}

/**
 * This action should be called after myAsyncAction (should come after in applyMiddleware)
 * because it will change action type from ADD_PERSON to ADD_PERSON_OK, so the action 
 * that will reach reducers is ADD_PERSON_OK instead of ADD_PERSON which will never reach reducers
 * @param {*} allReduxParamsReceived 
 */
export const myActionChanger = (allReduxParamsReceived) =>{
  //debugger 
  return next => action => {
    //change action type 
    if (action.type===actionType.ADD_PERSON){
      //debugger 
      next({
        type: actionType.ADD_PERSON_OK,
        payload: action.payload 
      })
    }else{
      next(action);
    }
  }
}

/**
 * Async function that returns a promise
 */
function asyncPromise () {
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      //debugger
      //call next action after 2 sec? 
      res(true);
    },2000); 
  });
}


function groupLog (group, items=[]){
  console.group(group);

  items.map(item=>{
    console.log(item.label,"...", item.value);
  });

  console.groupEnd;
}