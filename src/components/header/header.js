import React, { Component } from 'react';

export default class Header extends Component {
    render() {
      let resumeData = this.props.resumeData;
      return (
        <React.Fragment>
            {/* Header ================================================== */}
            <header id="home">
                <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#nav-wrap"title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul> {/* end #nav */}
                </nav> {/* end #nav-wrap */}
                <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I am {resumeData.name}.</h1>
                    <h3>I'm a Bengaluru based <span>Full Stack developer</span> with {resumeData.experience} years of experience in <span> Application Development, Creating POCs,
                    project execution and service management</span>. Successfully
                    delivered various IT projects for global customers in <span> {resumeData.deliveredProjectTechStack} </span>. Let's <a className="smoothscroll" href="#about">start scrolling </a>
                    and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                    <hr />
                    <ul className="social">
                    
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="https://www.linkedin.com/in/vishal-kanabargi-3b469213a/"><i className="fa fa-linkedin" /></a></li>
                    {/*
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                    <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                    <li><a href="#"><i className="fa fa-skype" /></a></li> 
                     futher enhancement ================================================== */}
                    </ul>
                </div>
                </div>
                <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
            </header> 
            {/* Header End */}
        </React.Fragment>
      );
    }
  }