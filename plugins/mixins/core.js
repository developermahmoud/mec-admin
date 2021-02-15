import Vue from "vue";
import { mapActions } from "vuex";

Vue.mixin({
  methods: {
    ...mapActions({
      setSnackbar: "snackbar/setSnackbar",
      setLoading: "loading/setLoading"
    })
  }
});
