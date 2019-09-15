import React from 'react';
import classes from './index.module.css';
import llrh from '../Lib/llrh.jpg';
import bbw from '../Lib/bbw.jpg';
import leaving from '../Lib/leaving.jpg'
import {AskQuestion} from "../Component/ask-question";
export class End extends React.Component {
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
                <div style={{padding:'50px 0 250px 0'}}>
                    <div>
                        <img className="py-2 my-3" src={leaving} alt="village" width="600" height="400"/>
                    </div>
                    {/*<p className="red-text">*/}
                        {/*Lack end.jpg*/}
                    {/*</p>*/}

                    <div
                        onClick={() => {this.props.history.goBack();}}
                        className={classes.a}>&laquo; Previous
                    </div>
                    <div
                        onClick={() => {this.props.history.push('/rrh/cover');}}
                        className={classes.a}>Again &raquo;
                    </div>

                </div>

            </div>
        );
    }
}
