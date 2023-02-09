import React, { Component } from 'react'

class Child extends Component {

    constructor(props) {

        console.log("Child Constructor");
        super(props);
    }

    componentWillMount = () => {  
        console.log("Child WillMount")
    };

    componentDidMount() {
        console.log(" Child DidMount");  

    }

    render() {
        return (
            <div>
                Child

            </div>
        )
    }
}

export default Child;