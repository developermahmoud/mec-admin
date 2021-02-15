<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <div style="width:400px">
          <v-card class="secondary rounded-xl mt-16 py-5" flat>
            <v-card-title class="py-5">
              <v-divider></v-divider>
              <h2 class="mx-2">تسجيل الدخول</h2>
              <v-divider></v-divider>
            </v-card-title>
            <v-card-text class="mt-2">
              <v-text-field
                outlined
                v-model="form.username"
                label="البريد الألكترونى"
              ></v-text-field>
              <v-text-field
                type="password"
                outlined
                v-model="form.password"
                label="الرقم السرى"
              ></v-text-field>
              <v-btn
                class="primary"
                block
                rounded
                text
                large
                @click="login"
                >دخول
              </v-btn>
            </v-card-text>
          </v-card>
           <div class="text-center my-5 subtitle-1">Copyright © 2004-2021</div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      try {
        this.setLoading(true);
        await this.$auth.loginWith("laravelJWT", {
          data: this.form
        });
        this.setLoading(false);
        this.setSnackbar({
          color: "success",
          text: "تم الدخول"
        });
        // this.$router.replace({ name: "index" });
      } catch (e) {
        this.setLoading(false);
        this.setSnackbar({
          color: "error",
          text: "البيانات غير صحيحة"
        });
      }
    }
  }
};
</script>

<style></style>
