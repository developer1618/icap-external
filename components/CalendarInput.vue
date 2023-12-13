<template>
  <div date-rangepicker class="flex items-center">
    <!-- <date-picker :min-date="minDate"  valueType="format" @input="onChange" class="pl-4"></date-picker>
    <date-picker :min-date="minDate"  valueType="format" @input="onChange"></date-picker> -->
    <input
        type="datetime-local"
        value="2001-01-01T00:01"
        min="2001-01-01" max="2100-01-01"
        class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500 w-56 h-10"
        :min="new Date().toISOString().slice(0, 10)"
      />
      <input
        type="datetime-local"
        value="2023-01-01T00:01"
        min="2001-01-01T00:01" max="2100-01-01T00:01"
        class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500 h-10 w-56 ml-4"
        :min="new Date().toISOString().slice(0, 10)"
      />
  </div>
</template>
<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  props: ["calendarInput","minDate","date"],
  components: { DatePicker },
  data() {
    return {
      time1: "",
    };
  },
  computed:{
    
   },
  methods: {
    onChange(e){
      // this.$emit('change-date',this.)
    }
  },
  
};
</script>
