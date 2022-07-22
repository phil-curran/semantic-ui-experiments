import React, { useState } from "react";

import $ from "jquery";
import "../semantic/semantic.js";
import "../semantic/semantic.css";
import "../styles/App.css";

import Buttons from "./Buttons.js";
import Checkbox from "./Checkbox.js";
import Dropdown from "./Dropdown.js";
import Form from "./Form.js";
import Modal from "./Modal.js";
import Sidebar from "./Sidebar.js";
import Tabs from "./Tabs.js";
import Search from "./Search";
import Emojis from "./Emojis.js";
import SecondaryMenu from "./SecondaryMenu.js";

function App() {
  const [toggleBtn, setToggleBtn] = useState(true);
  const toggle = () => setToggleBtn((val) => !val);

  const first = {
    title: "First",
    content: "First content",
  };

  const second = {
    title: "Second",
    content: "Second content",
  };

  const third = {
    title: "Third",
    content: "Third content",
  };

  return (
    <div className="ui container">
      <SecondaryMenu />
      {/* <Buttons />
      <Tabs first={first} second={second} third={third} />
      <Dropdown />
      <Modal />
      <Emojis />
      <Sidebar toggleBtn={toggleBtn} />
      <Form />
      <Checkbox />
      <Search /> */}
    </div>
  );
}

export default App;
