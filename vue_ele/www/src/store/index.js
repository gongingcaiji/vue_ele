//入口文件
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import actions from './actions';
import mutations from './mutation';
import getters from './getters';
import state from './state';

export default new Vuex.Store({
    actions,mutations,getters,state,
})
