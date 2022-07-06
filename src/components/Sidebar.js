import $ from "jquery";
import "../styles/sidebar.css";
import "../styles/menu.css";
import "../styles/button.css";
import "../styles/icon.css";
import "../scripts/sidebar.js";

const Sidebar = () => {
  // using context
  $(".context.example .ui.sidebar")
    .sidebar({
      context: $(".context.example .bottom.segment"),
    })
    .sidebar("attach events", ".context.example .menu .item");

  return (
    <>
      <div class="ui visible top attached demo menu">
        <a class="item">
          <i class="sidebar icon"></i>
          Menu
        </a>
      </div>
      <div class="ui bottom attached segment pushable">
        <div
          class="ui inverted labeled icon left inline vertical sidebar menu"
          style=""
        >
          <a class="item">
            <i class="home icon"></i>
            Home
          </a>
          <a class="item">
            <i class="block layout icon"></i>
            Topics
          </a>
          <a class="item">
            <i class="smile icon"></i>
            Friends
          </a>
          <a class="item">
            <i class="calendar icon"></i>
            History
          </a>
        </div>
        <div class="pusher">
          <div class="ui basic segment">
            <h3 class="ui header">Application Content</h3>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;