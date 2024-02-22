import './app-info.css';

const AppInfo = ({increased, employees}) => {
  return (
    <div className="app-info">
      <h1>Company employee records:</h1>
      <h1>Number of employees: {employees}</h1>
      <h1>Those who will receive the award: {increased}</h1>
    </div>
  )
}

export default AppInfo;
