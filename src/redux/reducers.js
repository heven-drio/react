/*
    包含n个reducer函数 根据老的state和指定新的action 返回一个新的state
*/
import {combineReducers} from 'redux'
import {
	AUTH_SUCCESS,ERROR_MSG} from './action-type'

const initUser={
	username:'', //用户名
	type:"", //用户类型 dashen / laoban
	msg:"", //错误提示信息
}

//产生user状态的reducer
	function user(state=initUser,action){
		switch(action.type){
			case AUTH_SUCCESS:  //data是user
				return {...state,...action.data}
			case ERROR_MSG:    //data是msg
				return {...state,msg:action.data}
				
			default:
				return state
		}
	}




export default combineReducers({
    user
})
//向外暴露的状态结构：{user:{}}