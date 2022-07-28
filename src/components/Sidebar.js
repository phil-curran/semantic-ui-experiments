import $ from "jquery";
import Icon from "@mdi/react";
import {
  mdiMonitorDashboard,
  mdiFormatListChecks,
  mdiNotebookOutline,
  mdiBedClock,
  mdiWeightPound,
  mdiChartLine,
} from "@mdi/js";
import "./Sidebar.css";

const Sidebar = () => {
  $(document).ready(() => {
    // sidebar visibility: show on hamburger click
    $(".sidebarMenu").click(() => {
      $(".ui.sidebar")
        .sidebar("setting", "transition", "overlay")
        .sidebar("toggle");
    });
    // sidebar visibility: hide on item click
    $(".sidebar.menu .item").click(() => {
      $(".ui.sidebar").sidebar("toggle");
    });
    // $(".menu .item").segment("toggle");
    let homeBtn = $("#homeBtn");
    let topicsBtn = $("#topicsBtn");
    let friendsBtn = $("#friendsBtn");
    let historyBtn = $("#historyBtn");

    let homeContent = $("#home");
    let topicsContent = $("#topics");
    let friendsContent = $("#friends");
    let historyContent = $("#history");

    let panels = [homeBtn, topicsBtn, friendsBtn, historyBtn];
    let contents = [homeContent, topicsContent, friendsContent, historyContent];

    panels.forEach((panel) => {
      panel.click(() => {
        let position = panels.indexOf(panel);
        contents.forEach((content) => {
          if (contents.indexOf(content) === position) {
            content.removeClass("hidden").addClass("visible");
          } else {
            content.removeClass("visible").addClass("hidden");
          }
        });
      });
    });
  });

  let activeTab = "#1abc9c";
  let inactiveTab = "#7f8c8d";

  return (
    <>
      {/* hamburger menu */}
      <div>
        <a className="item sidebarMenu">
          <button className="ui icon button sidebarMenu">
            <i className="sidebar icon"></i>
          </button>
        </a>
      </div>
      {/* actual sidebar */}
      <div className="ui container bottom attached segment pushable">
        <div className="ui inverted labeled icon left inline vertical sidebar menu">
          <a id="homeBtn" className="item">
            <Icon
              path={mdiMonitorDashboard}
              title="Dashboard"
              color="#1abc9c"
              size={1.5}
            />
          </a>
          <a id="topicsBtn" className="item">
            <Icon
              path={mdiFormatListChecks}
              title="To Do"
              color="#7f8c8d"
              size={1.5}
            />
          </a>
          <a id="friendsBtn" className="item">
            <Icon
              path={mdiNotebookOutline}
              title="Journal"
              color="#7f8c8d"
              size={1.5}
            />
          </a>
          <a id="historyBtn" className="item">
            <Icon path={mdiBedClock} title="Sleep" color="#7f8c8d" size={1.5} />
          </a>
          <a id="historyBtn" className="item">
            <Icon
              path={mdiWeightPound}
              title="Weight"
              color="#7f8c8d"
              size={1.5}
            />
          </a>
          <a id="historyBtn" className="item">
            <Icon
              path={mdiChartLine}
              title="Internet Usage"
              color="#7f8c8d"
              size={1.5}
            />
          </a>
        </div>
        <p></p>
        <div className="pusher">
          <div id="home" className="ui basic segment visible">
            Dashboard
          </div>
          <div id="topics" className="ui basic segment hidden">
            To Do
          </div>
          <div id="friends" className="ui basic segment hidden">
            Friends
          </div>
          <div id="history" className="ui basic segment hidden">
            History
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
