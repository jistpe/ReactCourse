import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './ValidationComponent/ValidationComponent'

class App extends Component  {
  state = { 
    persons: [
      { id: 1,name: 'Maria', age: 30 },
      { id: 2,name: 'João', age: 50 },
      { id: 3,name: 'Pedro', age: 23 }
    ], 
    showPersons: false,
    txtLength: ''
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
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

  inputLenght = (event) => {
    const txt = event.target.value;
    this.setState({txtLength: txt.length});
  }

  render() {

  let persons = null;

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
  }

  return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <input onChange={ this.inputLenght }/>
        <p>{ this.state.txtLength }</p>
        <Validation length={ this.state.txtLength }/><br/>
        <button onClick={ this.tooglePersonsHandler }>Switch Name</button>
        {persons}

      </div>
      // React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hi, I\'m a React App!!!'))
    )
  }
}

export default App;
