
import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import { GridListTile } from '@material-ui/core';

class Contact extends Component {
    render(){
        return(
            <div>
<section id="contact">
      <div className="container">
        <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <hr className="star-dark mb-5"/>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center" >
          <GridList style={{fontSize: '30px', fontFamily: 'Anton', display:'inline-block', width:'280px', justifyContent:'center', textAlign:'center'}}>
                            <GridListTile style={{fontSize: '30px', fontFamily: 'Anton', display:'inline-block', width:'200px'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                Phone: <br/>(408) 489-4843
                                
                            </GridListTile>

                            
                                <GridListTile style={{fontSize: '30px', fontFamily: 'Anton', display:'inline-block', width:'280px'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                Email: kkudumu@gmail.com
                                </GridListTile>
                            


                           

                        </GridList>                   
            
          </div>
        </div>
      </div>
    </section>
            </div>
        );
    }
}

export default Contact;
