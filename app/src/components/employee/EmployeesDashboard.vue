<template>
  <div class="px-2 sm:px-6 lg:px-8 flex flex-col">
    <div class="py-4">
      <NewEmployeeButton />
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mb-2"
        >
          <EmployeeTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeTable from "../employee/EmployeeTable";
import NewEmployeeButton from "../employee/NewEmployeeButton";

export default {
  name: "Employees",
  data() {
    return {
      employees: [],
      openTag: false,
    };
  },
  components: {
    EmployeeTable,
    NewEmployeeButton,
  },
};
</script>
