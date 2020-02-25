/* 注册登录组件 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


import {NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
   
    Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'

 class Login extends Component {
    state = { //保存输入的数据
        username:"", //用户名
        password:"",//密码
    }

    login=()=>{
        console.log(this.state)
    }

    //处理输入数据改变，更新对应的状态
    handleChange=(name,val)=>{
        //更新状态
        this.setState({
            [name]: val  //属性名不是name,而是name变量的值
        })
    }

     //编程式跳转
     toRegister=()=>{
        this.props.history.replace('/register')
        
    }

    render() {
        return (
            <div>
               
               <NavBar>boss&nbsp;直&nbsp;聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder="请输入用户名" onChange={val =>{this.handleChange("username",val)}}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem  placeholder="请输入密码" onChange={val =>{this.handleChange("password",val)}} type={"password"}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.login}>登&nbsp;&nbsp;&nbsp;陆</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>注册账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default withRouter(Login);
