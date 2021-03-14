<template>
  <div class="main">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
import axios from "axios";

export default {
  components: { Header },
  created: function() {
    axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function() {
        if (err.status === 401 && err.config) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  }
};
</script>

<style scoped>
.main {
  height: calc(100vh - 65px);
}
</style>
