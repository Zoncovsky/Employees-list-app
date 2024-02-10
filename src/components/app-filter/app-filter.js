import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button
        className="btn btn-light"
        type="button">
          All employers
      </button>
      <button
        className="btn btn-outline-light"
        type="button">
          To grow up
      </button>
      <button
        className="btn btn-outline-light"
        type="button">
          Salary above 1000$
      </button>
    </div>
  );
}

export default AppFilter;
