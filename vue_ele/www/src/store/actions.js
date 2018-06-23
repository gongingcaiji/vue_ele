//动作转发和处理异步请求  commit 到mutation
import * as types from './types';   // types 状态一览表
export default {
    showNav:({commit,state})=>{commit(types.SHOW_FOOT)},
}