/* 注册组件 */
import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import {NavBar,
        WingBlank,
        List,
        InputItem,
        WhiteSpace,
        Radio,
        Button
    } from 'antd-mobile'
import {connect} from "react-redux"

import {register} from "../../redux/actions"
import Logo from '../../components/logo/logo'
const ListItem = List.Item

 class Register extends  Component {
    state = { //保存输入的数据
        username:"", //用户名
        password:"",//密码
        password2:"", //确认密码
        type:"laoban" //用户类型名称  大神/老板
    }
	
	//点击注册调用
    register=()=>{
        // console.log(this.state)
		this.props.register(this.state)
    }

    //处理输入数据改变，更新对应的状态
    handleChange=(name,val)=>{
        //更新状态
        this.setState({
            [name]: val  //属性名不是name,而是name变量的值
        })
    }

    //编程式跳转
    toLogin=()=>{
        this.props.history.replace('/login')
    }

    render() {

        const {type} = this.state;

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
                        <InputItem  placeholder="请输入确认密码" onChange={val =>{this.handleChange("password2",val)}} type={"password"}>确认密码:</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>用户类型:</span>
                            &nbsp;&nbsp;&nbsp;
                            <Radio checked={type === "dashen"} onChange={()=>{this.handleChange("type","dashen")}}>大神</Radio>
                            &nbsp;&nbsp;&nbsp;
                            <Radio  checked={type === "laoban"} onChange={()=>{this.handleChange("type","laoban")}}>老板</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default connect (
	state =>({user:state.user}),
	{register}
)(Register)
 
