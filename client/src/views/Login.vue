<template>
  <div
    class="container mx-auto flex flex-col justify-center items-center h-full"
  >
    <form class="p-10 border-2 w-1/2" @submit.prevent="submit">
      <div class="flex flex-col mb-4">
        <label
          class="mb-2 uppercase font-bold text-sm text-grey-darkest"
          for="username"
          >Username</label
        >
        <input
          v-model="username"
          class="border py-2 px-3 text-grey-darkest"
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label
          class="mb-2 uppercase font-bold text-sm text-grey-darkest"
          for="password"
          >Password</label
        >
        <input
          v-model="password"
          class="border py-2 px-3 text-grey-darkest"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div class="w-full flex justify-center">
        <input
          type="submit"
          :disabled="disabledBtn"
          class="p-2.5 px-6 bg-blue-500 text-white font-bold rounded-3xl disabled:opacity-50 outline-none focus:outline-none"
          value="Log In"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["user"]),
    disabledBtn() {
      return !this.username || !this.password;
    }
  },
  methods: {
    ...mapActions(["login"]),
    submit() {
      const user = {
        login: this.username,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/dashboard");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped></style>
