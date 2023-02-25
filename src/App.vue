<template>
  <v-app>
    <v-app-bar>
      <template v-slot:prepend>
        <v-btn icon>
          <v-icon>mdi-menu</v-icon>
          <v-menu activator="parent">
            <v-list>
              <v-list-item
                v-for="item in navItems"
                :key="item.title"
                :title="item.title"
                :value="item.value"
                @click="navigate(item.value)"
              >
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </template>

      <v-app-bar-title>To-Do App</v-app-bar-title>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
const navItems = [
  { title: "Tasks", value: "tasks" },
  { title: "Profile", value: "profile" }
];

function navigate(value) {
  console.log(value);
}
</script>
