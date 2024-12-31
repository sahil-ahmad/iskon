import React from 'react'
import prabhupadacare from '../assets/imgs/srila prabhupada care img.jpg'
import prabhupadamission from '../assets/imgs/bhagavad-gita-16-05-by-srila-pra.jpg'
import prabhupadavision from '../assets/imgs/need assistent.jpg'


const AboutUs = () => {
  return (
    <div>

      <div className="page-title-area bg-1">
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
                <p>Srila Prabhupada’s disciples surrendered their life to the spiritual master at very young age and served the movement for entire life.
                </p>
                <p>This program is to express our gratitude, as we are relishing the fruits from their labour.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bx bx-check" />
                        <span>How To Become Volante</span>
                      </li>
                      <li>
                        <i className="bx bx-check" />
                        <span>More Charity Better Lives</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bx bx-check" />
                        <span>Poor Children Education</span>
                      </li>
                      <li>
                        <i className="bx bx-check" />
                        <span>Safe water For People</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="" className="default-btn">
                  <span>About Us</span>
                </a>
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
                <h2>Mission of Srila Prabhupada Disciples Care Program</h2>
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
          <div className="row align-items-center">
          <div className="col-lg-6">
              <div className="about-img">
                <img src={prabhupadavision} alt="Image" style={{ borderRadius: '2rem' }} />

               
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                {/* <span className="top-title">About</span> */}
                <h2>Vision of Srila Prabhupada Disciples Care Program</h2>
                <p>To honor the lifelong dedication and service of Srila Prabhupada's disciples by providing compassionate care and support as they age to lead a life with dignity and purpose in their later years.

                </p>

              </div>
            </div>
            
          </div>
        </div>
      </section>
 
    </div>    

  )
}

export default AboutUs
