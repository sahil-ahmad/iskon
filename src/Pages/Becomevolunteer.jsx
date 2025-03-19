import React,{useState} from "react";

const Becomevolunteer = () => {
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherText, setOtherText] = useState("");

  const handleSelectChange = (event) => {
    setShowOtherInput(event.target.value === "Other");
  };

  return (
    <>
      <div className="page-title-area bg-1">
        <div className="container">
          <div className="page-title-content">
            <h2>Become a volunteer</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Become a volunteer</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <section className="volunteer-join-area volunteer-join-area-page ptb-100">
                <div className="container">
                    <form className="volunteer-join">
                        <div className="volunteer-title">
                            <h2>Join Our Volunteer Group For Serve Helpless</h2>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="First-Name" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="Email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="Number" placeholder="Phone" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="Address" placeholder="Address" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="Message" cols={30} rows={5} placeholder="Message" defaultValue={""} />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="default-btn">
                            <span>Submit</span>
                        </button>
                    </form>
                </div>
                
            </section> */}
      <section className="volunteer-join-area volunteer-join-area-page ptb-100">
        <div className="container">
          <form className="volunteer-join">
            <div className="volunteer-title">
              <h2>Volunteer Registration Form</h2>
              <p style={{ marginTop: "2rem", textAlign: "left" }}>
                Thank you for your willingness to serve Srila Prabhupada’s
                disciples. Please fill out the form below to indicate your
                interest and the areas where you’d like to contribute.
              </p>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="First-Name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Number"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <select
                    className="form-control"
                    id="Country"
                    style={{ color: "#fff" }}
                  >
                    <option value="">Select Country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo (Congo-Brazzaville)">
                      Congo (Congo-Brazzaville)
                    </option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Eswatini">Eswatini</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Greece">Greece</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, North">Korea, North</option>
                    <option value="Korea, South">Korea, South</option>
                    <option value="Kosovo">Kosovo</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">Micronesia</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="North Macedonia">North Macedonia</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Vincent and the Grenadines">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-Leste">Timor-Leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City">Vatican City</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    placeholder="Nearest ISKCON Center"
                  />
                </div>
              </div>
              <div className="col-12 availability ">
                <div className="form-group">
                  {/* <label for="availability" className="form-group" >Availability:</label> */}
                  <select
                    className="form-control"
                    id="Country"
                    style={{ backgroundColor: "#F99115", color: "#fff" }}
                  >
                    <option value="">Availability</option>
                    <option value="5-10 hours/week">5-10 hours/week</option>
                    <option value="10-20 hours/week">10-20 hours/week</option>
                    <option value="20+ hours/week">20+ hours/week</option>
                  </select>
                </div>
              </div>
              {/* <div className='col-12' >
                <div className="form-group">
                  
                  <select className="form-control" id="Country" style={{ backgroundColor: '#F99115', color: '#fff' }}>
                    <option value="">Preferred Mode of Service</option>
                    <option value="5-10 hours/week"><input type="radio" id="remote" name="modeOfService" value="Remote" required />
                      <label for="remote">Remote</label></option>
                    <option value="10-20 hours/week"><input type="radio" id="inPerson" name="modeOfService" value="In-Person" required />
                      <label for="inPerson">In-Person</label></option>

                  </select>
                </div>
              </div> */}
              <div className="col-12">
                <div className="form-group">
                  {/* <label for="availability" className="form-group" >Availability:</label> */}
                  <div>
                    <select
                      className="form-control"
                      id="Country"
                      style={{ backgroundColor: "#F99115", color: "#fff" }}
                      onChange={handleSelectChange}
                    >
                      <option value="">Areas of Interest</option>
                      <option value="Financial Assistance">
                        Financial Assistance
                      </option>
                      <option value="Healthcare Coordination">
                        Healthcare Coordination
                      </option>
                      <option value="Emotional Support">
                        Emotional and Spiritual Support
                      </option>
                      <option value="Health Assessments">
                        Comprehensive Health Assessments
                      </option>
                      <option value="Community Building">
                        Community Building Activities
                      </option>
                      <option value="Relocation Assistance">
                        Relocation Assistance
                      </option>
                      <option value="Other">Any other way</option>
                    </select>

                    {showOtherInput && (
                      <input
                        type="text"
                        placeholder="Please specify"
                        className="form-control mt-2"
                        style={{ backgroundColor: "#fff", color: "#000" }}
                        value={otherText}
                        onChange={(e) => setOtherText(e.target.value)}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label for="experience">
                  Do you have any relevant experience in the selected areas?
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  required
                  style={{
                    width: "100%",
                    background: "rgb(228, 193, 151)",
                    border: "1.5px solid #F99115",
                  }}
                ></textarea>
              </div>
              <div>
                <label for="motivation">
                  Why do you want to volunteer for this service?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  style={{
                    width: "100%",
                    background: "rgb(228, 193, 151)",
                    border: "1.5px solid #F99115",
                  }}
                ></textarea>
              </div>
              <div>
                <label for="skills">
                  Do you have any specific skills (e.g., healthcare, event
                  planning, counseling)?
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  required
                  style={{
                    width: "100%",
                    background: "rgb(228, 193, 151)",
                    border: "1.5px solid #F99115",
                  }}
                ></textarea>
              </div>

              <div style={{ display: "flex", marginTop: "1rem" }}>
                <input type="checkbox" id="consent" name="consent" required />
                <label for="consent">
                  I agree to the terms and conditions and understand the
                  responsibilities of volunteering.
                </label>
              </div>
            </div>
            <button type="submit" className="default-btn">
              <span>Submit</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Becomevolunteer;
