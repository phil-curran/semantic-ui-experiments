import $ from "jquery";
import "../styles/Login.css";

const Login = () => {
  $(document).ready(function () {
    $(".menu .item").tab();
  });

  return (
    <div id="LoginPage" className="ui four column centered grid">
      <div className="column">
        <div className="ui segment">
          <h2 className="ui center aligned header">QuantifiedSelf</h2>
          <div className="ui fluid two item secondary pointing menu">
            <a className="item active" data-tab="first">
              Login
            </a>
            <a className="item" data-tab="second">
              Signup
            </a>
          </div>
          <div className="ui tab active" data-tab="first">
            <form className="ui form">
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="Email address"
                />
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="last-name"
                  placeholder="password"
                />
              </div>
              <button className="fluid ui green button" type="submit">
                Sign Up!
              </button>
            </form>
          </div>
          <div className="ui tab" data-tab="second">
            <form className="ui form">
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="Email address"
                />
              </div>
              <div className="field">
                <label>Enter Password</label>
                <input
                  type="password"
                  name="last-name"
                  placeholder="password"
                />
              </div>
              <div className="field">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="last-name"
                  placeholder="password"
                />
              </div>
              <button className="fluid ui green button" type="submit">
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
