import React from 'react';
import classes from './index.module.css';

import house from '../Lib/house.jpg'
import audio from '../Lib/audio/1.mp3'

import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";

export class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    myClick=(text)=>{
        alert(text);
    }

    render() {
        return (
            <div className={`${classes.body} align-content-center w-100 h-100 text-center`}>
                {/*<div className={classes.fixed}>*/}
                    {/*<button className="button button" onClick={()=>{this.myClick("Try asking Little Red Riding Hood a question!")}}>*/}
                        {/*<img src={llrh} alt="Little Red Riding Hood" height="142" width="100"/></button>*/}
                {/*</div>*/}
                {/*<div className={classes.fixed1}>*/}
                    {/*<button className="button button" onClick={()=>{this.myClick("Try asking Little Red Riding Hood a question!")}}><img*/}
                        {/*src={bbw} alt="Big Bad Wolf" height="142" width="100"/></button>*/}
                {/*</div>*/}
                <AskQuestion/>
                <Audio audio={audio}/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src={house} alt="village" width="600" height="400"/>
                    {/*todo:<p className="red-text">Lack village.jpg</p>*/}
                    <p> Once upon a time, there was a little girl who lived near the forest.</p>
                    {/*<p>曾几何时，有一个小女孩住在森林附近的一个村庄里。</p>*/}
                    <p>The little girl always wore a red
                        <button
                            className={classes.button1}
                            onClick={()=>{this.myClick("jacket")}}
                        >
                            hood
                        </button>
                        whenever she went out, so everyone called her Little Red Riding Hood.
                    </p>
                    {/*<p>每当她出门的时候，小女孩总是穿着红色的帽子，所以每个人都称她为小红帽。</p>*/}
                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page2');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
