<template>
  <div>
    <NavBar />
    <EmployeeForm />
  </div>
</template>

<script>
// @ is an alias to /src
import EmployeeForm from "@/components/employee/create/EmployeeForm.vue";
import NavBar from "@/components/common/NavBar.vue";

export default {
  name: "Employee",
  components: {
    NavBar,
    EmployeeForm,
  },
  computed: {
    employees() {
      return this.$store.state.employees;
    },
  },
  mounted() {
    this.$store.dispatch("getAllEmployees");
  },
};
</script>
