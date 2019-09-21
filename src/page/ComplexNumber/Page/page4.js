import React from 'react';
import {Video} from "../video-component/video";
import {MDBRow, MDBCol,MDBBtn} from 'mdbreact'
import { InlineMath, BlockMath } from 'react-katex';
import classes from './index.module.css'


export class ComplexPage4 extends React.Component {
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
                        Analysis
                    </div>
                </div>
                <MDBRow>
                    <MDBCol size="3">

                    </MDBCol>
                    <MDBCol size="6">
                        <p className={classes.ph}>
                            This page will assess the student to determine their proficiency at various topics of knowledge in this module, and adjust its knowledge model based on it.
                        </p>
                        <br/>

                        <MDBRow className={classes.border} style={{borderWidth:'1px'}}>
                            <div>
                            <p className={classes.ph2} style={{fontSize:'40px'}}>
                                What is the format of a dividing complex numbers problem?
                            </p>

                            <input

                                placeholder="Enter your response here"
                                className="form-control"
                                style={{
                                    borderStyle:'solid',
                                    borderWidth:'1px',
                                    borderColor:'#33b5e5',
                                    borderRadius:'15px',
                                    fontFamily:'\'Rajdhani\', sans-serif',
                                    fontSize:'30px'
                                }}
                            />
                            </div>
                            <div>
                                    <MDBBtn color=" orange lighten-2" className={`${classes.btn} mt-3 white-text`}>Submit</MDBBtn>
                            </div>
                            <div>
                                    <MDBBtn color=" brown lighten-1" className={`${classes.btn} mt-3 white-text`}>Next Question</MDBBtn>
                            </div>







                        </MDBRow>

                        <br/>
                    </MDBCol>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size="2">
                        <MDBBtn color="deep-purple lighten-1" className={`${classes.btn} w-100 mt-3`}>Previous Lesson</MDBBtn>
                    </MDBCol>
                    <MDBCol size="2">
                        <MDBBtn color="deep-purple lighten-1" className={`${classes.btn} w-100 mt-3`}>Next Lesson</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </div>

        );
    }
}
