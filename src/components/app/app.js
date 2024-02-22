import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Jogn W.', salary: 800, increase: false, like: false, id: 1},
        {name: 'Micahel J.', salary: 8000, increase: false, like: false, id: 2},
        {name: 'Kendrick L.', salary: 3000, increase: true, like: false, id: 3},
        {name: 'Victor P.', salary: 5000, increase: false, like: false, id: 4},
        {name: 'Vlad M.', salary: 12000, increase: false, like: true, id: 5},
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

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  render () {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>
  
        <div class="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeesList
        data={this.state.data}
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm
        onAddEmployee={this.addItem}/>
      </div>
    );
  }
}

export default App;
