import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    employees: [],
    newEmployeeObject: {},
    loginUser: false,
    contractTypes: [
      { id: 0, name: "Full Time", unavailable: false },
      { id: 1, name: "Part Time", unavailable: false },
      { id: 2, name: "Freelance", unavailable: false },
    ],
    selectedContractType: 0,
  },
  mutations: {
    setEmployee(state, response) {
      state.employees = response.data;
    },
    setLoginEmployee(state) {
      state.loginEmployee = true;
    },
    setSelectedContractType(state, selectedContractType) {
      state.selectedContractType = selectedContractType.id;
    },
  },
  actions: {
    async getAllEmployees(context) {
      try {
        let config = {
          method: "get",
          baseURL: "http://localhost:3000/api/",
          url: "/employees",
        };
        axios(config);
        const response = await axios(config);
        console.log(response.data.message);
        context.commit("setEmployee", response);
      } catch (error) {
        console.error(error);
      }
    },
    async getLoginEmployee(context, employee) {
      try {
        let config = {
          method: "get",
          baseURL: "http://localhost:3000/api/",
          url: `/employees/${employee.emp_id}`,
        };
        axios(config);
        const response = await axios(config);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    getSelectedContractType(context, selectedContractType) {
      context.commit("setSelectedContractType", selectedContractType);
    },
    // async createNewEmployee(context, formInput) {
    //   try {
    //     let config = {
    //       method: "post",
    //       baseURL: "http://localhost:3000/api/",
    //       url: "/employees",
    //       data: formInput,
    //     };
    //     console.log(formInput);
    //     axios(config);
    //     const response = await axios(config);
    //     console.log(response);
    //     // context.commit("setEmployee", response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    createNewEmployee(context, formInput) {
      // let config = {
      //   method: "post",
      //   baseURL: ,
      //   url: "/employees",
      //   data: formInput,
      // };
      console.log(formInput);
      axios.post("http://localhost:3000/api/employees", formInput, (r) => {
        console.log(r);
      });
    },
  },
  modules: {},
});
