import { createStore } from "vuex";

export default createStore({
  state: {}, // 用于存储数据

  getters: {}, // 获取state中的数据

  mutations: {}, // 用于处理state中的数据，比如更新用户的状态，即对数据进行修改

  actions: {}, // mutations中的进行异步操作，比如网络请求，

  // 当应用变得非常复杂时，store对象就有可能变得相当臃肿，
  // 为此使用Vuex允许将store分割成模块，而每个模块都拥有自己的state、mutation、action、getters等等。
  modules: {},
});
