// import $ from "jquery";
import "../styles/App.css";
import "../styles/site.css";
import "../styles/container.css";
import "../styles/grid.css";

import Form from "./Form";
import Buttons from "./Buttons";
import Accordion from "./Accordion";

function App() {
  return (
    <div className="ui container">
      {/* <Form />
      <Buttons /> */}
      <Accordion />
    </div>
  );
}

export default App;
