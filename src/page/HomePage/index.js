import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBInput,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBIcon,
    MDBSideNavItem,
    MDBSideNavCat,
    MDBSideNavNav,
    MDBSideNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer,
    MDBView,
    MDBRow,
    MDBCol,
    MDBMask,
    MDBBtn
} from "mdbreact";
import classes from './index.module.css'
export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStateA: false,
            collapsed: false
        };
    }

    handleToggleClickA = () => {
        this.setState({
            toggleStateA: !this.state.toggleStateA
        });
    };
    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };


    render() {
        const navStyle = { marginTop: "0rem" };
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.handleTogglerClick}
            />
        );

        return (
            <div>
                <div className="deep-purple-skin">
                    <MDBSideNav
                        triggerOpening={this.state.toggleStateA}
                        bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
                        mask="strong"
                        hidden
                    >

                        <div className={`${classes.Papyrus} py-3`}>MyEdMaster</div>
                        <MDBInput
                            type="text"
                            hint="Search"
                            style={{
                                color: "#fffff",
                                padding: "0 10px 8px 30px",
                                boxSizing: "border-box"
                            }}
                        />
                        <MDBSideNavNav>
                            <MDBSideNavCat
                                name="Little Red Riding Hood"
                                id="submit-blog-cat"
                                icon="chevron-right"
                            >
                                <MDBSideNavItem onClick={() => {this.props.history.push('/rrh/cover');}}>Ask Question</MDBSideNavItem>
                                {/*<MDBSideNavItem>Registration form</MDBSideNavItem>*/}
                            </MDBSideNavCat>
                            <MDBSideNavCat
                                name="Complex Numbers"
                                id="submit-blog-cat"
                                icon="chevron-right"
                            >
                                <MDBSideNavItem onClick={() => {this.props.history.push('/complex-home');}}>Start</MDBSideNavItem>

                            </MDBSideNavCat>

                            <MDBSideNavCat
                                name="Contact me"
                                id="contact-me-cat"
                                icon="envelope"
                            >
                                <MDBSideNavItem>FAQ</MDBSideNavItem>
                                <MDBSideNavItem>Write a message</MDBSideNavItem>
                            </MDBSideNavCat>
                        </MDBSideNavNav>
                    </MDBSideNav>
                </div>
                <Router>
                    <div>
                        <MDBNavbar
                            double
                            style={navStyle}
                            dark
                            expand="md"
                            fixed="top"
                            scrolling
                            transparent
                        >
                            <MDBNavbarToggler onClick={this.handleTogglerClick} />
                            <MDBCollapse isOpen={this.state.collapsed} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem>
                                        <div
                                            onClick={this.handleToggleClickA}
                                            key="sideNavToggleA"
                                            style={{
                                                lineHeight: "40px",
                                                marginRight: "1em",
                                                verticalAlign: "middle"
                                            }}
                                        >
                                            <MDBIcon icon="bars" color="white" size="2x" />
                                        </div>
                                    </MDBNavItem>
                                    <MDBNavItem
                                        className="d-none d-md-inline"
                                    >
                                        <a
                                            href="/home"
                                            style={{
                                                cursor:'pointer',
                                                fontFamily: 'Arial',
                                                fontSize: '25px',
                                                fontStyle: 'normal',
                                                color:'black',
                                                fontWeight: '700',
                                            }}>
                                            MyEdMaster
                                        </a>

                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>

                        </MDBNavbar>
                        {this.state.collapsed && overlay}
                    </div>

                </Router>

                <MDBView src={`https://mdbootstrap.com/img/Photos/Others/gradient2.png`} >
                    <MDBMask
                        className="rgba-purple-slight d-flex justify-content-center align-items-center"
                        overlay="indigo-light"
                    >
                        <MDBContainer>
                            <section className="text-center my-5">
                                <h2 className="h1-responsive font-weight-bold my-5">
                                    What MyEdMaster Can Do?
                                </h2>
                                <p className="lead w-responsive mx-auto mb-5">
                                   MyEdMaster..
                                </p>
                                <MDBRow>
                                    <MDBCol
                                        md="4"
                                        className={classes.content}
                                        onClick={() => {this.props.history.push('/rrh/cover');}}
                                    >
                                        <MDBIcon icon="book" size="3x" className="pink-text mt-2" />
                                        <h4 className="font-weight-bold my-4">Story</h4>
                                        <h5 className="mb-md-0 mb-5 ">
                                            Story: Little Red Riding Hood. Try to ask questions!
                                        </h5>
                                    </MDBCol>
                                    <MDBCol
                                        md="4"
                                        className={classes.content}
                                        onClick={() => {this.props.history.push('/complex-home');}}
                                    >
                                        <MDBIcon icon="chart-area" size="3x" className="cyan-text mt-2" />
                                        <h4 className="font-weight-bold my-4">Complex Numbers</h4>
                                        <h5 className="mb-md-0 mb-5 ">
                                            say something
                                        </h5>
                                    </MDBCol>
                                    <MDBCol md="4" className={classes.content}>
                                        <MDBIcon far icon="comments" size="3x" className="orange-text mt-2" />
                                        <h4 className="font-weight-bold my-4">Support</h4>
                                        <h5 className="mb-md-0 mb-5 ">
                                            say something
                                        </h5>
                                    </MDBCol>
                                </MDBRow>
                            </section>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>



        );
    }
}
