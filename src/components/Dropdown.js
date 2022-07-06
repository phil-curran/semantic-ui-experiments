import $ from "jquery";
import "../styles/button.css";
import "../styles/checkbox.css";
import "../styles/icon.css";
import "../scripts/dropdown.js";

const Dropdown = () => {
  $(".ui.selection.dropdown").dropdown();
  return (
    <div className="ui selection dropdown">
      <input type="hidden" name="gender" />
      <i className="dropdown icon"></i>
      <div className="default text">Gender</div>
      <div className="menu">
        <div className="item" data-value="1">
          Male
        </div>
        <div className="item" data-value="0">
          Female
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
