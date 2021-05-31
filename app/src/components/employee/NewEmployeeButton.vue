<template>
  <button
    @click="createNew"
    class="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-300 rounded shadow text-sm"
  >
    Add New Employee
  </button>
</template>

<script>
export default {
  name: "NewEmployee",
  methods: {
    createNew: function() {
      console.log("hit newEmployee button");
      this.$router.push("/employee/create");
    },
  },
};
</script>
