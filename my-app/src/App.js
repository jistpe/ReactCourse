import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';

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
      return p.userId === id;
    });
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  render() {
  let persons = null;
  let btnClass = [classes.Button];

  if(this.state.showPersons){
    persons = (
      <div>
        { this.state.persons.map((person, index) => {
          return <Person name={person.name} 
                         age={person.age} 
                         click={() => this.deletePersonHandler(index)}
                         key={person.id}
                         changed={(event) => this.nameChangeHandler(event, person.id)}/>
        })}
      </div>
    );

    btnClass.push(classes.Red);
  }

  const assignedClasses = [];
  if(this.state.persons.length <= 2){
    assignedClasses.push(classes.red);
  }
  if(this.state.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }

  return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass.join(' ')} onClick={ this.tooglePersonsHandler }>Toggle Name</button>
        {persons}

      </div>
      // React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hi, I\'m a React App!!!'))
    )
  }
}

export default App;
