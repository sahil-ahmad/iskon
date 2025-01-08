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
                                    <p style={{ textAlign: 'left', fontSize: '1.4rem' }}>Your generous support helps us care for Srila Prabhupada’s disciples, who have dedicated their lives to spreading Krishna Consciousness worldwide. By contributing to this program, you directly assist in providing essential services such as healthcare, financial assistance, emotional support, and relocation assistance for Srila Prabhupada’s beloved disciples.<br />
                                        Together, we can express our gratitude for their lifelong service and ensure their well-being in their later years.
                                    </p>
                                    <div >
                                        <h3 style={{ textDecoration: 'underline' }}>Ways to Donate</h3>
                                        <div style={{ textAlign: 'left' }}>
                                            <p style={{ fontSize: '1rem', fontWeight: '700' }}>1.Bank Account Transfer</p>
                                            <p>You can make a direct transfer to our program's bank account. Please use the following details:</p>
                                            <ul>
                                                <li>NAME- ISKCON</li>
                                                <li>BANK-ICICI</li>
                                                <li>SB A/C NO- 402401000048</li>
                                                <li>BRANCH - BAMONPUKUR</li>
                                                <li>IFSC Code- ICIC0004024</li>
                                            </ul>
                                            <p style={{ fontSize: '1rem', fontWeight: '700' }}>2. PayPal</p>
                                            <p>Donate securely via PayPal by clicking the link below:<br/>
                                                Donate via PayPal
                                            </p>
                                            <p style={{ fontSize: '1rem', fontWeight: '700' }}>3.Credit/Debit Card</p>
                                            <p>Support the program by donating through your credit or debit card. Use our secure payment gateway to contribute quickly and easily.
                                            </p>
                                            <p style={{ fontSize: '1rem', fontWeight: '700' }}>4. UPI Payment (India)
                                            </p>
                                            <p>Scan the QR code below or use our UPI ID for a quick transfer:
                                            </p>
                                            <p style={{fontWeight:'600'}}>UPI ID: [Insert UPI ID]</p>
                                            <p style={{ fontSize: '1rem', fontWeight: '700' }}>5.  Cash or Check Donations
                                            </p>
                                            <p>Donations can also be made in person at your nearest ISKCON temple or by mailing a check to:
                                            </p>
                                            <p style={{fontWeight:'600'}}>Address: [Insert Mailing Address]</p>
                                            <p style={{ fontSize: '1rem', fontWeight: '700' }}>6. Recurring Donations
                                            </p>
                                            <p>Set up a recurring donation to support the program on an ongoing basis. This helps us plan and sustain our services. You can opt for monthly, quarterly, or yearly contributions through any of the methods listed above.
                                            </p>

                                            <p style={{ fontSize: '1rem', fontWeight: '700' }}>Acknowledgment of Donations
                                            </p>
                                            <p>All donors will receive an acknowledgment and receipt of their contribution. Donations may be eligible for tax exemptions as per local laws (details will be provided upon request).
                                            </p>

                                            <p style={{ fontSize: '1rem', fontWeight: '700' }}>Contact Us for Assistance
                                            </p>
                                            <p>If you have any questions or need assistance with your donation, please contact us:
                                            </p>
                                            <ul>
                                                <li>Email: [Insert Email Address]</li>
                                                <li>Phone: [Insert Phone Number]</li>
                                            </ul>

                                            <p>Every donation, no matter the size, makes a difference. Together, let us care for those who have carried forward Srila Prabhupada’s mission with unwavering dedication. Thank you for your support!</p>
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

export default Donation
