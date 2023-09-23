// import logo from './logo.svg';
import './App.css';
// import Person from './src/Components/Person/Person.js';
import Person  from './Components/Person/Person.js';
// Named export impor
// import {Man} from './Components/Man';

// import Demo from './Components/Demo'
import { Component } from 'react';
import  Form from './Components/Form';
import ControlledComponent from './Components/ControlledComponent';




// const  App = ()=> { 
//   return (
//     <div className="App">
//         <Demo number="1"></Demo>
//         <Person name="John" age="20"/> 
//     </div>
//   );
// }

class App extends Component{
  constructor(props){
    super(props);
    // this.state= {
    //   demo:"testing",
    // }
    this.state = {
      persons:[
        {
          id:1,
          name:"wscube tech",
          age:11,
        },
        {
          id:2,
          name:"Bhagirath",
          age:22,
        },
        {
          id:3,
          name:"John",
          age:24,
        },
        {
          id:4,
          name:"testing",
          age:22,
        }
      ],
      isShow : true
    };
    this.toggalHandlar = this.toggalHandlar.bind(this)
  }
  toggalHandlar(){
      this.setState({isShow:!this.state.isShow})
  }
  buttonClickHandler(){
       console.log(this.state)
      console.log(this.props)
  }
  removeHandler(personsIndex){
      const personsCopy = this.state.persons;
      personsCopy.splice(personsIndex,1)
      this.setState({persons:personsCopy})
  }
  render(){
    let persons;
    if(this.state.isShow){
      persons =  this.state.persons.map((p,index)=>{
        return  <Person key={p.id} id={p.id} name={p.name} age={p.age} remove={()=> this.removeHandler(index)} />
      });
    }else{
      persons = "";
    }
    console.log(persons)
    console.log(this.state.isShow)
    return(
      <div className="App">
        {/* <Person name="wsCube tech" age="22"/> */}


        {/* type 1 event binding */}
        {/*  Even binding Example  */}
          {/* <button type="button" onClick={()=>this.buttonClickHandler()}>Click me</button> */}

            {/* type 1 event binding */}
        {/*  Even binding Example  */}
        {/* <button type="button" onClick={()=>this.buttonClickHandler.bind(this)}>Click me</button> */}


        {/*  */}
        {/* <Person  name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person  name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}

        {/*  */}
        {/* <button onClick={this.toggalHandlar}>Toggal</button>
        {
         persons
        } */}


        {/* Form input handling */}
        {/* <Form /> */}

        {/* Controlled component */}
        <ControlledComponent />
       </div>

    )
  }
}
export default App;
