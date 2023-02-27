<template>
  <v-card class="tw-bg-slate-100">
    <v-card-actions>
      <v-btn variant="text" @click="showCreateTask = !showCreateTask"> Create new TASK </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="showCreateTask ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="showCreateTask = !showCreateTask"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showCreateTask">
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field label="Title" clearable class="tw-my-0"></v-text-field>
          <v-text-field label="Description" clearable class="tw-my-0"></v-text-field>
          <v-btn type="submit" block>Create</v-btn>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const showCreateTask = ref(false);
</script>
