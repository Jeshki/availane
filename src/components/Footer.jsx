import React from 'react'
//import './Footer.css'
//import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        {/* <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> */}
                        <div>
                            <h2>Kaunas</h2>
                            <h4>Privačiai arba Online</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        {/* <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />+370-601-81634</h4> */}
                    </div>
                    <div className='email'>
                        {/* <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />lavinciukas@gmail.com</h4> */}
                    </div>
                </div>
                <div className='right'>
                    <h4>LAVINČIUS</h4>
                    <p>Lavinčius - grupiniai ir individualūs lavinamieji užsiėmimai -vaikams, tėvams, pedagogams.</p>
                {/* <div className='social'>
                      <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                      <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Footer