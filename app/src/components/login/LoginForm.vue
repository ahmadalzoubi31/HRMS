<template>
  <div
    class="min-h-screen flex items-center flex-row-reverse sm:px-6 lg:px-8 m-28"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-600">
          HR Management System
        </h2>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-600">
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit="checkForm" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="emp_id" class="sr-only">Employee ID</label>
            <input
              v-model="emp_id"
              id="emp_id"
              name="emp_id"
              type="emp_id"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              placeholder="Employee ID"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="emp_pass"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label for="remember_me" class="ml-2 block text-sm text-gray-600">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-teal-600 hover:text-teal-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            @click="checkForm"
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>

    <Alert />
  </div>
</template>

<script>
import Alert from "../common/Alert";
export default {
  name: "LoginForm",
  data() {
    return {
      errors: [],
      emp_id: null,
      emp_pass: null,
      remember_me: null,
    };
  },
  components: {
    Alert,
  },
  methods: {
    checkForm: function(e) {
      if (this.emp_id && this.emp_pass) {
        console.log("Contained Body! true");
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.age) {
        this.errors.push("Passwird required.");
      }

      e.preventDefault();
      this.$store.dispatch("getLoginEmployee", {
        emp_id: this.emp_id,
        emp_pass: this.emp_pass,
      });
    },
  },
};
</script>
