import $ from "jquery";

const Sidebar = (props) => {
  $(document).ready(function () {
    $(".sidebarMenu").click(function () {
      $(".ui.sidebar").sidebar("toggle");
    });
  });

  return (
    <>
      <div className="ui top attached demo menu visible">
        <a className="item sidebarMenu">
          <i className="sidebar icon"></i>
          Menu
        </a>
      </div>
      <div className="ui bottom attached segment pushable">
        <div className="ui inverted labeled icon left inline vertical sidebar menu">
          <a className="item">
            <i className="home icon"></i>
            Home
          </a>
          <a className="item">
            <i className="block layout icon"></i>
            Topics
          </a>
          <a className="item">
            <i className="smile icon"></i>
            Friends
          </a>
          <a className="item">
            <i className="calendar icon"></i>
            History
          </a>
        </div>
        <div className="ui container pusher">
          <div className="">
            <div className="ui basic segment">
              <h3 className="ui header">Application Content</h3>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
