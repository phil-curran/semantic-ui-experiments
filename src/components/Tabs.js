import $ from "jquery";
import "../styles/tab.css";
import "../styles/menu.css";
import "../scripts/tab.js";

const Tabs = () => {
  $(".menu .item").tab();

  return (
    <>
      <div className="ui top attached tabular menu">
        <a className="active item" data-tab="first">
          First
        </a>
        <a className="item" data-tab="second">
          Second
        </a>
        <a className="item" data-tab="third">
          Third
        </a>
      </div>
      <div className="ui bottom attached active tab segment" data-tab="first">
        First
      </div>
      <div className="ui bottom attached tab segment" data-tab="second">
        Second
      </div>
      <div className="ui bottom attached tab segment" data-tab="third">
        Third
      </div>
    </>
  );
};

export default Tabs;
