<template>
  <v-container fluid>
    <v-row class="tw-justify-center">
      <v-col cols="6">
        <new-task></new-task>
      </v-col>
    </v-row>
    <v-row class="tw-justify-center">
      <v-col cols="12" sm="6" lg="3" v-for="task in tasks" :key="task.id">
        <task-item :task="task"></task-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import NewTask from "@/components/NewTask.vue";
import TaskItem from "@/components/TaskItem.vue";

const tasks = [
  {
    id: 0,
    title: "Task 1",
    description: "Do this task."
  },
  {
    id: 1,
    title: "Task 2",
    description: "Do this one as well."
  },
  {
    id: 2,
    title: "Task 3",
    description: "Do this task."
  },
  {
    id: 3,
    title: "Task 4",
    description: "Do this one as well."
  }
];
</script>
