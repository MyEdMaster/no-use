import React from "react";
import {Test} from "../../Playground/Test";
import {Speech} from "../SpeechDemo";


export class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {


        return (

            <div>
                This is a test page
                <Test/>

                <Speech/>

            </div>

        );
    }
}
