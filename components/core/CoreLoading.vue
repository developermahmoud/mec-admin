<template>
  <div>
    <v-overlay :value="isOverlay">
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isOverlay: "loading/loading"
    })
  }
};
</script>
