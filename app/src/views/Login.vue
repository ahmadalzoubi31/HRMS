<template>
  <div>
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "../components/login/LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>
