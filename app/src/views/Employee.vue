<template>
  <div>
    <NavBar />
    <EmployeesDashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import EmployeesDashboard from "@/components/employee/EmployeesDashboard.vue";
import NavBar from "@/components/common/NavBar.vue";

export default {
  name: "Employee",
  components: {
    NavBar,
    EmployeesDashboard,
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
