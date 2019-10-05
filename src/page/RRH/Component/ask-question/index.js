import React from 'react';
import classes from './index.module.css';
import llrh from '../../Lib/llrh.jpg';
import bbw from '../../Lib/bbw.jpg';
import { MDBBtn, MDBModal, MDBModalBody } from 'mdbreact';
import {SpeakRecog} from "../SpeakRRH";

export class AskQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
            redQuestion:'',
            wolfQuestion:'',
            answer:'',
            change:false,
            tag:1,
            defaultQuestion:''

        };

    }
    myClick=(text)=>{
        alert(text);
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    searchAnswer=(value)=>{
        const option={
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({"question":value})
        };
        fetch('http://127.0.0.1:5000/getanswer',option)
            .then(response=>response.text())
            .then(answer=>{
                if (answer.substr(0, 1) === '0'){

                    let text="Is this the question you want to ask?\n"+answer.substring(1,answer.length)
                    this.setState({
                        answer:text,
                        tag:0,
                        defaultQuestion:answer.substring(1,answer.length)
                    })
                }
                else{
                    this.setState({
                        answer:'Answer:'+answer.substring(1,answer.length)
                    })
                }

            })
            .catch(5000)
    }
    searchAgain=(answer)=>{
        const newoption={
            method:'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({"question":answer})
        };
        fetch('http://127.0.0.1:5000/getanswer',newoption)
            .then(response=>response.text())
            .then(newanswer=>{
                this.setState({
                    answer:'Answer:'+newanswer.substring(1,newanswer.length),
                    tag:1
                })
            })
    };
    onRecog=(value)=>{
        this.setState({
            redQuestion: value
        });
    }

    render() {
        return (
            <div>
                <div className={classes.fixed}>
                    <button className="button button" onClick={this.toggle(1)}>
                        <img src={llrh} alt="Little Red Riding Hood" height="142" width="100"/></button>
                </div>
                <div className={classes.fixed1}>
                    <button className="button button" onClick={this.toggle(2)}><img
                        src={bbw} alt="Big Bad Wolf" height="142" width="100"/></button>
                </div>
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} frame position="top">
                    <MDBModalBody className="text-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="px-3">
                                <img src={llrh} alt="Little Red Riding Hood" height="71" width="50"/>
                            </div>
                            <div>
                                Try asking Little Red Riding Hood a question:
                            </div>
                            <div className="ml-3">
                                <SpeakRecog/>
                                {/*<input*/}
                                    {/*className={`form-control form-control-lg ${classes.searchInput}`}*/}

                                    {/*style={{*/}
                                        {/*fontSize: '1.09vw',*/}
                                        {/*width: '30vw'*/}
                                    {/*}}*/}
                                    {/*onChange={(e) => {*/}
                                        {/*const str=e.target.value*/}
                                        {/*this.setState({*/}
                                            {/*redQuestion: str*/}
                                        {/*});*/}
                                    {/*}}*/}
                                {/*/>*/}
                            </div>
                            <div className="ml-3">
                                <MDBBtn
                                    color="primary"
                                    size="sm"
                                    onClick={()=>{this.searchAnswer(this.state.redQuestion)}}
                                >
                                    Ask
                                </MDBBtn>
                            </div>
                        </div>
                        <p >
                           {this.state.answer}
                        </p>
                        <div>
                            {this.state.tag<1? (
                                <div className="d-flex justify-content-center align-items-center">
                                    <MDBBtn
                                        color="primary"
                                        size="sm"
                                        onClick={()=>{this.searchAgain(this.state.defaultQuestion)}}
                                    >
                                        YES
                                    </MDBBtn>
                                    <MDBBtn
                                        size="sm"
                                        onClick={()=>{
                                            this.setState({
                                                answer:'Sorry, we cannot find the answer',
                                                tag:1
                                            })
                                        }}
                                    >
                                        NO
                                    </MDBBtn>

                                </div>
                            ):(null)
                          }
                        </div>
                        {/*{this.state.change?(*/}
                            {/*null*/}
                        {/*):(*/}

                            {/*<p>*/}
                                {/*{this.state.answer}*/}
                            {/*</p>*/}
                        {/*)}*/}
                    </MDBModalBody>
                </MDBModal>
                <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} frame position="top">
                    <MDBModalBody className="text-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="px-3">
                                <img src={bbw} alt="Little Red Riding Hood" height="71" width="50"/>
                            </div>
                            <div>
                                Try asking the Big Bad Wolf a question!
                            </div>
                            <div className="ml-3">
                                <input
                                    className={` px-5 form-control form-control-lg ${classes.searchInput}`}

                                    style={{
                                        fontSize: '1.09vw',
                                        width: '30vw'
                                    }}
                                    onChange={(e) => {
                                        this.setState({
                                            wolfQuestion: e.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="ml-3">
                                <MDBBtn color="primary" size="sm" onClick={()=>{this.searchAnswer(this.state.wolfQuestion)}}>Ask</MDBBtn>
                            </div>
                        </div>
                        <p className={classes.title}>
                            {this.state.answer}
                        </p>
                        <div>
                            {this.state.tag<1? (
                                <div className="d-flex justify-content-center align-items-center">
                                    <MDBBtn
                                        color="primary"
                                        size="sm"
                                        onClick={()=>{this.searchAgain(this.state.defaultQuestion)}}
                                    >
                                        YES
                                    </MDBBtn>
                                    <MDBBtn
                                        size="sm"
                                        onClick={()=>{
                                            this.setState({
                                                answer:'Sorry, we cannot find the answer',
                                                tag:1
                                            })
                                        }}
                                    >
                                        NO
                                    </MDBBtn>
                                </div>
                            ):(null)
                            }
                        </div>
                    </MDBModalBody>
                </MDBModal>
            </div>
        );
    }
}
