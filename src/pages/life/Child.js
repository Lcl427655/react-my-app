import React from 'react'
export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render(){
        return <div>
            <p>child</p>
            <p>{this.props.name}</p>
        </div>
    }

    // getDerivedStateFromProps(props){
    //     console.log("getDerivedStateFromProps")
    //     console.log(props)
    // }
    componentWillReceiveProps(props){
        console.log("componentWillReceiveProps")
        console.log(props)
    }
}