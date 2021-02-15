<template>
  <v-dialog
    v-model="dialog"
    max-width="500"
    content-class="rounded-xl"
    transition="dialog-top-transition"
  >
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title> تأكيد الحذف؟</v-toolbar-title>
      </v-toolbar>
      <v-card-actions>
        <v-btn
          class="black white--text"
          text
          rounded
          @click="$emit('close-dialog', true)"
          >تأكيد</v-btn
        >

        <v-spacer></v-spacer>
        <v-btn
          class="primary"
          text
          rounded
          @click="$emit('close-dialog', false)"
          >إلغاء</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      required: true,
      type: Boolean
    }
  }
};
</script>

<style></style>
