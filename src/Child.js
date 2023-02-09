import React, { Component } from 'react'

class Child extends Component {

    constructor(props) {

        console.log("Child Constructor");
        super(props);
    }

    componentWillReceiveProps(){

        console.log("componentWillReceiveProps");   // Child componentine gelen props tetiklendigi anda bu componentWillReceiveProps çalısır.

    }

    componentWillMount = () => {  
        console.log("Child WillMount")
    };

    componentDidMount() {
        console.log(" Child DidMount");  

    }

    render() {
        console.log("Child Render")
        return (
            <div>
                Child

            </div>
        )
    }
}

export default Child;