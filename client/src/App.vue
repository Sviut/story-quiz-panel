<template>
  <div class="main">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header";

export default {
  components: { Header }
};
</script>

<style scoped>
.main {
  height: calc(100vh - 65px);
}
</style>
