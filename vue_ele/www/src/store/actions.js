//动作转发和处理异步请求  commit 到mutation
import * as types from './types';   // types 状态一览表
import ajax from 'yiajax'
export default {
    showNav:({commit,state})=>{commit(types.SHOW_FOOT)},
    changename1:({commit,state})=>{commit(types.CHANGE_NAME,'蔡少东')},
    changephoneNumber:({commit,state})=>{commit(types.CHANGE_PHONE,'18059809521')},
    loginDL:({commit,state})=>{
        let url = 'http://localhost:3000/login'
        const headers = {
            "Content-Type":'application/json'
        };
        fetch(
            url, 
            {
                method: 'post',
                mode:'cors',
                credentials:'include', 
                headers,
            }).then(
                res=>res.json()
            ).then(
                data=>{
                console.log('123',data);
                console.log('123',data[0].usersname);
                
                commit('loginusername',data[0].usersname);
                commit('loginuserpassword',data[0].password);
            }).catch(function(err) {
                console.log(err);
            });
    },
    regSignin:({commit,state})=>{
        let url = 'http://localhost:3000/register'
        const headers = {
            "Content-Type":"application/json"
        };
        fetch(
            url,
            {
                method:'post',
                mode:'cors',
                credentials:'include',
                headers,
            }).then(
                res=>res.json()
            ).then(
                
                data=>{
                    for( i in data){
                        console.log(data[usersname])
                    }
                    commit('registername',data[0].usersname);
                    // console.log('action',registername);
                    
                }
            ).catch(function(err) {
                console.log(err);
            });
    }

}