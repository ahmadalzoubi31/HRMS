<template>
  <div>
    <SideBar />
    <!--    <NavBar />-->
    <EmployeesDashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import EmployeesDashboard from "@/components/employee/EmployeesDashboard.vue";
import NavBar from "@/components/common/NavBar.vue";
import SideBar from "@/components/common/SideBar";

export default {
  name: "Employee",
  components: {
    SideBar,
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
