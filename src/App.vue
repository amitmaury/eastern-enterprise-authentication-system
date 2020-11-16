<template>
  <div>
    <Header/>
    <router-view />
  </div>
</template>
<script>
import Header from "./components/layout/Header";
export default {
  name: "App",
  components: { Header },
  data: () => ({
  })
};
</script>

<style lang="scss">
@import "./styles/default.scss";
</style>