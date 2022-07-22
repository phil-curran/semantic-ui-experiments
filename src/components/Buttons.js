const Buttons = () => {
  return (
    <>
      <hr />
      <button className="ui button">Follow</button>

      <div className="ui labeled button" tabIndex="0">
        <div className="ui red button">
          <i className="heart icon"></i> Like
        </div>
        <a className="ui basic red left pointing label">1,048</a>
      </div>
      <div className="ui labeled button" tabIndex="0">
        <div className="ui basic blue button">
          <i className="fork icon"></i> Forks
        </div>
        <a className="ui basic left pointing blue label">1,048</a>
      </div>
      <h1>Icon Button:</h1>
      <button className="ui icon button">
        <i className="cloud icon"></i>
      </button>
      <h1>Labeled Icon Button:</h1>
      <button className="ui labeled icon button">
        <i className="pause icon"></i>
        Pause
      </button>
      <button className="ui right labeled icon button">
        <i className="right arrow icon"></i>
        Next
      </button>
      <h1>Outlined Colored Buttons:</h1>
      <button className="ui red basic button">Red</button>
      <button className="ui orange basic button">Orange</button>
      <button className="ui yellow basic button">Yellow</button>
      <button className="ui olive basic button">Olive</button>
      <button className="ui green basic button">Green</button>
      <button className="ui teal basic button">Teal</button>
      <button className="ui blue basic button">Blue</button>
      <button className="ui violet basic button">Violet</button>
      <button className="ui purple basic button">Purple</button>
      <button className="ui pink basic button">Pink</button>
      <button className="ui brown basic button">Brown</button>
      <button className="ui grey basic button">Grey</button>
      <button className="ui black basic button">Black</button>
      <h1>Outlined Inverted Colored Buttons:</h1>
      <div className="ui inverted segment">
        <button className="ui inverted button">Standard</button>
        <button className="ui inverted primary button">Primary</button>
        <button className="ui inverted secondary button">Secondary</button>
        <button className="ui inverted red button">Red</button>
        <button className="ui inverted orange button">Orange</button>
        <button className="ui inverted yellow button">Yellow</button>
        <button className="ui inverted olive button">Olive</button>
        <button className="ui inverted green button">Green</button>
        <button className="ui inverted teal button">Teal</button>
        <button className="ui inverted blue button">Blue</button>
        <button className="ui inverted violet button">Violet</button>
        <button className="ui inverted purple button">Purple</button>
        <button className="ui inverted pink button">Pink</button>
        <button className="ui inverted brown button">Brown</button>
        <button className="ui inverted grey button">Grey</button>
        <button className="ui inverted black button">Black</button>
      </div>
      <h1>Button Groups:</h1>
      <div className="ui buttons">
        <button className="ui button">One</button>
        <button className="ui button">Two</button>
        <button className="ui button">Three</button>
      </div>
    </>
  );
};

export default Buttons;
