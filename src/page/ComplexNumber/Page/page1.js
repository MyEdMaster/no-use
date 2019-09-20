import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {MDBRow, MDBCol,MDBBtn, MDBContainer} from 'mdbreact'
import { InlineMath, BlockMath } from 'react-katex';
import classes from './index.module.css'


export class ComplexPage1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
          <div>
              <div className="d-flex align-items-baseline justify-content-center">
                  <div className={classes.title1}>
                      COMPLEX NUMBERS:
                  </div>
                  <div className={classes.title2}>
                      What is <InlineMath>i</InlineMath> ?
                  </div>
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
