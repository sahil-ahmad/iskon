import React, { useState } from 'react'

const Donation = () => {


    const [donationAmount, setDonationAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const [showCustomInput, setShowCustomInput] = useState(false);

    const handleAmountChange = (event) => {
        const amount = event.target.value;
        setDonationAmount(amount);
        setCustomAmount(amount);
    };

    const handleCustomAmountChange = (event) => {
        setCustomAmount(event.target.value);
        setDonationAmount(event.target.value);
        if (customAmount>100){
            setShowCustomInput("Other")
        }
    };

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setShowCustomInput(value === 'Other');
        setDonationAmount(value === 'Other' ? customAmount : value);
    };


    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle donation submission
    };

    
    return (
        <div>
            <div className="page-title-area bg-1">
                <div className="container">
                    <div className="page-title-content">
                        <h2>Donation</h2>
                        <ul>
                            <li>
                                <a href="index.html">
                                    Home
                                </a>
                            </li>
                            <li className="active">Donation</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="help-people-area">
                <div className="container-fluid">
                    <div>

                    </div>
                    <div className="row">

                        <div className="col-lg-12 col-md-6 p-0">
                            <div className="all-help-content">
                                



                                <form className="help-form">
                                    <h4 style={{ textAlign: 'left' }}>Donation Amount</h4>
                                    <div className="row">
                                        <div className='donate-from'>
                                        <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                            {showCustomInput ? (
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Amount"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Amount"
                                    value={donationAmount}
                                    onChange={handleAmountChange}
                                />
                            )}
                        </div>
                                        </div>
                                        <div style={{ marginBottom: "20px", flexWrap:'wrap' }} className='radio'>
                        {[10, 25, 50, 100, 'Other'].map((amount) => (
                            <div key={amount} className='col-md-2 radio-box'  style={{marginInline:'.5rem'}}>
                                <input
                                    type="radio"
                                    id={`radio${amount}`}
                                    name="donation"
                                    value={amount === 'Other' ? 'Other' : amount.toString()}
                                    checked={donationAmount === amount.toString()}
                                    onChange={handleRadioChange}
                                   
                                />
                                <label htmlFor={`radio${amount}`}>
                                    {amount === 'Other' ? 'Other' : `$${amount.toFixed(2)}`}
                                </label>
                            </div>
                        ))}
                    </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="First-Name" placeholder="First-Name"  />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="First-Name" placeholder="Last-Name" />
                                            </div>
                                        </div>


                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="First-Name" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="First-Name" placeholder="Address" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="First-Name" placeholder="Details" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="First-Name" placeholder="Details" />
                                            </div>
                                        </div>
 
                                </div>
                                    <button type="submit" className="default-btn">
                                        <span>Donate Now</span>
                                    </button>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>

    )
}

export default Donation
