<template>
  <div class="flex  px-10 py-5 bg-blue-600 text-white">
    <div class="uppercase font-bold">Story Quiz Panel</div>
    <div class="ml-auto space-x-2.5">
      <router-link to="/login">Login</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
