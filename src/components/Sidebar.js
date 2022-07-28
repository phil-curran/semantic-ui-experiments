import React, { useState } from "react";
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
import HomeDash from "./HomeDash";
import ToDoDash from "./ToDoDash";
import FriendsDash from "./FriendsDash";

const Sidebar = () => {
  const [activePane, setActivePane] = useState(<HomeDash />);
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

    let homeBtn = $("#homeBtn");
    let topicsBtn = $("#topicsBtn");
    let friendsBtn = $("#friendsBtn");

    let buttons = [homeBtn, topicsBtn, friendsBtn];
    let contents = [<HomeDash />, <ToDoDash />, <FriendsDash />];

    buttons.forEach((button) => {
      button.click(() => {
        let position = buttons.indexOf(button);
        setActivePane(contents[position]);
      });
    });
  }, []);

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
      <div className="ui container bottom attached pushable">
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
          <div className="ui segment">{activePane}</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
