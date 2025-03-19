import React from 'react'
import prabhupadacare from '../assets/imgs/srila prabhupada care img.jpg'
import prabhupadamission from '../assets/imgs/bhagavad-gita-16-05-by-srila-pra.jpg'
import prabhupadavision from '../assets/imgs/need assistent.jpg'


const AboutUs = () => {
  return (
    <div>

      <div className="page-title-area bg-1 " >
        <div className="container">
          <div className="page-title-content">
            <h2>About Us</h2>
            <ul>
              <li>
                <a href="">
                  Home
                </a>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src={prabhupadacare} alt="Image" style={{ borderRadius: '15px' }} />


              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">About</span>
                <h2>Introduction to Srila Prabhupada Disciples Care Program</h2>
                <p>The Srila Prabhupada Disciple Care Program is a heartfelt initiative inspired by the visionary guidance of His Holiness Jayapataka Swami Maharaja and His Holiness Gopal Krishna Goswami Maharaja. This program is dedicated to honoring and supporting the disciples of His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada, the founder-acharya of the International Society for Krishna Consciousness (ISKCON).</p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bx bx-check" />
                        <span>Meet the team</span>
                      </li>
                      <li>
                        <i className="bx bx-check" />
                        <span>Meet the team</span>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bx bx-check" />
                        <span>Volunteers</span>
                      </li>
                      <li>
                        <i className="bx bx-check" />
                        <span>Team</span>
                      </li>
                    </ul>
                  </div>

                </div>
                {/* <a href="" className="default-btn">
                  <span>About Us</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                {/* <span className="top-title">About</span> */}
                <h2>Vision & Mission</h2>
                <p>To honor the lifelong dedication and service of Srila Prabhupada's disciples by providing compassionate care and support as they age to lead a life with dignity and purpose in their later years.
                </p>

              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img src={prabhupadamission} alt="Image" style={{ borderRadius: '2rem' }} />


              </div>
            </div>
          </div>
          
        </div>
      </section>

    </div>

  )
}

export default AboutUs
