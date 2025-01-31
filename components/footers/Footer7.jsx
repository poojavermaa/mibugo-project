import React from "react";
import FooterSocials from "./FooterSocials";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer7() {
    return (
        <>
            {/* End Background Shape */}
            <div className='container position-relative'>
                <div className='row pb-120 pb-sm-80 pb-xs-50'>
                    <div className='col-md-4 mb-sm-50'>
                        <h2 className='section-title-small mt-n10 mb-30'>Your Goals, Our Priority</h2>
                        <p className='text-gray mb-40'>
                            Book a free consultation with our team and discover actionable strategies to achieve your business goals.
                        </p>
                        <div className='local-scroll'>
                            <a
                                href='https://calendly.com/mibugo-consulting/30min'
                                className='btn btn-mod btn-medium btn-grad btn-round'
                                data-btn-animate='y'
                            >
                                Let’s Talk Strategy
                                <i className='mi-arrow-right size-24 align-center' />
                            </a>
                        </div>
                    </div>
                    <div className='col-md-7 offset-md-1'>
                        <div className='row mt-n30'>
                            {/* Footer Widget */}
                            <div className='col-sm-7 mt-30'>
                                {/* <h3 className='fw-title'>Company</h3> */}
                                <ul className='fw-menu clearlist local-scroll'>
                                    {navigationLinks.map((elm, i) => (
                                        <li key={i}>
                                            <a href={elm.href}>{elm.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* End Footer Widget */}
                            {/* Footer Widget */}
                            {/* <div className='col-sm-4 mt-30'>
                                <ul className='fw-menu clearlist'>
                                    <FooterSocials />
                                </ul>
                            </div> */}
                            {/* End Footer Widget */}
                            {/* Footer Widget */}
                            {/* <div className='col-sm-5 mt-30'>
                                <ul className='fw-menu clearlist'>
                                    {footerLinks.map((elm, i) => (
                                        <li key={i}>
                                            <a href={elm.href}>{elm.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                            <div className='col-sm-5 mt-30'>
                                {/* <h3 className='fw-title'>Legal &amp; Press</h3> */}
                                <ul className='fw-menu clearlist'>
                                    {footerLinks.map((elm, i) => (
                                        <li key={i}>
                                            <a
                                                href={elm.href}
                                                target={elm.external ? "_blank" : "_self"}
                                                rel={elm.external ? "noopener noreferrer" : undefined}
                                            >
                                                {elm.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* End Footer Widget */}
                        </div>
                    </div>
                </div>
                {/* Footer Text */}
                <div className='row text-gray'>
                    <div className='col-md-5 col-lg-3'>
                        <b>© {new Date().getFullYear()} Mibugo Consulting. All rights reserved.</b>
                    </div>
                    <div className='col-md-7 offset-md-1 offset-lg-2 clearfix'>
                        {/* <b>Based in London, United Kingdom.</b> */}
                        {/* Back to Top Link */}
                        <div className='local-scroll float-end mt-n20 mt-sm-10'>
                            <a href='#top' className='link-to-top gradient'>
                                <i className='mi-arrow-up size-24' />
                                <span className='visually-hidden'>Scroll to top</span>
                            </a>
                        </div>
                        {/* End Back to Top Link */}
                    </div>
                </div>
                {/* End Footer Text */}
            </div>
        </>
    );
}
