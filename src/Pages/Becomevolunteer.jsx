import React from 'react'

const Becomevolunteer = () => {
    return (
        <>
            <div className="page-title-area bg-1">
                <div className="container">
                    <div className="page-title-content">
                        <h2>Become a volunteer</h2>
                        <ul>
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>
                            <li className="active">Become a volunteer</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="volunteer-join-area volunteer-join-area-page ptb-100">
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
            </section>


        </>
    )
}

export default Becomevolunteer
