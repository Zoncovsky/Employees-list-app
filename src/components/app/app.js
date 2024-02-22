import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Jogn W.', salary: 800,  id: 1},
        {name: 'Micahel J.', salary: 8000, id: 2},
        {name: 'Kendrick L.', salary: 3000,  id: 3},
        {name: 'Victor P.', salary: 5000,  id: 4},
        {name: 'Vlad M.', salary: 12000, id: 5},
      ]
    } 
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (newEmployee) => {
    this.setState(({data}) => {
      const nextId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
      newEmployee.id = nextId;
      return {
        data: [...data, newEmployee]
      }
    })
  }

  render () {
    return (
      <div className="app">
        <AppInfo/>
  
        <div class="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployersList
        data={this.state.data}
        onDelete={this.deleteItem}/>
        <EmployeesAddForm
        onAddEmployee={this.addItem}/>
      </div>
    );
  }
}

export default App;
