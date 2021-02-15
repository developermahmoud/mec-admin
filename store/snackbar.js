export const state = () => ({
    snackbar: { showing: false, text: null, color: null, top: false }
  });
  
  export const getters = {
    snackbar(state) {
      return state.snackbar;
    }
  };
  
  export const mutations = {
    SET_SNACKBAR(state, snackbar) {
      state.snackbar.showing = true;
      state.snackbar.text = snackbar.text;
      state.snackbar.color = snackbar.color;
      if (snackbar.top) {
        state.snackbar.top = true;
      }
    },
    SET_SHOWING_FALSE(state) {
      state.snackbar.showing = false;
    }
  };
  
  export const actions = {
    setSnackbar({ commit }, snackbar) {
      commit("SET_SNACKBAR", snackbar);
    },
    setShowingFalse({ commit }) {
      commit("SET_SHOWING_FALSE");
    }
  };
  