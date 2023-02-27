<template>
  <v-card class="tw-bg-slate-100 hover:tw-bg-slate-200">
    <v-card-title class="tw-grid tw-grid-cols-2">
      <div class="tw-place-self-start tw-mt-2">{{ task.title }}</div>
      <v-btn icon variant="text" class="tw-place-self-end">
        <v-icon>mdi-dots-vertical</v-icon>
        <v-menu activator="parent">
          <v-list density="compact">
            <v-list-item
              v-for="option in cardDotsOptions"
              :key="option"
              :title="option"
              :value="option.toLowerCase()"
              @click="handleCardOption(option.toLowerCase())"
            >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-card-title>
    <v-card-text>{{ task.description }}</v-card-text>

    <v-card-actions>
      <v-btn class="tw-text-green-800" @click.prevent="handleCardOption('done')">DONE</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps(["task"]);
const task = reactive(props.task);

const cardDotsOptions = ["Edit", "Delete"];
function handleCardOption(option) {
  console.log(option);
}
</script>
