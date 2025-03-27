import React, { useState } from "react";

const DiscipleRegistration = () => {
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherText, setOtherText] = useState("");

  const handleSelectChange = (event) => {
    setShowOtherInput(event.target.value === "Other");
  };

  return (
    <div>
      <div className="page-title-area bg-1">
        <div className="container">
          <div className="page-title-content">
            <h2>Disciple Registration</h2>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li className="active">Disciple Registration</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="help-people-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-6 p-0">
              <div className="all-help-content " style={{display:'flex', justifyContent:'center'}}>
                {/* <form className="help-form">
                  <div>
                    <h3 style={{ textDecoration: "underline" }}>
                      Disciple Registration Referral Form
                    </h3>
                    <div style={{ textAlign: "left", marginTop: "2rem" }}>
                      <h4>Part 1: Applicant Information</h4>
                      <p>
                        To be filled out by the person registering as a
                        disciple.
                      </p>
                      <p>
                        Full Name:{" "}
                        <input
                          type="text"
                          style={{
                            border: "none",
                            borderBottom: "1px solid gray",
                            outline: "none",
                          }}
                        />
                      </p>
                      <p>
                        Date Of Birth:{" "}
                        <input
                          type="date"
                          style={{
                            border: "none",
                            borderBottom: "1px solid gray",
                            outline: "none",
                          }}
                        />
                      </p>
                      <p>
                        Address:{" "}
                        <input
                          type="text"
                          style={{
                            border: "none",
                            borderBottom: "1px solid gray",
                            outline: "none",
                          }}
                        />
                      </p>
                      <p>
                        Base Location:{" "}
                        <input
                          type="location"
                          style={{
                            border: "none",
                            borderBottom: "1px solid gray",
                            outline: "none",
                          }}
                        />
                      </p>
                      <p>
                        Contact Number:{" "}
                        <input
                          type="number"
                          style={{
                            border: "none",
                            borderBottom: "1px solid gray",
                            outline: "none",
                          }}
                        />
                      </p>
                      <p>
                        Email:{" "}
                        <input
                          type="email"
                          style={{
                            border: "none",
                            borderBottom: "1px solid gray",
                            outline: "none",
                          }}
                        />
                      </p>
                      <p style={{ marginTop: "3rem" }}> Initiation Details</p>
                      <p>
                        Date of Initiation:{" "}
                        <input
                          type="email"
                          style={{
                            border: "none",
                            borderBottom: "1px solid gray",
                            outline: "none",
                          }}
                        />
                      </p>
                      <p>
                        Name Given at initation:{" "}
                        <input
                          type="email"
                          style={{
                            border: "none",
                            borderBottom: "1px solid gray",
                            outline: "none",
                          }}
                        />
                      </p>

                      <h4 style={{ marginTop: "2rem" }}>
                        Part 2: Confirmation by Srila Prabhupada Disciple or
                        Authority
                      </h4>
                      <p>
                        To be filled out by a disciple of Srila Prabhupada or an
                        authorized person.
                      </p>
                      <p>
                        Name of Referring Disciple/Authority:
                        <input
                          type="email"
                          style={{
                            border: "none",
                            borderBottom: "1px solid gray",
                            outline: "none",
                          }}
                        />
                      </p>
                      <p>
                        Position/Title:
                        <input
                          type="email"
                          style={{
                            border: "none",
                            borderBottom: "1px solid gray",
                            outline: "none",
                          }}
                        />
                      </p>
                      <p>
                        Contact Number:
                        <input
                          type="number"
                          style={{
                            border: "none",
                            borderBottom: "1px solid gray",
                            outline: "none",
                          }}
                        />
                      </p>
                      <p>
                        Email Address:
                        <input
                          type="email"
                          style={{
                            border: "none",
                            borderBottom: "1px solid gray",
                            outline: "none",
                          }}
                        />
                      </p>
                      <p>
                        <span style={{ fontWeight: "bold" }}>
                          Confirmation Statement:
                        </span>
                        I, the undersigned, confirm that the above-named
                        individual (Applicant) is known to me as an initiated
                        disciple of HDG Srila Prabhupada and has a genuine
                        need for assistance.
                      </p>

                      <p style={{ marginTop: "5rem" }}>
                        Signature of Referrer:
                      </p>
                      <p>Date:</p>
                      <p>Applicant’s Signature:</p>
                      <p>Date:</p>
                    </div>
                  </div>
                </form> */}

                <form className="volunteer-join">
                  <div className="volunteer-title">
                    <h3>Disciple Registration Referral Form</h3>
                    <div>
                    <p>Part 1: Applicant Information</p>
                    <p>
                      To be filled out by the person registering as a disciple.
                    </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="First-Name"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Email"
                          placeholder="Date Of Birth"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Number"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Address"
                          placeholder="Contact Number"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Address"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Address"
                          placeholder="email of the temple president"
                        />
                      </div>
                    </div>
                    <p style={{ textAlign: "left" }}>Initiation Details:</p>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Address"
                          placeholder="Date of Initiation"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Address"
                          placeholder="Name Given at initation"
                        />
                      </div>
                    </div>
                    <button type="submit" className="default-btn">
                    <span>Submit</span>
                  </button>
                    <div style={{marginTop:'2rem'}}>
                    <p style={{ textAlign: "left" }}>
                      Part 2: Confirmation by Srila Prabhupada Disciple or
                      Authority
                    </p>
                    <p style={{ textAlign: "left" }}>
                      To be filled out by a disciple of Srila Prabhupada or an
                      authorized person.
                    </p>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Address"
                          placeholder="Name of Referring Disciple/Authority"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Address"
                          placeholder="Position/Title"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="Address"
                          placeholder="Contact Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="Address"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div style={{textAlign:'left'}}>
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Confirmation Statement:
                      </span>
                      I, the undersigned, confirm that the above-named
                      individual (Applicant) is known to me as an initiated
                      disciple of HDG Srila Prabhupada and has a genuine
                      need for assistance.
                    </p>

                    <p style={{ marginTop: "2rem" }}>Signature of Referrer:</p>
                    <p>Date:</p>
                    <p>Applicant’s Signature:</p>
                    <p>Date:</p>
                  </div>
                  <button type="submit" className="default-btn">
                    <span>Submit</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscipleRegistration;
