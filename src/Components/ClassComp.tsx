import React, { Component } from 'react'
import { stateTypes, propTypes } from './Component.types';
export class ClassComp extends Component<propTypes,stateTypes> {
    state={
        name:"vinoth"
    }

    handleChange=()=>{
        this.setState({name:"Vishwas"})
    }
  render() {
    return (
        <>
      <div>ClassComp person name is {this.state.name} and age from props is {this.props.age}</div>
      <button onClick={this.handleChange}>Change it </button>
        </>
    )
  }
}

export default ClassComp