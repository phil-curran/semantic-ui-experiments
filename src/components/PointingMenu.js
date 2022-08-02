import $ from "jquery";

const PointingMenu = () => {
  $(document).ready(function () {
    $(".ui.pointing.menu").on("click", ".item", function () {
      if (!$(this).hasClass("active")) {
        $(this).addClass("active").siblings(".item").removeClass("active");
      }
    });
  });

  return (
    <>
      <div className="ui pointing secondary menu">
        <a className="item active" data-tab="one">
          Home
        </a>
        <a className="item" data-tab="two">
          Messages
        </a>
        <a className="item" data-tab="three">
          Friends
        </a>
      </div>
      <div className="ui segment" data-tab="one">
        <p>ONE</p>
      </div>
      <div className="ui segment" data-tab="two">
        <p>Two</p>
      </div>
      <div className="ui segment" data-tab="three">
        <p>Three</p>
      </div>
    </>
  );
};

export default PointingMenu;
