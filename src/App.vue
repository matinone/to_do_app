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

    <v-main class="tw-bg-gray-300">
      <router-view></router-view>
    </v-main>

    <v-dialog v-model="showRegister">
      <register-form :updateShowRegister="updateShowRegister"></register-form>
    </v-dialog>
  </v-app>
</template>

<script setup>
import { ref, reactive, watchEffect } from "vue";

import RegisterForm from "@/components/RegisterForm.vue";
import useUserStore from "@/stores/userStore";

const userStore = useUserStore();

let navItems;
function setNavItems(loggedIn) {
  if (loggedIn) {
    navItems = reactive([
      { title: "Tasks", value: "tasks" },
      { title: "Profile", value: "profile" }
    ]);
  } else {
    navItems = reactive([
      { title: "Register", value: "register" },
      { title: "Login", value: "login" }
    ]);
  }
}

setNavItems(userStore.loggedIn);
watchEffect(() => {
  const userLoggedIn = userStore.loggedIn;
  setNavItems(userLoggedIn);
});

let showRegister = ref(false);
function updateShowRegister(value) {
  showRegister.value = value;
}

function navigate(value) {
  console.log(value);
  if (value === "register") {
    showRegister.value = true;
  }
}
</script>
