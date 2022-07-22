import $ from "jquery";

const Checkbox = () => {
  $(".ui.checkbox").checkbox("toggle");
  return (
    <>
      <div className="ui checkbox">
        <input type="checkbox" name="example" />
        <label>Make my profile visible</label>
      </div>
      <div className="ui slider checkbox">
        <input type="checkbox" name="newsletter" />
        <label>Accept terms and conditions</label>
      </div>
      <div className="ui toggle checkbox">
        <input type="checkbox" name="public" />
        <label>Subscribe to weekly newsletter</label>
      </div>
    </>
  );
};

export default Checkbox;
