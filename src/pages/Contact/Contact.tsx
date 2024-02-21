import { Button } from '@mui/material';
import Help from '@mui/icons-material/HelpOutlineOutlined';
import Email from '@mui/icons-material/EmailOutlined';
import Work from '@mui/icons-material/WorkOutlineOutlined';
import Bitcoin from '@mui/icons-material/CurrencyBitcoinOutlined';
import RocketIcon from '@mui/icons-material/Rocket';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HandshakeIcon from '@mui/icons-material/Handshake';
import './Contact.css';
import About from './About';


const Contact = () => {
    const email = 'drew.ng3nuity@gmail.com';

    const emailButtonArray = [
        {label: 'Blockchain', subject: 'Blockchain is here! Let\'s talk.', icon: <Bitcoin />},
        {label: 'Hire Me', subject: 'I would like to hire you.', icon: <Work />},
        {label: 'Alien Invasion', subject: 'Aliens are invading!', icon: <RocketIcon />},
        {label: 'Business', subject: 'Let\'s collaborate on a project.', icon: <HandshakeIcon />},
        {label: 'Just Saying Hi', subject: 'Just saying hi!', icon: <EmojiPeopleIcon />},
        {label: 'Help', subject: 'I need help with something.', icon: <Help />},
        {label: 'Other', subject: '', icon: <Email />},
    ];

    return (
        <div className='contact-root-container'>
            <img src='/ethereal_2.webp' alt='background' className='background-pic' draggable="false" />
            <div className='about-content'>
                <About />
                <div className='contact-container'>
                    <h2>Contact Me About:</h2>
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
            </div>
        </div>
    )
}

export default Contact;