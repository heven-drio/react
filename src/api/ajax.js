/*
	能发送ajax请求的函数模块
	函数的返回值是promise对象
*/ 
import axios from "axios"
export default function ajax(url,data={},type="GET"){
	//请求拼参数串
	if(type === "GET"){  //发送get请求
	//data:{username:"tom" ,password"123}
	//paramStr:username=tom&password=123
	let paramStr = "";
	Object.keys(data).forEach(key =>{
		paramStr += key + "=" + data[key] +"&"
	})
	if(paramStr){
		paramStr = paramStr.substring(0,paramStr.length-1)
		//使用axios发get请求
		return axios.get(url)
	}else{ //发送post请求
		//使用axios发post请求
		return axios.ppost(url,data)
	}
}
}