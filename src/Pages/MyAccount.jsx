import React from 'react'

const MyAccount = () => {
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
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#1b737e7777745b6f727a756835787476"><span className="__cf_email__" data-cfemail="48202d242427083c2129263b662b2725">[email&nbsp;protected]</span></a>
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#eb82858d84ab9f828a8598c5888486"><span className="__cf_email__" data-cfemail="b8d1d6ded7f8ccd1d9d6cb96dbd7d5">[email&nbsp;protected]</span></a>
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
  <div className="page-title-area bg-5">
    <div className="container">
      <div className="page-title-content">
        <h2>My Account</h2>
        <ul>
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          <li className="active">My Account</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="user-area-style ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="contact-form-action mb-50">
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
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-form-action">
            <div className="account-title">
              <h2>Registration</h2>
            </div>
            <form method="post">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Full name</label>
                    <input className="form-control" type="text" name="name" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Email address</label>
                    <input className="form-control" type="email" name="email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Mobile no.</label>
                    <input className="form-control" type="text" name="Number" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="text" name="password" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6">
                      <button className="default-btn register" type="submit">
                        <span>Register now</span>
                      </button>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="right">
                        <input id="remember-1" type="checkbox" />
                        <label htmlFor="remember">Show password ?</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default MyAccount
