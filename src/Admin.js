import React from 'react';
import { Row, Col } from 'antd';
import NavLeft from './components/NavLeft';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import './style/common.less'
export default class Admin extends React.Component {
    render() {
        return <div>
            <Row className="container">
                {/* 左侧菜单 */}
                <Col span={3} className="nav-left">
                    <NavLeft/>
                </Col>
                {/* 右侧内容 */}
                <Col span={21} className="main">
                    {/* 头部 */}
                    <Header/>
                    {/* 内容区域 */}
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    {/* 底部 */}
                    <Footer/>
                </Col>
            </Row>
        </div>
    }
}