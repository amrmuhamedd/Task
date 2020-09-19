import React, { Component } from 'react';
import './navbar.less';
import logo from '../../assests/logo.png';
import { AlignRightOutlined } from '@ant-design/icons';
import { Button} from 'antd';
class navbar extends Component {
    state = {
        open : false 
    };
   
   handelToggle = () => {
       this.setState({
           open : !this.state.open
       })
   }
    render() {
       const menuClasses = this.state.open ? 'menu show' : 'menu';
        return (
            <nav className = "navbar">
                <div className = "container">
                <div className = "navbar-brand">
                    <img src = {logo} alt = "logo"/>
                </div>
                <div className = {menuClasses}>
                    <a href ="/">Home</a>
                    <a href ="/">Department</a>
                    <a href ="/">Our stuff</a>
                    <a href ="/">Services</a>
                    <a href ="/">Review</a>
                    <a href ="/">Contact us</a>
                    <a href ="/"> <Button className = "sign-in">sign in</Button> </a>
                    <a href ="/">  <Button className ="book-now">Book now</Button> </a>
                </div>
                <button className = "toggler" onClick = {this.handelToggle}>
                <AlignRightOutlined style = {{color : '#FF548A'}}/>
                </button>
                </div>
            </nav>
        )
    }
}
export default  navbar