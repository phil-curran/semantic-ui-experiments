import $ from "jquery";

const SecondaryMenu = () => {
  return (
    <>
      <div className="ui secondary pointing menu">
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
      <div className="ui segment active" data-tab="first">
        <p>First</p>
      </div>
      <div className="ui segment" data-tab="second">
        <p>Second</p>
      </div>
      <div className="ui segment" data-tab="thirdt">
        <p>Third</p>
      </div>
      <div className="ui segment" data-tab="fourth">
        <p>Fourth</p>
      </div>
    </>
  );
};

export default SecondaryMenu;
