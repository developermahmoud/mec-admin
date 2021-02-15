<template>
  <div>
    <v-app-bar class="transparent" fixed flat app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>MEC</v-toolbar-title>
      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="changeTheme" v-bind="attrs" v-on="on">
            <v-icon v-if="$vuetify.theme.dark">mdi-brightness-4</v-icon>
            <v-icon v-else>mdi-brightness-7</v-icon>
          </v-btn>
        </template>
        <span>Dark / Light</span>
      </v-tooltip>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" class="secondary" right fixed app>
      <v-list class="py-0" dense>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>الرئيسية</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>الرئيسية</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-group prepend-icon="mdi-account-group" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title exact>المستخدمين</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item to="/users/create" link exact>
            <v-list-item-content>
              <v-list-item-title>إضافة جديد</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/users" link exact>
            <v-list-item-content>
              <v-list-item-title>عرض الكل</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-divider></v-divider>
        <v-list-group prepend-icon="mdi-book" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title exact>الدورات</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item to="/users/create" link exact>
            <v-list-item-content>
              <v-list-item-title>إضافة جديد</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/users" link exact>
            <v-list-item-content>
              <v-list-item-title>عرض الكل</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-divider></v-divider>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>mdi-chart-bar-stacked</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>المسوقين</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>mdi-newspaper-variant-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>التقارير والأخبار</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>mdi-finance</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>التوصيات</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>mdi-image</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>مركز الصور</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>mdi-face-agent</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>خدمة العملاء</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item router exact>
          <v-list-item-action>
            <v-icon>mdi-receipt</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>الفواتير</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    };
  },
  methods: {
    changeTheme() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.dark = false;
        localStorage.setItem("dark", false);
      } else {
        this.$vuetify.theme.dark = true;
        localStorage.setItem("dark", true);
      }
    }
  }
};
</script>

<style></style>
