import React from "react";

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
} from "mdbreact";
import classes from './index.module.css'
export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleStateA: false
        };
    }

    handleToggleClickA = () => {
        this.setState({
            toggleStateA: !this.state.toggleStateA
        });
    };

    render() {
        return (
            <div> <div className="deep-purple-skin">
                <MDBSideNav
                    triggerOpening={this.state.toggleStateA}
                    bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
                    mask="strong"
                    hidden
                >

                    <div className={`${classes.Papyrus} py-3`}>MyEdMaster</div>

                    {/*<li>*/}
                    {/*<ul className="social">*/}
                    {/*<li>*/}
                    {/*<a href="#!">*/}
                    {/*<MDBIcon fab icon="facebook-f" />*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="#!">*/}
                    {/*<MDBIcon fab icon="pinterest" />*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="#!">*/}
                    {/*<MDBIcon fab icon="google-plus-g" />*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<a href="#!">*/}
                    {/*<MDBIcon fab icon="twitter" />*/}
                    {/*</a>*/}
                    {/*</li>*/}
                    {/*</ul>*/}
                    {/*</li>*/}
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
                            <MDBSideNavItem>Ask Question</MDBSideNavItem>
                            {/*<MDBSideNavItem>Registration form</MDBSideNavItem>*/}
                        </MDBSideNavCat>
                        <MDBSideNavCat
                            name="Complex Numbers"
                            id="submit-blog-cat"
                            icon="chevron-right"
                        >
                            <MDBSideNavItem>Start</MDBSideNavItem>
                            {/*<MDBSideNavItem>Registration form</MDBSideNavItem>*/}
                        </MDBSideNavCat>

                        <MDBSideNavCat
                            name="Contact me"
                            id="contact-me-cat"
                            icon="envelope"
                        >
                            <MDBSideNavItem>FAQ</MDBSideNavItem>
                            <MDBSideNavItem>Write a message</MDBSideNavItem>
                        </MDBSideNavCat>
                        {/*<MDBSideNavCat*/}
                        {/*iconRegular*/}
                        {/*name="Instruction"*/}
                        {/*id="instruction-cat"*/}
                        {/*icon="hand-pointer"*/}
                        {/*>*/}
                        {/*<MDBSideNavItem>For bloggers</MDBSideNavItem>*/}
                        {/*<MDBSideNavItem>For authors</MDBSideNavItem>*/}
                        {/*</MDBSideNavCat>*/}
                        {/*<MDBSideNavCat name="About" id="about-cat" icon="eye">*/}
                        {/*<MDBSideNavItem>Instruction</MDBSideNavItem>*/}
                        {/*<MDBSideNavItem>Monthly meetings</MDBSideNavItem>*/}
                        {/*</MDBSideNavCat>*/}
                    </MDBSideNavNav>
                </MDBSideNav>
                <MDBNavbar double expand="lg" fixed="top" scrolling className='indigo lighten-4'>
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
                                <MDBIcon icon="bars" className="black-text" size="2x" />
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
                    {/*<MDBNavbarNav right style={specialCaseNavbarStyles}>*/}
                    {/*<MDBNavItem active>*/}
                    {/*<div>*/}
                    {/*<MDBIcon icon="envelope" className="d-inline-inline" />{" "}*/}
                    {/*<div className="d-none d-md-inline">Contact</div>*/}
                    {/*</div>*/}
                    {/*</MDBNavItem>*/}
                    {/*<MDBNavItem>*/}
                    {/*<div>*/}
                    {/*<MDBIcon far icon="comments" className="d-inline-inline" />{" "}*/}
                    {/*<div className="d-none d-md-inline">Support</div>*/}
                    {/*</div>*/}
                    {/*</MDBNavItem>*/}
                    {/*<MDBNavItem>*/}
                    {/*<div>*/}
                    {/*<MDBIcon icon="user" className="d-inline-inline" />{" "}*/}
                    {/*<div className="d-none d-md-inline">Account</div>*/}
                    {/*</div>*/}
                    {/*</MDBNavItem>*/}
                    {/*</MDBNavbarNav>*/}
                </MDBNavbar>
            </div>
                <div style={{height:'65.6px'}}>

                </div>
                </div>



        );
    }
}
