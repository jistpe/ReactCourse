import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component  {
  state = { 
    persons: [
      { id: 1,name: 'Maria', age: 30 },
      { id: 2,name: 'João', age: 50 },
      { id: 3,name: 'Pedro', age: 23 }
    ], 
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  render() {
    let persons = null;
  
    if(this.state.showPersons){
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
      );
    }

  return (
      <div className={classes.App}>
        <Cockpit persons={this.state.persons} showPersons={this.state.showPersons} clicked={this.tooglePersonsHandler}/>
        {persons}
      </div>
      // React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hi, I\'m a React App!!!'))
    )
  }
}

export default App;
