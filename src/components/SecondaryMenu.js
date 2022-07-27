import $ from "jquery";

const SecondaryMenu = () => {
  $(document).ready(function () {
    $(".item").tab();
  });

  return (
    <>
      {/* <div className="ui fluid four item pointing menu"> */}
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
    </>
  );
};

export default SecondaryMenu;
