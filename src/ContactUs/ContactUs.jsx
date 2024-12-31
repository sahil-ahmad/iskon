import React from 'react'

const ContactUs = () => {
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
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#432b262f2f2c03372a222d306d202c2e"><span className="__cf_email__" data-cfemail="adc5c8c1c1c2edd9c4ccc3de83cec2c0">[email&nbsp;protected]</span></a>
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#ea83848c85aa9e838b8499c4898587"><span className="__cf_email__" data-cfemail="056c6b636a45716c646b762b666a68">[email&nbsp;protected]</span></a>
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
  <div className="page-title-area bg-14">
    <div className="container">
      <div className="page-title-content">
        <h2>Contact Us</h2>
        <ul>
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          <li className="active">Contact Us</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="contact-area ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <div className="contacts-form">
            <div className="contact-title">
              <h2>Drop us message for any query</h2>
            </div>
            <form id="contactForm">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Name" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Email" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Subject" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Phone" />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea name="message" className="form-control" id="message" cols={30} rows={6} required data-error="Write your message" placeholder="Message" defaultValue={""} />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group checkboxs">
                    <input type="checkbox" id="chb2" />
                    <p>
                      Accept <a href="terms-conditions.html">Terms &amp; Conditions</a> And <a href="privacy-policy.html">Privacy Policy.</a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="default-btn btn-two">
                    <span>Send Message</span>
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4">
          <ul className="contact-info">
            <li className="location">
              <i className="bx bx-location-plus" />
              <h3>Company Location</h3>
              6890 Blvd, The Bronx, NY 1058 New York, USA
            </li>
            <li>
              <i className="bx bx-envelope" />
              <h3>Phone Number</h3>
              <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#cea6aba2a2a18ebaa7afa0bde0ada1a3"><span className="__cf_email__" data-cfemail="264e434a4a4966524f4748550845494b">[email&nbsp;protected]</span></a>
              <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#ff96919990bf8b969e918cd19c9092"><span className="__cf_email__" data-cfemail="4c25222a230c38252d223f622f2321">[email&nbsp;protected]</span></a>
            </li>
            <li>
              <i className="bx bx-phone-call" />
              <h3>Our Email Address</h3>
              <a href="tel:+1-(123)-456-7899">+1 (123) 456-7899</a>
              <a href="tel:+1-(514)-312-6688">+1 (514) 312-6688</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <div className="map-area">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96573.31103674119!2d-73.91097366523668!3d40.85176866829554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28b553a697cb1%3A0x556e43a78ff15c77!2sThe%20Bronx%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1599153418461!5m2!1sen!2sbd" />
  </div>
</div>

  )
}

export default ContactUs
