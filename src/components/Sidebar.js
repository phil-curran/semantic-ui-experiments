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
import JournalDash from "./JournalDash";
import SleepTracker from "./SleepTracker";
import WeightTracker from "./WeightTracker";
import InternetUsage from "./InternetUsage";

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
    let todoBtn = $("#todoBtn");
    let journalBtn = $("#journalBtn");
    let sleepTrackerBtn = $("#sleepTrackerBtn");
    let weightTrackerBtn = $("#weightTrackerBtn");
    let internetUsageBtn = $("#internetUsageBtn");

    let buttons = [
      homeBtn,
      todoBtn,
      journalBtn,
      sleepTrackerBtn,
      weightTrackerBtn,
      internetUsageBtn,
    ];

    let contents = [
      <HomeDash />,
      <ToDoDash />,
      <JournalDash />,
      <SleepTracker />,
      <WeightTracker />,
      <InternetUsage />,
    ];

    let activeColor = "#1abc9c";
    let inactiveColor = "#2c3e50";

    buttons.forEach((button) => {
      button.click(() => {
        let position = buttons.indexOf(button);
        contents.forEach((content) => {
          if (contents.indexOf(content) === position) {
            setActivePane(content);
          }
        });
      });
    });
  }, []);

  return (
    <>
      {/* hamburger menu */}
      <a className="item sidebarMenu">
        <button className="ui icon button sidebarMenu">
          <i className="sidebar icon"></i>
        </button>
      </a>
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
          <a id="todoBtn" className="item">
            <Icon
              path={mdiFormatListChecks}
              title="To Do"
              color="#7f8c8d"
              size={1.5}
            />
          </a>
          <a id="journalBtn" className="item">
            <Icon
              path={mdiNotebookOutline}
              title="Journal"
              color="#7f8c8d"
              size={1.5}
            />
          </a>
          <a id="sleepTrackerBtn" className="item">
            <Icon path={mdiBedClock} title="Sleep" color="#7f8c8d" size={1.5} />
          </a>
          <a id="weightTrackerBtn" className="item">
            <Icon
              path={mdiWeightPound}
              title="Weight"
              color="#7f8c8d"
              size={1.5}
            />
          </a>
          <a id="internetUsageBtn" className="item">
            <Icon
              path={mdiChartLine}
              title="Internet Usage"
              color="#7f8c8d"
              size={1.5}
            />
          </a>
        </div>
        <p></p>
        <div className="pusher segment">
          <div className="ui segment">{activePane}</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
