<template>
  <div id="employeeTable">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Title
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Status
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Manager
          </th>
          <th scope="col" class="relative px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="employee in employees" :key="employee.profile.employeeId">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <div v-html="employee.profile.image"></div>
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                  {{ employee.profile.username }}
                </div>
                <div class="text-sm text-gray-500">
                  {{ employee.personal_info.email }}
                </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              {{ employee.contract.position }}
            </div>
            <div class="text-sm text-gray-500">
              {{ employee.contract.department }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span
              :class="[
                employee.profile.status
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800',
                'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
              ]"
            >
              {{ employee.profile.status ? "Active" : "Deactive" }}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ employee.personal_info.manager }}
          </td>
          <td
            class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
          >
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
          </td>
        </tr>

        <!-- More people... -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "EmployeeTable",
  computed: {
    employees() {
      return this.$store.state.employees;
    },
  },
};
</script>
