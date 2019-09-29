
import React from "react";
import Speech from './test'
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

export class TestClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    start=()=>{
        let recognition = new SpeechRecognition();
        recognition.lang='en-US';
        recognition.start()
    }



    render() {


        return (

            <div>
                <button>

                </button>
            </div>

        );
    }
}
