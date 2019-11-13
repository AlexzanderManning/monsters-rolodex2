import React, {Component} from 'react';

import {CardList} from "./components/card-list/card-list.component";

import SearchForm from './components/search-form/search-form.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [], // initial state is empty we wait until fetch completes
      searchField: ''
    };
    //Binding this to handelChange
    // this.handleChange = this.handleChange.bind(this);
  }

  //Waits until our component mounts
  componentDidMount(){
    //fetch returns a promise.
    fetch('https://jsonplaceholder.typicode.com/users')
    //returns a new promise
      .then(response => response.json())
      .then(users => this.setState({monsters: users})); //fills monsters state
  }

  // handleChange(e){
  //   //Will not work because this is not set within a function. 
  //   //this has to be bound to the app component in our constructor
  //   this.setState({searchField: e.target.value});
  // }
   //this is automatically bound to to the context the function was defined.
   //this === App component.
   
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }



  render(){
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    //Destructruing is an easeir way of doing the above.
    //Destrucuting allows you to pull properties from an object and set them to variables.
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchForm 
         className="search"
         type="search"
         placeholder="Search Monsters...." 
         handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        
      </div>
    );
  }
}

export default App;
