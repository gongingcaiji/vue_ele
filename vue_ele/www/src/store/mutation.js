//负责数据突变
import * as types from './types';
console.log('types',[types.CHANGE_PHONE]);

export default {
    [types.SHOW_FOOT]:(state)=> {state.bNav=true;},
    [types.CHANGE_NAME]:(state,payload)=> {console.log(payload);state.name=payload;},
    [types.CHANGE_PHONE]:(state,payload)=> {console.log('数据突变',payload);state.phoneNumber=payload;},
    [types.CHANGE_GZ]:(state,payload)=> {console.log('数据突变22',payload);state.GZ=payload;},
    loginusername:(state,payload)=> {state.loginZH=payload;},
    loginuserpassword:(state,payload)=> {state.loginMM=payload;},
    registername:(state,payload)=>{state.registerZH=payload;}
}
