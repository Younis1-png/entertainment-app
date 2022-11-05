import "./style.scss";
import SearchIcon from "./assets/icon-search.svg";

function App() {
  return (
    <div className="App">
      <div className="input">
        <h1>Sign Up</h1>
        <div className="input-container">
          {/* <SearchIcon /> */}
          <input
            type="text"
            className="input-field"
            placeholder="Email address"
          />
          <input
            type="text"
            className="input-field"
            placeholder="Username address"
          />
        </div>
        <button className="button">Login to your account </button>
        <p>
          Don't have an account? <span>Sing up</span>
        </p>
      </div>
    </div>
  );
}

export default App;
