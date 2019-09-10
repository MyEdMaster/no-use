import React from 'react';
import classes from './index.module.css';
import llrh from '../Lib/llrh.jpg';
import bbw from '../Lib/bbw.jpg';
import audio from '../Lib/audio/19.mp3'
import carry from '../Lib/carry.jpg'
import {AskQuestion} from "../Component/ask-question";
import {Audio} from "../Component/audio";
export class Page19 extends React.Component {
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
                <div style={{padding:'50px 0 200px 0'}}>
                    <img className="py-2" src={carry} alt="village" width="600" height="400"/>
                    <p>The woodsman carried the wolf deep into the forest where the wolf could not hurt anyone.</p>
                    {/*<p>这个樵夫把狼带到森林深处，狼不会伤到任何人。</p>*/}

                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/page20');}}
                        className={classes.a}>Next &raquo;
                    </div>
                </div>

            </div>
        );
    }
}
