import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {MDBRow, MDBCol,MDBBtn, MDBContainer} from 'mdbreact'
import classes from './index.module.css'


export class ComplexHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div>
                  <div className={classes.font}>
                      A-List Empire:
                  </div>
                  <div className={classes.font2}>
                      Complex Numbers Online Textbook
                  </div>
              <MDBRow>
                  <MDBCol size="3">

                  </MDBCol>
                  <MDBCol size="6" className={classes.font3}>
                      Welcome to the A-List Empire Complex Number Textbook Module. In this module, you will have the opportunity to learn about the various properties of complex numbers.
                  </MDBCol>
              </MDBRow>
              <MDBRow>
                  <MDBCol size="3">

                  </MDBCol>
                  <MDBCol size="6" className={classes.border}>
                      <div className={classes.euq}>
                          a + bi
                      </div>
                  </MDBCol>
              </MDBRow>
              <MDBRow>
                  <MDBCol size="3">

                  </MDBCol>
                  <MDBCol size="6" className={classes.font3}>
                      Have fun! Feel free to ask questions at any time!
                  </MDBCol>
              </MDBRow>
              <MDBRow center>
                  <MDBCol size="2">
                      <MDBBtn color="deep-purple lighten-1" className={`${classes.btn} w-100 mt-3`}>Start Learning</MDBBtn>
                  </MDBCol>
              </MDBRow>
          </div>

        );
    }
}
