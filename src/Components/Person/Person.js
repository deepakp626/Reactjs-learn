import React,{Component} from "react";
// import {Man} from './Man'
// import  './Person.module.css'

class Person extends Component{
    constructor(props){    
        super(props)
        this.props = props
        this.state ={
             name:"John",
             age:22,
        }
    }
    nameChangeHandler(){
            console.log(this.state)
            this.setState({name:"Bhagirath", age:23},()=>{
                console.log(this.state)
            })
    }
    render(){
        console.log()
        const style ={
            fontSize:"40px",
            color:"red"
        }
        return(
           <div>
              {/* <i>Dear {this.state.name}, {this.state.age} year User, 
              Welcome to Wscube Tech
              </i>
              <br /> */}
              {/* <button onCltick={this.nameChangeHandler.bind(this)}>Click me</button> */}


            {/* <div className=''  >
              <h1>
                <label className="PersonLabel">Name:</label> :<i>{this.props.name}</i>
                <br/>
                <label style={style}>Age:</label> :<i>{this.props.age}</i>             
                <i>More</i>
              </h1>
              <i className="Label">Testing</i>
            </div> */}


            <div className='' onClick={this.props.remove} >
              <h1>
                <label className="PersonLabel">Name:</label> :<i>{this.props.name}</i>
                <br />
                {/* key koi props nahe hai warning dega */}
                {/* {this.props.key} */}
                 {this.props.id}

                <br/>
                <label style={style}>Age:</label> :<i>{this.props.age}</i>             
              </h1>
            </div>  

           </div>

        )
        }
}
export default Person