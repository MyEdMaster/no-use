import React from "react";
import {Test} from "../Test";

import {TestClass} from "../Test2";

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


                <TestClass/>

            </div>

        );
    }
}
