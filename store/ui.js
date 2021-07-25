export default {
  state() {
    return {
      showLeftSidebar: false
    };
  },
  mutations: {
    SET_SHOW_LEFTSIDEBAR(state, payload) {
      state.showLeftSidebar = payload;
    }
  }
};
