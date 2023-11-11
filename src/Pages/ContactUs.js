import React from 'react';
import '../CSS_files/contactus.css'

function ContactUs() {
  return (
      <section className="contact" id="contact">
        <div className="container">
          <div className="heading text-center">
            <h2>Contact
              <span> Us </span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              <br />incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="title">
                <h3>Contact detail</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
              </div>
              <div className="content">
                {/* Info-1 */}
                <div className="info">
                  <i className="fas fa-mobile-alt" />
                  <h4 className="d-inline-block">PHONE :
                    <br />
                    <span>+12457836913 , +12457836913</span></h4>
                </div>
                {/* Info-2 */}
                <div className="info">
                  <i className="far fa-envelope" />
                  <h4 className="d-inline-block">EMAIL :
                    <br />
                    <span>example@info.com</span></h4>
                </div>
                {/* Info-3 */}
                <div className="info">
                  <i className="fas fa-map-marker-alt" />
                  <h4 className="d-inline-block">ADDRESS :<br />
                    <span>6743 last street , Abcd, Xyz</span></h4>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="col-sm-6">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-sm-12">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows={5} id="comment" placeholder="Message" defaultValue={""} />
                </div>
                <button className="btn btn-block" type="submit">Send Now!</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}

export default ContactUs;