<template>
  <div>
    <v-snackbar
      :value="coreSnackbar.showing"
      :timeout="4000"
      :color="coreSnackbar.color"
      top
      @input="setShowingFalse"
    >
      {{ coreSnackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click.native="setShowingFalse">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      coreSnackbar: "snackbar/snackbar"
    })
  },
  methods: {
    ...mapActions({
      setShowingFalse: "snackbar/setShowingFalse"
    })
  }
};
</script>
