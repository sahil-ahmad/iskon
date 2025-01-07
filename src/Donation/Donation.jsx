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
        if (customAmount > 100) {
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

                    <div className="row">

                        <div className="col-lg-12 col-md-6 p-0">
                            <div className="all-help-content">




                                <form className="help-form">
                                    <p style={{ textAlign: 'left' }}>Your generous support helps us care for Srila Prabhupada’s disciples, who have dedicated their lives to spreading Krishna Consciousness worldwide. By contributing to this program, you directly assist in providing essential services such as healthcare, financial assistance, emotional support, and relocation assistance for Srila Prabhupada’s beloved disciples.<br />
                                        Together, we can express our gratitude for their lifelong service and ensure their well-being in their later years.
                                    </p>

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
