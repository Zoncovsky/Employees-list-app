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
        {name: 'Kendrick L.', salary: 3000, increase: false, like: false, id: 3},
        {name: 'Victor P.', salary: 5000, increase: false, like: false, id: 4},
        {name: 'Vlad M.', salary: 12000, increase: false, like: true, id: 5},
      ],
      term: '',
      filter: 'all'
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

  searchEmp = (itmes, term) => {
    if (term.length === 0) {
      return itmes;
    }

    return itmes.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'like':
        return items.filter(item => item.like);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render () {
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>
  
        <div class="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
  
        <EmployeesList
        data={visibleData}
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm
        onAddEmployee={this.addItem}/>
      </div>
    );
  }
}

export default App;
