import $ from "jquery";

const SleepTracker = () => {
  $(document).ready(function () {
    $(".menu .item").tab();
    $(".item").tab();
  });

  return (
    <div id="sleepTracker" className="ui container">
      <div className="ui segment">
        <h1 className="ui center aligned header">SleepTracker</h1>
        <div className="ui four item pointing secondary menu">
          <a className="item active" data-tab="first">
            Dashboard
          </a>
          <a className="item" data-tab="second">
            Historical Data
          </a>
          <a className="item" data-tab="third">
            Data Entry
          </a>
          <a className="item" data-tab="fourth">
            Data Table
          </a>
        </div>
        <div className="ui tab active" data-tab="first">
          <div className="ui grid">
            <div className="eight wide column">
              <div className="ui segment">
                <h4 className="ui center aligned header">
                  Average Sleep Score
                </h4>
              </div>
            </div>
            <div className="eight wide column">
              <div className="ui segment">
                <h4 className="ui center aligned header">Sleep Breakdown</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="ui tab" data-tab="second">
          <div className="ui grid">
            <div className="sixteen wide column">
              <div className="ui segment">
                <h4 className="ui center aligned header">Historical Data</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="ui tab" data-tab="third">
          <div className="ui grid">
            <div className="sixteen wide column">
              <div className="ui segment">
                <h4 className="ui center aligned header">Data Entry</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="ui tab" data-tab="fourth">
          <div className="ui grid">
            <div className="sixteen wide column">
              <div className="ui segment">
                <h4 className="ui center aligned header">Data Table</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepTracker;
