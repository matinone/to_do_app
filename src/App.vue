<template>
  <v-app>
    <v-app-bar title="To-Do App" color="blue-grey-darken-1">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.prevent="showDrawer = !showDrawer"></v-app-bar-nav-icon>
      </template>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-if="showDrawer" color="blue-grey-lighten-3" class="w-auto">
      <v-list nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :title="item.title"
          :value="item.value"
          @click="navigate(item.value)"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div class="text-h3 text-center">TASKS</div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const showDrawer = ref(false);
const navItems = [
  { title: "Tasks", value: "tasks" },
  { title: "Profile", value: "profile" }
];

function navigate(value) {
  console.log(value);
}
</script>
