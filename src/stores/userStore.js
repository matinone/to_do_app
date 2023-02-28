import { defineStore } from "pinia";

export default defineStore("user", {
  state: () => ({
    loggedIn: false,
    accessToken: null
  }),

  actions: {
    async validateToken() {
      if (!this.loggedIn || !this.accessToken) {
        return false;
      }

      return true;
    }
  }
});
