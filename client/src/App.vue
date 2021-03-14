<template>
  <div>
    <Header />
    <router-view class="p-10" />
  </div>
</template>
<script>
import Header from "@/components/Header";

export default {
  components: { Header }
};
</script>
