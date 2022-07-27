import $ from "jquery";

const SidebarAndTabs = (props) => {
  $(document).ready(() => {
    $(".sidebarMenu").click(() => {
      $(".ui.sidebar")
        .sidebar("setting", "transition", "overlay")
        .sidebar("toggle");
    });
    // sidebar visibility: hide on item click
    $(".sidebar.menu .item").click(() => {
      $(".ui.sidebar").sidebar("toggle");
    });
    $(".item").tab("toggle");
  });

  return (
    <>
      <div className="ui top attached demo menu visible">
        <a className="item sidebarMenu">
          <i className="sidebar icon"></i>
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
        <div className="pusher">
          <div className="">
            <div className="ui basic segment">
              <h3 className="ui header">Application Content</h3>
              <div className="ui four item menu">
                <a className="item active" data-tab="first">
                  Home
                </a>
                <a className="item" data-tab="second">
                  Messages
                </a>
                <a className="item" data-tab="third">
                  Friends
                </a>
                <a className="item" data-tab="fourth">
                  Other
                </a>
              </div>
              <div className="ui tab segment active" data-tab="first">
                <p>First</p>
              </div>
              <div className="ui tab segment" data-tab="second">
                <p>Second</p>
              </div>
              <div className="ui tab segment" data-tab="third">
                <p>Third</p>
              </div>
              <div className="ui tab segment" data-tab="fourth">
                <p>Fourth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarAndTabs;
