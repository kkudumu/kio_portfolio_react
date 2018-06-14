import React, { Component } from 'react';


class Header extends Component {
    render(){
        return(
            <div>
                <header className="masthead bg-primary text-white text-center">
                    <div className="container">
                        <img className="img-fluid mb-5 d-block mx-auto" src="https://cdn.pbrd.co/images/HpsSwEsk.png" alt="" />
                        <h1 className="text-uppercase mb-0">Full Stack Web Developer</h1>
                        <hr className="star-light"/>
                        <h2 className="font-weight-light mb-0">HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</h2>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/kioja-kudumu-1444326a/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" style={{fontSize:'100px', color:'white'}}/>
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {/* Github */}
                            <a href="https://github.com/kkudumu" rel="noopener noreferrer" target="_blank" >
                                <i className="fa fa-github-square"  aria-hidden="true" style={{fontSize:'100px', color:'white'}}/>
                            </a>
                    </div>
                </header>
                <div className="scroll-to-top d-lg-none position-fixed ">
      <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
            </div>
        );
    }
}

export default Header;