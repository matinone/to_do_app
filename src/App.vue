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
      <!-- <router-view></router-view> -->
      <v-container class="tw-bg-gray-300" fluid>
        <v-row class="tw-justify-start">
          <v-col v-for="k in 2" :key="k" cols="4">
            <v-sheet class="tw-pa-2 tw-ma-2"> .justify-start </v-sheet>
          </v-col>
        </v-row>

        <v-row class="tw-justify-center">
          <v-col v-for="k in 2" :key="k" cols="4">
            <v-sheet class="tw-p-2 tw-m-2"> .justify-center </v-sheet>
          </v-col>
        </v-row>

        <v-row class="tw-justify-end">
          <v-col v-for="k in 2" :key="k" cols="4">
            <v-sheet class="tw-p-2 tw-m-2"> .justify-end </v-sheet>
          </v-col>
        </v-row>

        <v-row class="tw-justify-around">
          <v-col v-for="k in 2" :key="k" cols="4">
            <v-sheet class="tw-p-2 tw-m-2"> .justify-space-around </v-sheet>
          </v-col>
        </v-row>

        <v-row class="tw-justify-between">
          <v-col v-for="k in 2" :key="k" cols="4">
            <v-sheet class="tw-p-2 tw-m-2"> .justify-space-between </v-sheet>
          </v-col>
        </v-row>
      </v-container>
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
