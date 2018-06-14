import React, { Component } from 'react';


class Footer extends Component {
    render(){
        return(
            <div>
<footer className="footer text-center">
      <div className="container">
        <div className="row" style={{justifyContent:'center', textAlign:'center'}}>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Current Location</h4>
            <p className="lead mb-0">San Jose, CA
              <br/></p>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Find Me Online</h4>
            <ul className="list-inline mb-0">
    
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://github.com/kkudumu" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-fw fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.linkedin.com/in/kioja-kudumu-1444326a/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-fw fa-linkedin"></i>
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </footer>
    
    <div className="copyright py-4 text-center text-white">
      <div className="container">
        <small>Copyright &copy; Kioja Kudumu 2018</small>
      </div>
    </div>
            </div>
        );
    }
}

export default Footer;