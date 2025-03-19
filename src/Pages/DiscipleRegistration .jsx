<<<<<<< HEAD
import React from 'react'

const DiscipleRegistration = () => {
    return (
        <div>
            <div className="page-title-area bg-1">
                <div className="container">
                    <div className="page-title-content">
                        <h2>Disciple Registration</h2>
                        <ul>
                            <li>
                                <a href="">
                                    Home
                                </a>
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
                            <div className="all-help-content">

                                <form className="help-form">

                                    <div >
                                        <h3 style={{ textDecoration: 'underline' }}>Welcome to the Srila Prabhupada Disciple Registration Form</h3>
                                        <div style={{ textAlign: 'left' }}>
                                            <p>Thank you for your interest in connecting with the legacy of His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada. This form is designed exclusively for initiated disciples of Srila Prabhupada who wish to reaffirm their association and require assistance from the ISKCON family.</p>

                                            <p style={{ fontSize: '1rem', fontWeight: '700' }}>Eligibility Criteria</p>
=======
import React from "react";

const DiscipleRegistration = () => {
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
              <div className="all-help-content">
                <form className="help-form">
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

                      <h4 style={{marginTop:'2rem'}}>Part 2: Confirmation by Srila Prabhupada Disciple or Authority</h4>
                      <p>
                      To be filled out by a disciple of Srila Prabhupada or an authorized person.
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
                      <p><span style={{fontWeight:'bold'}}>Confirmation Statement:</span>
                       I, the undersigned, confirm that the above-named individual (Applicant) is known to me as an initiated disciple of HDG Srila Prabhupada and has a genuine need for assistance.</p>

                       <p style={{marginTop:'5rem'}}>Signature of Referrer:</p>
                       <p>Date:</p>
                       <p>Applicant’s Signature:</p>
                       <p>Date:</p>
                      {/* <p style={{ fontSize: '1rem', fontWeight: '700' }}>Eligibility Criteria</p>
>>>>>>> d76d313 (iskon)
                                            <p>To proceed, please ensure the following:
                                            </p>
                                            <ol>
                                                <li>Initiation Confirmation: You must have received initiation directly from Srila Prabhupada.</li>
                                                <li>Referral/Endorsement: A confirmation from an existing Srila Prabhupada disciple, your local ISKCON temple president or senior devotee is required.
                                                </li>
                                            </ol>

                                            <p style={{ fontSize: '1rem', fontWeight: '700' }}>How It Works</p>
                                            <ol>
                                                <li>Step 1: Complete the form with your personal and initiation details.</li>
                                                <li>Step 2: Provide the email address of your referring authority (an existing Srila Prabhupada disciple, senior devtoee or temple president).</li>
                                                <li>Step 3: An automatic email will be sent to your referring authority with a link to complete the relevant section electronically.</li>
                                                <li>Step 4: Once they complete the referral, your application will be reviewed.</li>
                                            </ol>
                                            <ul>
                                                <li>After your referring authority submits their confirmation, we will process your application.</li>
                                                <li>You will receive a notification of approval or follow-up within 7-10 working days.</li>
                                                
                                            </ul>
                                            <p style={{ fontSize: '1rem', fontWeight: '700' }}>Need Assistance?
                                            </p>
                                            <p>If you have questions or need guidance, please contact us at spdcp.seva@gmail.com.
                                            </p>
                                            
                                            <p style={{ fontSize: '1rem', fontWeight: '700' }}>Join the Family
                                            </p>
                                            <p>We are honored to have you as part of Srila Prabhupada’s spiritual legacy. Let us work together to serve his mission and spread Krishna Consciousness worldwide.
<<<<<<< HEAD
                                            </p>



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

export default DiscipleRegistration 
=======
                                            </p> */}
                    </div>
                  </div>
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
>>>>>>> d76d313 (iskon)
