import './App.css';
import {Component} from "react";
import { CardList } from './components/card-list/card-list.compnent';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:'',
    }
  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value});
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}));
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(searchField, filteredMonsters);
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
        placeholder='cauta manstars' 
        handleChenge={this.handleChange}/>
        <input 
        //className='search'
        type='search' 
        placeholder={"eha"}  
        onChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
