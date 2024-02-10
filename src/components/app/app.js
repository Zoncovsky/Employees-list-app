import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'Jogn W.', salary: 800, increase: false, id: 1},
    {name: 'Micahel J.', salary: 8000, increase: true, id: 2},
    {name: 'Kendrick L.', salary: 3000, increase: false, id: 3},
    {name: 'Victor P.', salary: 5000, increase: false, id: 4},
    {name: 'Vlad M.', salary: 12000, increase: true, id: 5},
  ];

  return (
    <div className="app">
      <AppInfo/>

      <div class="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployersList data={data}/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
