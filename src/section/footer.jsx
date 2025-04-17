import React from 'react';

const footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href="https://www.envato.com" target="_blank" rel="noreferrer">
                            <span className="copy">&copy; Copyright {currentYear} - MequryThink</span>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="social-icons">
                        <a href="https://www.facebook.com/mequrythink?mibextid=LQQJ4d" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.instagram.com/mequrythink?igsh=MWQ4dDdoamV1cGtuNQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/mequrythink?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;