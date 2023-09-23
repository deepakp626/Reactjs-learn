import React, { Component } from 'react'

export default class ControlledComponent  extends Component {
constructor(props) {
  super(props)

  this.state = {
     name:"Wscube tech",
  }
}
changeHandler= (event) =>{
    const name = event.target.value;
    this.setState({name},()=>{
        console.log(this.state)
    })
}
  render() {
    return (
      <div>
        <form>
            <input type='text' 
            name="user_name"
             value={this.state.name}
             onChange={this.changeHandler} />    
        </form>
      </div>
    )
  }
}
