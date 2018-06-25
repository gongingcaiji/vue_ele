//负责给组件传递数据   拿数据
export default {
    getNav:(state)=>{return state.bNav},
    getName:(state)=>{return state.name},
    getphoneNumber:(state)=>{return state.phoneNumber},
    getGZ:(state)=>{return state.GZ},
    getGL:(state)=>{return state.GL},
    getIdentityCard:(state)=>{return state.IdentityCard},
    getloginZH:(state)=>{return state.loginZH},
    getloginMM:(state)=>{return state.loginMM},
    getregisterZH:(state)=>{return state.registerZH}
}