import $ from "jquery";

const Multiselect = () => {
  $(document).ready(function () {
    $(".ui.dropdown").dropdown({
      allowAdditions: true,
      keepOnScreen: true,
      showOnFocus: true,
      label: {
        transition: "horizontal flip",
        duration: 200,
        variation: false,
      },
    });

    $(".ui.button").on("click", function () {
      $(".ui.dropdown").dropdown("restore defaults");
    });
  });

  return (
    <>
      <div className="ui form">
        <h3>Dropdown with Topic Display</h3>
        <div className="inline field">
          <label>Select Topics</label>
          <select
            name="skills"
            multiple=""
            className="label ui selection fluid dropdown"
          >
            <option value="">All</option>
            <option value="1">Change Methodology</option>
            <option value="2">Cognitive Computing & AI</option>
            <option value="3">Connectivity & Collaboration</option>
            <option value="4">Culture in Action</option>
            <option value="5">Future of Work</option>
            <option value="6">HR Transformation</option>
            <option value="7">Human-centered Design</option>
            <option value="8">Machine Learning & AI</option>
            <option value="9">Operational Effectiveness</option>
            <option value="10">Operational Excellence</option>
            <option value="11">Organizational Change</option>
          </select>
        </div>
      </div>
      <br />
      <div className="ui button">Clear Filters</div>
    </>
  );
};

export default Multiselect;
