<template>
  <div>
    <div style="text-align: center">You have logged in succesfully</div>
    <div style="text-align: right">
      <b-button type="is-link" class="register" @click="userLogout()">
        LogOut</b-button
      >
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ViewUser",
  created() {},
  methods: {
    ...mapActions("auth", ["logout"]),
    userLogout() {
      this.logout();
    },
  },
};
</script>

<style lang="scss">
</style>