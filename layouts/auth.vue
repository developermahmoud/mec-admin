<template>
  <v-app :dark="$vuetify.theme.dark">
    <v-main>
      {{ $vuetify.theme.dark }}
      <nuxt />
    </v-main>
    <core-loading />
    <core-snackbar />
  </v-app>
</template>

<script>
export default {};
</script>
<style>
.v-application {
  background-color: var(--v-background-base) !important;
}
</style>

