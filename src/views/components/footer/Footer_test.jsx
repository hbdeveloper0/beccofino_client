import React from 'react'
import './Footer.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import SouthEastIcon from '@mui/icons-material/SouthEast';

const Footer = () => {
    return (
        <>
            <div className='container-fluid footer-p1-bg'>
                <div className='container'>
                    <div className='row footer-p1-row-set'>
                        <div className='col-lg-6'>
                            <h2 className='h2-rev-txt'>Reservation</h2>
                            <h2 className='h2-rev-txt'>Events</h2>
                            <div className='footer-p1-icon-bg'>
                                <i><a href='/'><FacebookRoundedIcon/></a></i>
                                <i><a href='/'><InstagramIcon/></a></i>
                                <i><a href='/'><GoogleIcon/></a></i>
                            </div>
                        </div>

                        <div className='col-lg-6 footer-p1-righ-bg'>
                            <h5 className='footer-p1-57-txt'>5712 S MacDill Ave <br/> Tampa, FL 33611 USA</h5>
                            <h5 className='footer-p1-57-txt mt-3'>813-473-2105</h5>
                            <p className='pt-5'><a role='button' href='/' className='get-btn-txt'>Get direction &nbsp;&nbsp;<SouthEastIcon sx={{fontSize: 5}}/></a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <h5 className='footerHeading'>Newsletter</h5>
                            <p className='middleParagraph'>Interested in hearing the latest and greatest <br/> from Beccofino?</p>
                            <p className='lastBtn' role='button'><a href='/'>Sign up</a></p>
                        </div>

                        <div className='col-lg-4'>
                            <h5 className='footerHeading'>Private Events</h5>
                            <p><a className='footer-p2-no-txt' href='/'>813-473-2105</a> <br/>
                            <a className='footer-p2-no-txt' href='/'>info@BeccofinoTampa.com</a></p>
                            <p className='lastBtn' role='button'><a href='/'>Learn more</a></p>
                        </div>

                        <div className='col-lg-4'>
                            <h5 className='footerHeading'>Working Hours</h5>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <p className='middleParagraph'>Wednesday: <br/>6:00 PM – 9:00 PM</p>
                                    <p className='middleParagraph'>Thursdaky: <br/>6:00 PM – 9:00 PM</p>
                                </div>
                                <div className='col-lg-6'>
                                    <p className='middleParagraph'>Fri to Sat: <br/>6:00 PM – 10:30 PM</p>
                                </div>
                            </div>
                            <p className='lastBtn' role='button'><a href='/'>Book a Reservation</a></p>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-lg-6'>
                            <p>Copyrights  2023 All Rights Reserved.</p>
                        </div>
                        <div className='col-lg-6'>
                            <p className='last-develop-txt'>Developed with ❤ by Hybreathe</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Footer;