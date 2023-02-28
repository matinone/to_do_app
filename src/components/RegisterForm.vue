<template>
  <v-card class="tw-bg-slate-100 tw-w-1/4 tw-self-center">
    <v-card-text>
      <v-container>
        <v-row class="tw-justify-between tw-mb-2">
          <v-col cols="6" class="tw-font-bold tw-text-xl"> New User </v-col>
          <v-col cols="1">
            <v-icon
              icon="mdi-alpha-x"
              class="tw-scale-150"
              @click.prevent="updateShowRegister(false)"
            ></v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Username"></v-text-field>
            <v-text-field label="Email"></v-text-field>
            <v-text-field label="Password" type="password"></v-text-field>
            <v-text-field label="Confirm Password" type="password"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="tw-justify-end">
          <v-col cols="3">
            <v-btn class="tw-bg-blue-100" @click="updateShowRegister(false)"> Create </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps(["updateShowRegister"]);
// eslint-disable-next-line vue/no-setup-props-destructure
const updateShowRegister = props.updateShowRegister;
</script>
