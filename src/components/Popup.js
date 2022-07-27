import $ from "jquery";

$(document).ready(function () {
  $(".ui.button").popup();
});

const Popup = () => {
  return (
    <>
      <div className="ui button">Show fluid popup</div>
      <div className="ui fluid popup bottom right transition hidden">
        <div className="ui four column divided center aligned grid">
          <div className="column">
            <a class="ui tag label">New</a>
            <a class="ui red tag label">Upcoming</a>
            <a class="ui teal tag label">Featured</a>
          </div>
          <div className="column">2</div>
          <div className="column">3</div>
          <div className="column">4</div>
        </div>
      </div>
    </>
  );
};

export default Popup;
