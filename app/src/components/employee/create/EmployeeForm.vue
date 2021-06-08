<template>
  <div id="newEmployeeForm" class="bg-gray-100">
    <div class="mx-auto py-6 sm:px-6 lg:px-8 max-w-full">
      <!-- Profile Section -->
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
            <p class="mt-1 text-sm text-gray-600">
              Description.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form name="profile">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <!-- Employee ID -->
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="emp_id" class="block text-sm font-medium text-gray-700">
                      Employee ID
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        v-model="formInput.profile.emp_id"
                        type="text"
                        name="emp_id"
                        id="emp_id"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <!-- User Name -->
                  <div class="col-span-6 sm:col-span-3">
                    <label for="username" class="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        v-model="formInput.profile.username"
                        type="text"
                        name="username"
                        id="username"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-6 gap-6">
                  <!-- Photo -->
                  <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div class="mt-1 flex items-center">
                      <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                      <button
                        name="photo"
                        class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                  <!-- Status -->
                  <div class="col-span-6 sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <div class="mt-1 flex items-center">
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input
                          v-model="formInput.profile.status"
                          type="text"
                          name="status"
                          id="status"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200" />
        </div>
      </div>

      <!--  Personal Information Section -->
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                Description.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form name="personal_info">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <!-- First Name -->
                    <div class="col-span-6 sm:col-span-2">
                      <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                      <input
                        v-model="formInput.personal_info.first_name"
                        type="text"
                        name="first_name"
                        id="first_name"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <!-- Middle Name -->
                    <div class="col-span-6 sm:col-span-2">
                      <label for="middle_name" class="block text-sm font-medium text-gray-700">Middle name</label>
                      <input
                        v-model="formInput.personal_info.middle_name"
                        type="text"
                        name="middle_name"
                        id="middle_name"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <!-- Last Name -->
                    <div class="col-span-6 sm:col-span-2">
                      <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                      <input
                        v-model="formInput.personal_info.last_name"
                        type="text"
                        name="last_name"
                        id="last_name"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <!-- Age -->
                    <div class="col-span-6 sm:col-span-2">
                      <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
                      <input
                        v-model="formInput.personal_info.age"
                        type="text"
                        name="age"
                        id="age"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <!-- Manager -->
                    <div class="col-span-6 sm:col-span-2">
                      <label for="manager" class="block text-sm font-medium text-gray-700">Manager</label>
                      <input
                        v-model="formInput.personal_info.manager"
                        type="text"
                        name="manager"
                        id="manager"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <!-- Mobile -->
                    <div class="col-span-6 sm:col-span-2">
                      <label for="mobile" class="block text-sm font-medium text-gray-700">mobile</label>
                      <input
                        v-model="formInput.personal_info.mobile"
                        type="text"
                        name="mobile"
                        id="mobile"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <!-- Email Address -->
                    <div class="col-span-6 sm:col-span-3">
                      <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                      <input
                        v-model="formInput.personal_info.email_address"
                        type="text"
                        name="email_address"
                        id="email_address"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <!-- City Name -->
                    <div class="col-span-6 sm:col-span-3">
                      <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                      <input
                        v-model="formInput.personal_info.city"
                        type="text"
                        name="city"
                        id="city"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <!-- Home Address -->
                    <div class="col-span-6">
                      <label for="home_address" class="block text-sm font-medium text-gray-700">Home Address</label>
                      <input
                        v-model="formInput.personal_info.home_address"
                        type="text"
                        name="home_address"
                        id="home_address"
                        class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <!-- <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Save
                  </button>
                </div> -->
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200" />
        </div>
      </div>

      <!--  Contract Detail Section -->
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Contract Information
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                Description.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form name="contract">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="relative grid grid-cols-6 gap-6 mt-4 ml-4 mb-6 mr-4">
                    <!-- Contract Types -->
                    <div class="col-span-6 sm:col-span-2">
                      <label for="contract_type" class="block text-sm font-medium text-gray-700">Contract Types</label>
                    </div>
                    <div class="absolute left-40 top--halfRem col-span-6 sm:col-span-2">
                      <ListBox />
                    </div>
                  </div>
                  <div class="wrapper">
                    <div class="grid grid-cols-6 gap-6 m-4">
                      <!-- Start Date -->
                      <div v-show="selectedContractType !== 2" class="col-span-6 sm:col-span-2">
                        <label for="start_date" class="block text-sm font-medium text-gray-700">Start Date</label>
                        <input
                          v-model="formInput.contract.start_date"
                          type="date"
                          name="start_date"
                          id="start_date"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <!-- End Date -->
                      <div v-show="selectedContractType !== 2" class="col-span-6 sm:col-span-2">
                        <label for="end_date" class="block text-sm font-medium text-gray-700">End Date</label>
                        <select
                          v-model="formInput.contract.end_date"
                          name="end_date"
                          id="end_date"
                          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        >
                          <option value="1">One Year</option>
                          <option value="2">Two Years</option>
                          <option value="3">Three Years</option>
                          <option value="4">Four Years</option>
                          <option value="5">Five Years</option>
                          <option value="non">Unspecific</option>
                        </select>
                        <!-- <input
                          type="date"
                          name="end_date"
                          id="end_date"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        /> -->
                      </div>
                      <!-- Salary -->
                      <div class="col-span-6 sm:col-span-2">
                        <label for="salary" class="block text-sm font-medium text-gray-700">Basic Salary</label>
                        <input
                          v-model="formInput.contract.salary"
                          type="text"
                          name="salary"
                          id="salary"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <!-- Insurance -->
                      <div v-show="selectedContractType !== 2" class="col-span-6 sm:col-span-2">
                        <label for="insurance" class="block text-sm font-medium text-gray-700">Medical Insurance</label>
                        <input
                          v-model="formInput.contract.insurance"
                          type="text"
                          name="insurance"
                          id="insurance"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <!-- Position  -->
                      <div class="col-span-6 sm:col-span-2">
                        <label for="position" class="block text-sm font-medium text-gray-700">Position</label>
                        <input
                          v-model="formInput.contract.position"
                          type="text"
                          name="position"
                          id="position"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <!-- Department -->
                      <div v-show="selectedContractType !== 2" class="col-span-6 sm:col-span-2">
                        <label for="department" class="block text-sm font-medium text-gray-700">Department</label>
                        <input
                          v-model="formInput.contract.department"
                          type="text"
                          name="department"
                          id="department"
                          class="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-6 m-4">
                    <div class="col-span-6 sm:col-span-3">
                      <label class="block text-sm font-medium text-gray-700">
                        Contract Document
                      </label>
                      <div
                        class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                      >
                        <div class="space-y-1 text-center">
                          <svg
                            class="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div class="flex text-sm text-gray-600">
                            <label
                              for="file-upload"
                              class="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500"
                            >
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs text-gray-500">
                            PNG, JPG, PDF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    @click="submitNewEmployeeForm"
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListBox from "../../common/ListBox";
export default {
  name: "EmployeeForm",
  data() {
    return {
      formInput: {
        profile: {
          emp_id: null,
          username: "",
        },
        personal_info: {
          first_name: "",
          middle_name: "",
          last_name: "",
          age: null,
          manager: "",
          email_address: "",
          city: "",
          home_address: "",
        },
        contract: {
          selectedContractType: "",
          start_date: "",
          end_date: "",
          salary: null,
          insurance: "",
          position: "",
          department: "",
        },
      },
    };
  },
  computed: {
    selectedContractType() {
      return this.$store.state.selectedContractType;
    },
  },
  components: {
    ListBox,
  },
  methods: {
    submitNewEmployeeForm: function(e) {
      e.preventDefault();
      this.$store.dispatch("createNewEmployee", this.formInput);
    },
  },
};
</script>

<style>
.top--halfRem {
  top: -0.5rem;
}
</style>
