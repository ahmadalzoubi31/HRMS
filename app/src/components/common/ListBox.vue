<template>
  <div class="w-36">
    <Listbox v-model="selectedContractType">
      <div>
        <ListboxButton
          class="flex flex-row justify-between w-full py-2 pl-3 pr-3 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
        >
          <span class="block truncate">{{ selectedContractType.name }}</span>
          <span
            class="inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
          >
            <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="type in contractTypes"
              :key="type"
              :value="type"
              as="template"
            >
              <li
                :class="[
                  active ? 'text-teal-900 bg-teal-100' : 'text-gray-900',
                  'cursor-default select-none py-2 pl-4 pr-4 flex flex-row justify-between',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ type.name }}</span
                >
                <span
                  v-if="selected"
                  class="inset-y-0 left-0 flex items-center pl-3 text-teal-600"
                >
                  <CheckIcon class="w-5 h-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script>
import { ref } from "vue";
import store from "../../store/store";

import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    SelectorIcon,
  },
  setup() {
    const contractTypes = store.state.contractTypes;
    const selectedContractType = ref(contractTypes[0]);
    return {
      contractTypes,
      selectedContractType,
    };
  },
  watch: {
    selectedContractType: function() {
      store.dispatch("getSelectedContractType", this.selectedContractType);
    },
  },
};
</script>
