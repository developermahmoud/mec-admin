<template>
  <v-app :dark="$vuetify.theme.dark">
    <partials-navbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <partials-footer />
  </v-app>
</template>

<script>
export default {
}
</script>
<style>
.v-application {
  background-color: var(--v-background-base) !important;
}
</style>
