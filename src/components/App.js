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
// import Popup from "./Popup.js";
// import Multiselect from "./Multiselect.js";
// import Login from "./Login.js";
// import WeekdayModel from "./WeekdayModel.js";
import WeekdayModelTable from "./WeekdayModelTable.js";
// import PointingMenu from "./PointingMenu.js";
import SleepTracker from "./SleepTracker.js";
import SidebarAndTabs from "./SidebarAndTabs.js";

function App() {
  // const [toggleBtn, setToggleBtn] = useState(true);
  // const toggle = () => setToggleBtn((val) => !val);

  return (
    <div>
      <WeekdayModelTable />
      {/* <Buttons />
      <SleepTracker />
      <SidebarAndTabs />
      <PointingMenu />
      <Sidebar />
      <Login />
      <WeekdayModel />
      <SecondaryMenu />
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
