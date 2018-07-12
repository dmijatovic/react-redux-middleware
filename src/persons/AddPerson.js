import React from 'react';

/* functional (stateless) component
const addPerson = (props) => (
  <div className="persons-add">
    <p className="persons-input">
      <input type="text" placeholder="Name" />
      <input type="number" max="99" placeholder="Age" />
    </p>
    <button className="btn" onClick={props.addPerson}>Add</button>
  </div>
)
export default addPerson;*/

/**
 * This component uses local state to manage values during editing
 * when Add button is clicked the values are passed to parent using
 * prop addPerson (function). 
 * Note! the parent takes care of adding the person to redux store 
 */
class AddPerson extends React.Component{
  state={
    name:'Test name',
    age: 24
  }
  setName = (event) =>{
    this.setState({name: event.target.value});
  }
  setAge = (event) =>{
    this.setState({age: event.target.value});
  }
  addPerson = () =>{
    console.log("Add person...", this.state);
    this.props.addPerson(this.state);
  }
  render(){
    return(
      <div className="persons-add">
        <p className="persons-input">
          <input className="form-input"
            style={{width:75 +'%'}} 
            type="text"
            placeholder="Name"
            onChange={this.setName}
            value={this.state.name}/>
          <input className="form-input" 
            style={{width:25 +'%'}}
            type="number"
            max="99" 
            placeholder="Age"
            onChange={this.setAge} 
            value={this.state.age}/>
        </p>
        <button className="btn btn-primary btn-md" 
          onClick={this.addPerson}>Add
        </button>
      </div>
    )
  }
}

export default AddPerson;