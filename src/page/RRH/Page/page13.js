import React from 'react';
import classes from './index.module.css';
import llrh from '../Lib/llrh.jpg';
import bbw from '../Lib/bbw.jpg';
import audio from '../Lib/audio/13.mp3'
import ears from '../Lib/ears.jpg'
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page13 extends React.Component {
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
                <AskQuestion/>
                <Audio audio={audio}/>
                <div style={{padding:'50px 0'}}>
                    <img className="py-2" src={ears} alt="village" width="600" height="400"/>
                    <p>“But grandmother! What big ears you have,” as she edged closer. </p>
                    {/*<p>“但是奶奶！ 你有多大的耳朵，“她越来越近了。</p>*/}
                    <p>“The better to hear you with my dear,” the wolf replied. </p>
                    {/*<p>“亲爱的，最好能听到你的声音，”狼回答道。</p>*/}

                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/page14');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
