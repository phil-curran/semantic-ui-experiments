import React, { useState } from "react";

// import $ from "jquery";
import "../semantic/semantic.js";
import "../semantic/semantic.css";
import "../styles/App.css";

// import Accordion from "./Accordion";
// import Buttons from "./Buttons.js";
// import Checkbox from "./Checkbox.js";
// import Dropdown from "./Dropdown.js";
// import Form from "./Form.js";
// import Modal from "./Modal.js";
// import Sidebar from "./Sidebar.js";
// import Tabs from "./Tabs.js";
// import Search from "./Search";
// import Emojis from "./Emojis.js";
// import SecondaryMenu from "./SecondaryMenu.js";
// import PointingMenu from "./PointingMenu.js";
// import Popup from "./Popup.js";
// import Multiselect from "./Multiselect.js";
// import SidebarAndTabs from "./SidebarAndTabs.js";
// import Login from "./Login.js";
import WeekdayModel from "./WeekdayModel.js";
import WeekdayModelTable from "./WeekdayModelTable.js";

function App() {
  // const [toggleBtn, setToggleBtn] = useState(true);
  // const toggle = () => setToggleBtn((val) => !val);

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
    <div>
      <WeekdayModelTable />
      {/* <Buttons />
      <WeekdayModel />
      <Sidebar />
      <SidebarAndTabs />
      <SecondaryMenu />
      <PointingMenu />
      <Tabs first={first} second={second} third={third} />
      <Login />
      <Multiselect />
      <Popup />
      <Dropdown />
      <Modal />
      <Accordion />
      <Emojis />
      <Form />
      <Checkbox />
      <Search /> */}
    </div>
  );
}

export default App;
