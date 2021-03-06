//import React { Component } from 'react';
import React, { Component } from 'react';
//import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.component';
//import './components/card-list/'
import './App.css';
//import { react } from '@babel/types';
 
class App extends Component{
  constructor(){

    super();
    this.state = {

   monsters: [ ]
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({monsters:users}));
  
}

render() {
  return(

   <div className="App">

     <CardList monsters = {this.state.monsters} />
     
  
    </div>

  );

  
}
}
export default App;