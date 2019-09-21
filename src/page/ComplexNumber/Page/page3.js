import React from 'react';
import {Video} from "../video-component/video";
import {MDBRow, MDBCol, MDBBtn, MDBCard, MDBIcon} from 'mdbreact'
import { InlineMath, BlockMath } from 'react-katex';
import classes from './index.module.css'


export class ComplexPage3 extends React.Component {
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
                        &nbsp;Division
                    </div>
                </div>

                <MDBRow>
                    <MDBCol size="3">

                    </MDBCol>
                    <MDBCol size="6" className={classes.font3}>
                        <Video url={'https://alistempirefoundation.org/assets/dividingcomplex.mp4'}/>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="3">

                    </MDBCol>
                    <MDBCol size="6">
                        <p className={classes.ph}>
                            Dividing complex numbers can be a lot more challenging.
                            <tr/><br/>
                            A <span className={classes.high}>complex number</span> is a combination of a <span className={classes.high}>real number</span> and an <span className={classes.high}>imaginary number</span>.
                            We generally write <span className={classes.high}>complex numbers</span> in
                            &nbsp;<InlineMath>a + bi</InlineMath>&nbsp;form, where  &nbsp;<InlineMath>a</InlineMath>&nbsp;
                            is the real number and&nbsp;<InlineMath>bi</InlineMath>&nbsp;is the imaginary number. For example,
                            &nbsp;<InlineMath>3 + 7i</InlineMath>&nbsp;or&nbsp;<InlineMath>5 - 2i</InlineMath>&nbsp;.
                            <tr/><br/>
                            Typically, whether adding, subtracting, multiplying or dividing complex numbers, we enclose each complex number inside parentheses like this:
                        </p>
                        <br/>

                        <MDBRow className={classes.border} center>
                            <p className={classes.ph2}>
                                <BlockMath>(6 - 5i) + (2 + 3i)</BlockMath>
                                <BlockMath>(4 + 8i) - (3 - 2i)</BlockMath>
                                <BlockMath>(7 - 4i)(5 + 9i)</BlockMath>
                                <BlockMath>(8 - 6i)/(1- 3i)</BlockMath>
                            </p>
                        </MDBRow>
                        <br/>
                        <p className={classes.ph}>
                            Dividing complex numbers can be a lot more challenging.
                            <tr/><br/>
                            When adding or subtracting complex numbers, you can only combine <span className={classes.high}>like terms</span>,
                            meaning you can only combine the real part of each number together and the imaginary part of each number together.
                            <tr/><br/>
                            So, using the problem&nbsp;<InlineMath>(6 - 5i) + (2 + 3i)</InlineMath>
                            , you would first combine the real parts, the&nbsp;<InlineMath>6</InlineMath>&nbsp;
                            and the&nbsp;<InlineMath>2</InlineMath>&nbsp;, to get
                            &nbsp;<InlineMath>8</InlineMath>&nbsp;; and then you would combine the imaginary parts, the
                            &nbsp;<InlineMath>-5i</InlineMath>&nbsp;and the&nbsp;<InlineMath>3i</InlineMath>&nbsp;,
                            to get&nbsp;<InlineMath>-2i</InlineMath>&nbsp;. This leaves you with the complex number
                            &nbsp;<InlineMath>8 - 2i</InlineMath>&nbsp;.
                            <tr/><br/>

                            On a side note, since we are dealing with addition, you could also simply rewrite the problem without the parentheses,
                            &nbsp;&nbsp;<InlineMath>(6 - 5i) + (2 + 3i)</InlineMath>, and then combine like terms.
                            That’s completely legal in the case of an addition problem, but keep in mind it doesn’t work exactly like that for subtraction. We’ll talk about that when we discuss subtracting complex numbers.
                            <tr/><br/>
                            Let’s try another.
                            <tr/><br/>

                            Given
                            &nbsp;<InlineMath>(-3 + 2i) + (7 - i)</InlineMath>&nbsp;. Combine the real parts,
                            &nbsp;<InlineMath>-3 + 7</InlineMath>&nbsp;, to get&nbsp;<InlineMath>4</InlineMath>.
                            Then combine the imaginary parts,&nbsp;<InlineMath>2i - i</InlineMath>,
                            to get&nbsp;<InlineMath>i</InlineMath>. You are left with the complex number
                            &nbsp;<InlineMath>4 + i</InlineMath>.
                            <tr/><br/>

                            Nothing to it, is there? Here are some more for you to try.
                            <tr/><br/>

                            Before we get into dividing complex numbers, you’ll need to stretch your brain a bit and
                            think back to that thing called a <span className={classes.high}>conjugate</span>.
                            <tr/><br/>
                            To form the conjugate of a <span className={classes.high}>binomial</span>, you simply change the sign between the two terms. Given the binomial
                            &nbsp;<InlineMath>2 + 5x</InlineMath>, the conjugate would be
                            &nbsp;<InlineMath>2 - 5x</InlineMath>. Given the binomial
                            &nbsp;<InlineMath>3 - 8y</InlineMath>, the conjugate would be
                            &nbsp;<InlineMath>3 + 8y</InlineMath>.
                            <tr/><br/>
                            And, since a complex number is also a binomial comprised of a real term and an
                            <span className={classes.high}>imaginary term</span>, given the complex number
                            &nbsp;<InlineMath>5 - 3i</InlineMath>, the complex conjugate would be
                            &nbsp;<InlineMath>5 + 3i</InlineMath>.
                            <tr/><br/>

                            Easy. Alright, now let’s get back to dividing complex numbers.
                            <tr/><br/>

                            The first step in dividing complex numbers is to multiply the numerator and denominator by the complex conjugate of the denominator. Don’t panic, it’s actually very simple. Take a look.
                            <BlockMath>(3 -2i)/(5 + 4i)</BlockMath>
                            <tr/><br/>
                            To form the conjugate of the denominator,
                            &nbsp;<InlineMath>(5 + 4i)</InlineMath>, simply change the sign between the two terms and get
                            &nbsp;<InlineMath>(5 - 4i)</InlineMath>. Now, multiply numerator and denominator by the conjugate,
                            &nbsp;<InlineMath>(5 - 4i)</InlineMath>.
                            <tr/><br/>

                            <BlockMath>(3 -2i)(5 - 4i)/(5 + 4i)(5 - 4i)</BlockMath>
                            <tr/><br/>

                            FOIL the numerator:
                            &nbsp;<InlineMath>15 - 12i - 10i + 8i^2)</InlineMath>&nbsp;which becomes
                            &nbsp;<InlineMath>-8</InlineMath>&nbsp;and combine like terms to get
                            &nbsp;<InlineMath>(7 - 22i)</InlineMath>.
                            <tr/><br/>

                            FOIL the denominator:
                            &nbsp;<InlineMath>25 - 20i + 20i - 16i^2)</InlineMath>&nbsp;
                            which becomes &nbsp;<InlineMath>16</InlineMath>, and combine like terms to get
                            &nbsp;<InlineMath>41</InlineMath>.
                            <tr/><br/>

                            You end up with
                            &nbsp;<InlineMath>(7 - 22i)/41</InlineMath>
                            , but since complex numbers are technically two separate parts and therefore, shouldn’t
                            share the <span className={classes.high}>denominator</span>, we split the answer into two parts like this
                            <tr/><br/>
                            <BlockMath>7/41 - (21/44)i</BlockMath>.
                            <tr/><br/>
                            We’ll do another problem.
                            <tr/><br/>
                            <BlockMath>(4 + 6i)/(-1 -3i)</BlockMath>.
                            <tr/><br/>


                            First, multiply both <span className={classes.high}>numerator</span> and <span className={classes.high}>denominator</span> by the conjugate of the denominator, which is
                            &nbsp;<InlineMath>(-1 + 3i)</InlineMath>. Notice how the negative 1 does not change—only
                            the sign between the two terms changes.
                            <tr/><br/>
                            <BlockMath>(4 + 6i)(-1 -3i)/(-1 - 3i)(-1 + 3i)</BlockMath>.
                            <tr/><br/>

                            FOIL the numerator:
                            &nbsp;<InlineMath>-4 + 12i - 6i + 18i^2</InlineMath>&nbsp;
                            which becomes&nbsp;<InlineMath>-18</InlineMath>&nbsp;and combine like terms to get
                            &nbsp;<InlineMath>(-22 + 12i)</InlineMath>.
                            <tr/><br/>

                            FOIL the denominator:
                            &nbsp;<InlineMath>1 - 3i + 3i -9i^2</InlineMath>&nbsp;
                            which becomes&nbsp;<InlineMath>9</InlineMath>&nbsp;
                            and combine like terms to get&nbsp;<InlineMath>10</InlineMath>&nbsp;.
                            <tr/><br/>
                            You’re left with
                            &nbsp;<InlineMath>-22 + 12i/10</InlineMath>&nbsp;
                            which when split becomes
                            &nbsp;<InlineMath>-22/10 +(12/10)i</InlineMath>; . However, you can further reduce each fraction,
                            so your final answer is
                            <tr/><br/>
                            <BlockMath>-11/5 + (6/5)i</BlockMath>.
                            <tr/><br/>
                            Here are some problems for you to try.
                            <tr/><br/>
                        </p>

                        <MDBRow className={classes.border} center>
                            <p className={classes.ph2}>
                                <BlockMath>(3 - 2i)/(-4 - 7i)</BlockMath>
                                <BlockMath>(5 + 4i)/(2 + i)</BlockMath>
                                <BlockMath>(6 - 3i)/(9 + 3i)</BlockMath>
                                <BlockMath>(1 - 2i)/(5 - 8i)</BlockMath>
                                <BlockMath>(-7 + 4i)/(2 - 4i)</BlockMath>
                                <BlockMath>(3 + 3i)/(-3 - 3i)</BlockMath>
                                <BlockMath>(5 + i)/(4 - 5i)</BlockMath>

                            </p>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size="8">
                        <MDBCard
                            size="8"
                            color="blue-grey"
                            text="white"
                            className="py-3 px-3 w-100"
                            style={{boxShadow:'none', borderRadius:'0'}}
                        >
                            <p className={classes.pb}>Problem</p>
                            <p
                                className={classes.pb2}
                                style={{borderStyle:'solid',borderBottomColor:'#9e9e9e', borderWidth:'0 0 1px 0'}}
                            >
                                Solve the following: (2 + 3i) / (-4 + 7i). Begin your work by first rewriting the problem in 'Step 1' in the worksheet.
                                <tr/><br/>
                            </p>
                            <p className={classes.pb3}>
                                ADD YOUR OWN PROBLEM
                            </p>
                        </MDBCard>
                        <br/>
                        <div className={`${classes.worksheet} px-3 py-3`}>
                            <label className={classes.ws}>
                                Worksheet
                            </label>
                            <div className="p-1">
                                 <textarea
                                     className="form-control"
                                     id="exampleFormControlTextarea1"
                                     rows="10"
                                     style={{border:'solid',borderColor:'#7e57c2', borderWidth:'1px'}}
                                 />
                            </div>
                            <MDBRow center>
                                <MDBBtn tag="a" floating gradient="peach">
                                    <MDBIcon icon="thumbs-up" />
                                </MDBBtn>
                                <MDBBtn tag="a" floating gradient="blue">
                                    <MDBIcon icon="check" />
                                </MDBBtn>
                                <MDBBtn tag="a" floating disabled className="grey lighten-1">
                                    <MDBIcon icon="clipboard-check" />
                                </MDBBtn>
                            </MDBRow>

                        </div>
                        <br/>
                        <MDBCard
                            size="8"
                            text="white"
                            className="py-3 px-3 w-100 green lighten-2"
                            style={{boxShadow:'none', borderRadius:'0'}}
                        >
                            <p className={classes.pb}>Hints/Feedback</p>
                            <p className={classes.pb2}>Hints and feedback will appear here. You will be given feedback when you click the yellow button above. Once you have received
                                some basic feedback, the arrow buttons below will become purple (enabled) and you will be able to gain additional hints.</p>
                            <MDBRow center>
                                <MDBBtn tag="a" floating disabled className="grey lighten-1">
                                    <MDBIcon icon="angle-left" />
                                </MDBBtn>
                                <MDBBtn tag="a" floating disabled className="grey lighten-1">
                                    <MDBIcon icon="angle-right" />
                                </MDBBtn>
                            </MDBRow>

                        </MDBCard>
                    </MDBCol>

                </MDBRow>
                <MDBRow center>
                    <MDBCol size="2">
                        <MDBBtn
                            color="deep-purple lighten-1"
                            className={`${classes.btn} w-100 mt-3`}
                            onClick={() => {this.props.history.goBack();}}
                        >Previous Lesson</MDBBtn>
                    </MDBCol>
                    <MDBCol size="2">
                        <MDBBtn
                            color="deep-purple lighten-1"
                            className={`${classes.btn} w-100 mt-3`}
                            onClick={() => {this.props.history.push('/complex/page4');}}
                        >Next Lesson</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </div>

        );
    }
}
