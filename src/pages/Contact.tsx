import { Button } from '@mui/material';
import Info from '@mui/icons-material/InfoOutlined';
import Handshake from '@mui/icons-material/HandshakeOutlined';
import Privacy from '@mui/icons-material/PrivacyTipOutlined';
import Help from '@mui/icons-material/HelpOutlineOutlined';
import Email from '@mui/icons-material/EmailOutlined';
import Work from '@mui/icons-material/WorkOutlineOutlined';
import Bitcoin from '@mui/icons-material/CurrencyBitcoinOutlined';
import Bug from '@mui/icons-material/BugReportOutlined';
import React from 'react';


const Contact = () => {
    const email = 'drew.ng3nuity@gmail.com';

    const emailButtonArray = [
        {label: 'Blockchain', subject: 'Blockchain is here! Let\'s talk.', icon: <Bitcoin />},
        {label: 'Business', subject: 'Hey! Let\'s do some business.', icon: <Work />},
        {label: 'Feedback', subject: 'I have some feedback for you.', icon: <Help />},
        {label: 'Report a Bug', subject: 'I found a bug.', icon: <Bug />},
        {label: 'Other', subject: '', icon: <Email />},
    ];

    return (
        <div className='contact-container'>
            <h1>Contact Me About:</h1>
            <div className='email-button-container'>
                {emailButtonArray.map((button, index) => {
                    return (
                    <Button key={index} className='email-button'
                     variant="contained" startIcon={button.icon} href={`mailto: ${email}?subject=${button.subject}`}>
                        {button.label}
                    </Button> 
                )})}
            </div>
        </div>
    )
}

export default Contact;