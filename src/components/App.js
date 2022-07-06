import $ from "jquery";
import "../styles/semantic.css";
import "../styles/App.css";
import "../scripts/semantic.js";

import Search from "./Search";

function App() {
  return (
    <div className="ui container">
      <Search />
    </div>
  );
}

export default App;
