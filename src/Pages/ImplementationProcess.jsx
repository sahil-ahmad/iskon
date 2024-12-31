import React,{useState}from 'react'

import prabhupadaneed from '../assets/imgs/need assistent.jpg'
import pabhupadaestablish from '../assets/imgs/establish program.webp'
import prabhupadadatabase from '../assets/imgs/prabhupada database.avif'
import prabhupadapromation from '../assets/imgs/prabhupada promotion.jpg'
import prabhupadaevaluate from '../assets/imgs/prabhupada evaluate.jpg'
import prabhupadacollaboration from '../assets/imgs/collaboration.jpg'



const ImplementationProcess = () => {
    const [more, setMore] = useState(false)
    const [more2, setMore2] = useState(false)
    const [more3, setMore3] = useState(false)
  
  
  
    const handleClick = () => {
      setMore(!more);
    };
    const handleClick2 = () => {
      setMore2(!more2);
    };
    const handleClick3 = () => {
      setMore3(!more3);
    };
  return (
    <div>
    <div className="page-title-area bg-1">
                <div className="container">
                    <div className="page-title-content">
                        <h2>Implementation Process</h2>
                        <ul>
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>
                            <li className="active">Implementation Process</li>
                        </ul>
                    </div>
                </div>
            </div>
       <section className="causes-area pb-70" style={{marginTop:'2rem'}}>
        <div className="container">
          <div className="section-title">
            {/* <span>What The Causes</span> */}
            <h2>Implementation Process of Srila Prabhupada Disciples Care Program</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6"  >
              <div className="single-causes-box">
                <img src={prabhupadaneed} alt="Image" />
                <div style={{ height: "auto " }} className="single-causes-content">
                  <h3>
                    <a href="">Needs Assessment
                    </a>
                  </h3>
                  <p>Conduct a comprehensive needs assessment to understand the healthcare, financial and emotional needs of Srila Prabhupada disciples through
                  </p>
                  <div>
                    <button onClick={handleClick} style={{ display: more ? 'none' : 'block', backgroundColor: '#f99115', padding: '.5rem', color: '#fff', borderRadius: '.5rem' }} >
                      Read More...
                    </button>
                    {more && (
                      <div>
                        <ul style={{ textAlign: 'left' }}>
                          <li>Gather data through surveys;</li>
                          <li>Interviews;</li>
                          <li>focus groups;</li>
                          <li>consultations with Srila Prabhupada disciples;</li>
                          <li>caregivers; and</li>
                          <li>community members.</li>
                        </ul>
                        <button onClick={handleClick} style={{ backgroundColor: '#f99115', padding: '.5rem', color: '#fff', borderRadius: '.5rem' }} >Read Less..</button>
                      </div>
                    )}
                  </div>
             
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-causes-box">
                <img src={pabhupadaestablish} alt="Image" />
                <div className="single-causes-content">
                  <h3>
                    <a href="causes-details-2.html">Establish Program Infrastructure
                    </a>
                  </h3>
                  <p> Initially, we can develop infrastructure for the program based on need assessment</p>
                  <button onClick={handleClick2} style={{ display: more2 ? 'none' : 'block', backgroundColor: '#f99115', 
                  padding: '.5rem', color: '#fff', borderRadius: '.5rem', marginTop:'3.4rem' }} >
                    Read More...
                  </button>
                  {more2 && (
                    <div>
                      <ul style={{ textAlign: 'left' }}>
                        <li>Designate roles and responsibilities for team members, including program coordinators, volunteers, and support staff. </li>
                        <li>Establish healthcare coordination services to assist disciples in accessing medical care, treatments, and support services.</li>
                        <li>Identify fund raising avenues such as patrons retreat, crowd funding platforms.</li>
                        <li>consultations with Srila Prabhupada disciples;</li>
                        <li>Create housing assistance programs to help disciples find suitable living arrangements, including options for relocating to sacred pilgrimage sites.</li>
                      </ul>
                      <button onClick={handleClick2} style={{ backgroundColor: '#f99115', padding: '.5rem', color: '#fff', borderRadius: '.5rem' }} >Read Less..
                      </button>
                    </div>

                  )}

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadadatabase} alt="Image" />
                <div style={{ height: "auto" }} className="single-causes-content">
                  <h3>
                    <a href="">Database
                    </a>
                  </h3>
                  <p>Create database of key stakeholders in the program:
                  </p>
                  <button onClick={handleClick3} style={{ display: more3 ? 'none' : 'block', backgroundColor: '#f99115', padding: '.5rem',
                   color: '#fff', borderRadius: '.5rem',marginTop:'6.5rem' }} >
                    Read More...
                  </button>
                  {more3 && (
                  <div>
                    <ul style={{ textAlign: 'left' }}>
                      <li>Designate roles and responsibilities for team members, including program coordinators, volunteers, and support staff. </li>
                      <li>Establish healthcare coordination services to assist disciples in accessing medical care, treatments, and support services.</li>
                      <li>Identify fund raising avenues such as patrons retreat, crowd funding platforms.</li>
                      <li>consultations with Srila Prabhupada disciples;</li>
                      <li>Create housing assistance programs to help disciples find suitable living arrangements, including options for relocating to sacred pilgrimage sites.</li>
                    </ul>
                    <button onClick={handleClick3} style={{ backgroundColor: '#f99115', padding: '.5rem', color: '#fff', borderRadius: '.5rem' }} >Read Less..
                    </button>
                  </div>
                )}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadacollaboration} alt="Image" />
                <div style={{ height: "auto" }} className="single-causes-content">
                  <h3>
                    <a href="">Build Partnerships and Collaborations
                    </a>
                  </h3>
                  <p>"Create synergies with devotee care departments, healthcare facilities like Bahktivedanta Hospital, and the Bhakti Vedanta Medical Association network for collaboration."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadapromation} alt="Image" />
                <div style={{height:'auto'}} className="single-causes-content">
                  <h3>
                    <a href="">Launch and Promotion
                    </a>
                  </h3>
                  <p>"Launch Srila Prabhupada Disciple Care Program with coordinated outreach via websites, social media, temple announcements, and community events."
                  </p>
            
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-causes-box">
                <img src={prabhupadaevaluate} alt="Image" />
                <div style={{ height: "auto" }} className="single-causes-content">
                  <h3>
                    <a href="">Monitor and Evaluate
                    </a>
                  </h3>
                  <p>Establish monitoring and evaluation mechanisms to track program progress, outputs, and outcomes. Annually present the achievements to GBC members.
                  </p>
                  {/* <div className="all-skill-bar">
                    <div className="skill-bar" data-percentage="95%">
                      <h4 className="progress-title-holder">
                        <span className="progress-title">$1900000 Raised Of $160000</span>
                        <span className="progress-number-mark">
                          <span className="percent" />
                          <span className="down-arrow" />
                        </span>
                      </h4>
                      <div className="progress-content-outter">
                        <div className="progress-content" />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="default-btn">
                    <span>Donate Now</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ImplementationProcess
