import "../styles/button.css";
import "../styles/icon.css";
import "../styles/label.css";

const Buttons = () => {
  return (
    <>
      <hr />
      <button class="ui button">Follow</button>

      <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
          <i class="heart icon"></i> Like
        </div>
        <a class="ui basic red left pointing label">1,048</a>
      </div>
      <div class="ui labeled button" tabindex="0">
        <div class="ui basic blue button">
          <i class="fork icon"></i> Forks
        </div>
        <a class="ui basic left pointing blue label">1,048</a>
      </div>
      <h1>Icon Button:</h1>
      <button class="ui icon button">
        <i class="cloud icon"></i>
      </button>
      <h1>Labeled Icon Button:</h1>
      <button class="ui labeled icon button">
        <i class="pause icon"></i>
        Pause
      </button>
      <button class="ui right labeled icon button">
        <i class="right arrow icon"></i>
        Next
      </button>
      <h1>Outlined Colored Buttons:</h1>
      <button class="ui red basic button">Red</button>
      <button class="ui orange basic button">Orange</button>
      <button class="ui yellow basic button">Yellow</button>
      <button class="ui olive basic button">Olive</button>
      <button class="ui green basic button">Green</button>
      <button class="ui teal basic button">Teal</button>
      <button class="ui blue basic button">Blue</button>
      <button class="ui violet basic button">Violet</button>
      <button class="ui purple basic button">Purple</button>
      <button class="ui pink basic button">Pink</button>
      <button class="ui brown basic button">Brown</button>
      <button class="ui grey basic button">Grey</button>
      <button class="ui black basic button">Black</button>
      <h1>Outlined Inverted Colored Buttons:</h1>
      <div class="ui inverted segment">
        <button class="ui inverted button">Standard</button>
        <button class="ui inverted primary button">Primary</button>
        <button class="ui inverted secondary button">Secondary</button>
        <button class="ui inverted red button">Red</button>
        <button class="ui inverted orange button">Orange</button>
        <button class="ui inverted yellow button">Yellow</button>
        <button class="ui inverted olive button">Olive</button>
        <button class="ui inverted green button">Green</button>
        <button class="ui inverted teal button">Teal</button>
        <button class="ui inverted blue button">Blue</button>
        <button class="ui inverted violet button">Violet</button>
        <button class="ui inverted purple button">Purple</button>
        <button class="ui inverted pink button">Pink</button>
        <button class="ui inverted brown button">Brown</button>
        <button class="ui inverted grey button">Grey</button>
        <button class="ui inverted black button">Black</button>
      </div>
      <h1>Button Groups:</h1>
      <div class="ui buttons">
        <button class="ui button">One</button>
        <button class="ui button">Two</button>
        <button class="ui button">Three</button>
      </div>
    </>
  );
};

export default Buttons;
