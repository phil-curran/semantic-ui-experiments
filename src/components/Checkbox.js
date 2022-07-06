import $ from "jquery";
import "../styles/button.css";
import "../styles/checkbox.css";
import "../styles/icon.css";
import "../scripts/checkbox.js";

const Checkbox = () => {
  $(".ui.checkbox").checkbox("toggle");
  return (
    <>
      <div className="ui checkbox">
        <input type="checkbox" name="example" />
        <label>Make my profile visible</label>
      </div>
      <div class="ui slider checkbox">
        <input type="checkbox" name="newsletter" />
        <label>Accept terms and conditions</label>
      </div>
      <div class="ui toggle checkbox">
        <input type="checkbox" name="public" />
        <label>Subscribe to weekly newsletter</label>
      </div>
    </>
  );
};

export default Checkbox;
