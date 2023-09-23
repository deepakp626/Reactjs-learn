import React, { Component } from 'react'
// import { connect } from 'react-redux'

class Form extends Component {
constructor(props) {
  super(props)

  this.state = {
        name:null,
        country:null,
  }
}
nameChangeHandler(event){
    console.log("name",event.target.value)
}
nameChangeHandler = (event)=>{
    console.log("Select",event.target.value)
}
submitHandler= (event)=>{
        event.preventDefault();
        console.log(this.state)
        const name = event.target.name.value;
        const country = event.target.name.country;
        this.setState({name,country},()=>{
            console.log(this.state)
            event.target.name.value = ""
            event.target.name.country = ""
        })
}
  render() {
    return (
      <div>
            <form onSubmit={this.submitHandler}>
                <div>
                 <label htmlFor="">Name:</label>
                 <input type="text" name="name" onKeyUp={this.nameChangeHandler}/>
                </div>
                <div>
                 <label htmlFor="">Country</label>
                 <select name="Country" onChange={this.nameChangeHandler}>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                 </select>
                </div>
                 <button type="submit" >Submit</button>
            </form>
      </div>
    )
  }
}

export default Form;

