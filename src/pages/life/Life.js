import React from 'react';
import Child from './Child';
import './Life.less';
import {Button} from 'antd';
//import 'antd/dist/antd.css'
export default class Life extends React.Component{
    state={
        count:0
    }
    add = () => {
        this.setState({
            count:this.state.count+1
        })
    }
    addNext(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return <div className="box">
            <p>组件的生命周期</p>
            <button onClick={this.add}>点击一下</button>
            <button onClick={this.addNext.bind(this)}>点击一下Next</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
            <Button>button</Button>
        </div>
    }
}