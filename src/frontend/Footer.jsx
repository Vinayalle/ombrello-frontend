import React from 'react'

export const Footer = () => {
  return (
    <>
    <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h3 className="footer_h"> About Us </h3>
                        <ul className="footer_li">
                            <li><a href=""> <i className="fas fa-angle-double-right"></i> Our Story </a></li>
                            <li><a href=""> <i className="fas fa-angle-double-right"></i> Media </a></li>
                            <li><a href=""> <i className="fas fa-angle-double-right"></i> Partners </a></li>
                            <li><a href=""> <i className="fas fa-angle-double-right"></i> Get Involved </a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className="footer_h"> Quick Links </h3>
                        <ul className="footer_li">
                            <li><a href="/allproducts"> <i className="fas fa-angle-double-right"></i> Product & Services </a></li>
                            <li><a href="/class-resources"> <i className="fas fa-angle-double-right"></i> classNameroom Resources </a></li>
                            <li><a href="/professional-development"> <i className="fas fa-angle-double-right"></i> Professional Development </a></li>
                            <li><a href=""> <i className="fas fa-angle-double-right"></i> Contact Us </a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <a href="/user/login"><button className="footer_btn"> Log In <i className="fas fa-angle-double-right"></i> </button></a>
                        <ul className="footer_li">
                            <li><a href="user/register"> <i className="fas fa-angle-double-right"></i> Join Ombrello </a></li>
                            {/* <li><a href=""> <i className="fas fa-angle-double-right"></i> Reniew Membership </a></li> */}
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3 className="footer_h"> Contact Details </h3>
                        <ul className="footer_li">
                            <li><a href=""> <i className="fas fa-map-marker-alt"></i> Hyderabad, Telangana - 500073 India. </a></li>
                            <li><a href=""> <i className="fas fa-phone"></i> +91 99999 99999, +91 88888 88888 </a></li>
                            <li><a href=""> <i className="fas fa-envelope"></i> info@ombrelloscience.com </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div id="copyrights">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="copy_p"> &copy; All Rights Reserved By Ombrello's Science | Managed By Looneycodes </p>
                    </div>
                </div>
            </div>
        </div>
        


    

</>
  )
}
