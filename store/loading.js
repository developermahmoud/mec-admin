export const state = () => ({
    loading: false
  });
  
  export const getters = {
    loading(state) {
      return state.loading;
    }
  };
  
  export const mutations = {
    SET_LOADING(state, value) {
      state.loading = value;
    }
  };
  
  export const actions = {
    setLoading({ commit }, value) {
      commit("SET_LOADING", value);
    }
  };
  