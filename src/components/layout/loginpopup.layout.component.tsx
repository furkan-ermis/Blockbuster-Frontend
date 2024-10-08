import React from "react";
function Loginpopup() {
  return (
    <div>
      <>
        {/*login form popup*/}
        <div className="login-wrapper" id="login-content">
          <div className="login-content">
            <a href="#" className="close">
              x
            </a>
            <h3>Login</h3>
            <form
              method="post"
              action="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/login.php"
            >
              <div className="row">
                <label htmlFor="username">
                  Username:
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Hugh Jackman"
                    pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
                    required
                  />
                </label>
              </div>
              <div className="row">
                <label htmlFor="password">
                  Password:
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="******"
                    pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                    required
                  />
                </label>
              </div>
              <div className="row">
                <div className="remember">
                  <div>
                    <input
                      type="checkbox"
                      name="remember"
                      defaultValue="Remember me"
                    />
                    <span>Remember me</span>
                  </div>
                  <a href="#">Forget password ?</a>
                </div>
              </div>
              <div className="row">
                <button type="submit">Login</button>
              </div>
            </form>
            <div className="row">
              <p>Or via social</p>
              <div className="social-btn-2">
                <a className="fb" href="#">
                  <i className="ion-social-facebook" />
                  Facebook
                </a>
                <a className="tw" href="#">
                  <i className="ion-social-twitter" />
                  twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*end of login form popup*/}
      </>
    </div>
  );
}

export default Loginpopup;
