/*
    包含n个action creator
    异步action
    同步action
*/ 
import {AUTH_SUCCESS,ERROR_MSG} from "./action-type"
import {reqRegister,reqLogin} from '../api'

//授权成功的同步action
const authSuccess = (user) =>({type:AUTH_SUCCESS,data:user})
//错误信息的同步actio
const errorMsg = (msg) =>({type:ERROR_MSG,data:msg})


//注册异步action
export const register =(user) =>{
	const {username,password,password2,type} = user;
	//表单的前台检查,如果不通过,返回一个errorMsg的同步action
	if(!username){  
		return errorMsg("用户名必须填写")
		}else if(password !== password2){
		return errorMsg("两次密码一致")
	}
	 
	//表但数据合法,返回一个发ajax请求的异步action函数
	return async dispatch =>{
		//发送注册的异步ajax请求
		const response= await reqRegister({username,password,type})
		const result = response.data
		if(result.data === 0){ //成功
			//分发授权成功action
			dispatch(authSuccess(result.data))
		}else{ //失败
			//分发错误提示信息的同步action
			dispatch(errorMsg(result.msg))
			
		}
	}
}


//登录异步action
export const login =(user) =>{
	
	const {username,password} = user
	//表单的前台检查,如果不通过,返回一个errorMsg的同步action
	if(!username){
		return errorMsg("用户名必须填写")
		}else if(!password){
		return errorMsg("密码必须填写")
	}
	
	return async dispatch =>{
		//发送登录的异步ajax请求
		const response= await reqLogin(user)
		const result = response.data
		if(result.data === 0){ //成功
			//分发授权成功action
			dispatch(authSuccess(result.data))
		}else{ //失败
			//分发错误提示信息的同步action
			dispatch(errorMsg(result.msg))
			
		}
}}