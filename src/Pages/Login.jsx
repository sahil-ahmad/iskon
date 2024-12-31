import React from 'react'

const Login = () => {
  return (
  <div>
  <div className="sidebar-modal">
    <div className="sidebar-modal-inner">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src="assets/img/logo.png" alt="Image" />
        </div>
        <span className="close-btn sidebar-modal-close-btn">
          <i className="bx bx-x" />
        </span>
      </div>
      <div className="sidebar-about">
        <div className="title">
          <p>Tians is a high quality video production house. We make a awesome branded videos. It is the analogical of film making, but the images are digitally recorded instead of film stock.</p>
        </div>
      </div>
      <div className="contact-us">
        <h3>Contact Us</h3>
        <ul>
          <li>
            <i className="bx bx-location-plus" />
            6890 Blvd, The Bronx, NY 1058 New York, USA
          </li>
          <li>
            <i className="bx bx-envelope" />
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#1078757c7c7f506479717e633e737f7d"><span className="__cf_email__" data-cfemail="640c0108080b24100d050a174a070b09">[email&nbsp;protected]</span></a>
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#cda4a3aba28db9a4aca3bee3aea2a0"><span className="__cf_email__" data-cfemail="20494e464f605449414e530e434f4d">[email&nbsp;protected]</span></a>
          </li>
          <li>
            <i className="bx bx-phone-call" />
            <a href="tel:+1-(123)-456-7899">+1 (123) 456 7899</a>
            <a href="tel:+1-(514)-312-6688">+1 (514) 312-6688</a>
          </li>
        </ul>
      </div>
      <div className="sidebar-gallery-feed">
        <h3>Gallery</h3>
        <ul>
          <li>
            <a href="#">
              <img src="assets/img/gallery/gallery-1.jpg" alt="image" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/img/gallery/gallery-2.jpg" alt="image" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/img/gallery/gallery-3.jpg" alt="image" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/img/gallery/gallery-4.jpg" alt="image" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/img/gallery/gallery-5.jpg" alt="image" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/img/gallery/gallery-6.jpg" alt="image" />
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-follow-us">
        <h3>Sidebar Follow</h3>
        <ul className="social-wrap">
          <li>
            <a href="#" target="_blank">
              <i className="bx bxl-twitter" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="bx bxl-instagram" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="bx bxl-facebook" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="bx bxl-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="page-title-area bg-6">
    <div className="container">
      <div className="page-title-content">
        <h2>Log In</h2>
        <ul>
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          <li className="active">Log In</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="user-area-style log-in-area ptb-100">
    <div className="container">
      <div className="contact-form-action">
        <div className="account-title">
          <h2>Log in</h2>
        </div>
        <form method="post">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label>Email or Phone</label>
                <input className="form-control" type="text" name="name" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" name="password" />
              </div>
            </div>
            <div className="col-12">
              <div className="login-action">
                <span className="log-rem">
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember">Remember me!</label>
                </span>
                <span className="forgot-login">
                  <a href="recover-password.html">Forgot your password?</a>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button className="default-btn" type="submit">
                <span>Log in now</span>
              </button>
            </div>
            <div className="col-12">
              <p>Have an account? <a href="registration.html">Registration Now!</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>

  )
}

export default Login
