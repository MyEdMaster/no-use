import React from 'react';
import classes from './index.module.css';
import llrh from '../Lib/llrh.jpg';
import bbw from '../Lib/bbw.jpg';
import audio from '../Lib/audio/10.mp3'
import bed from '../Lib/bed.jpg'
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page10 extends React.Component {
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
                    <img className="py-2" src={bed} alt="village" width="600" height="400"/>
                    <p>A few minutes later, Little Red Riding Hood knocked on the door. </p>
                    {/*<p>几分钟后，小红帽敲门。</p>*/}
                    <p>The wolf quickly jumped into bed and pulled the blanket over his nose.</p>
                    {/*<p>狼迅速跳入床上，将毯子拉过鼻子。</p>*/}

                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/page11');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
