import './App.css';
import todosData from './data/todosData'
import { Component } from 'react';
import Navbar from "./components/Navbar";
import TodosList from './components/TodosList';

class App extends Component {
  state = {    //rerenders entire application
    
    todosData: todosData,
    text: '',
    createdAt: '',
    isCompleted: false
   
  }
 
 
  handleChange = (event) => {
   
       this.setState({ [event.target.id] : event.target.value }  )
    
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newToDos = {
      text: this.state.text,
      createdAt: this.state.createdAt,
      isCompleted: this.state.isCompleted
    }
     // set the new values in the state
    this.setState({
      todosData: [newToDos, ...this.state.todosData],
      text: '',
      createdAt: '',
      isCompleted: false
    })
  }
  render() {
  
  return (
    <div className="App">
    <Navbar text='Todos App' />

     <form onSubmit={this.handleSubmit}>
      <label htmlFor="text">TEXT</label>
      <input type="text" value={this.state.text} onChange={this.handleChange} id="text"/>
      <br/>
      <label htmlFor="createdAt">Created At</label>
      <input type="text" value={this.state.createdAt} onChange={this.handleChange} id="createdAt"/>
      <input type="submit"></input>
     </form>

    
    <TodosList todos={this.state.todosData}/>
    </div>
  );
  }
}



export default App;
