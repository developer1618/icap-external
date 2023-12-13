<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          <div class="mt-3 text-center">
            <div class="flex justify-between pb-8">
              <div>
                <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Дискуссия</h3>
              </div>
              <div class="cursor-pointer" @click="$emit('onClose')">
                <img src="/img/close-icon.svg" alt="close">
              </div>
            </div>
          </div>
          <ValidationObserver v-slot="{handleSubmit}">
            <form class="grid gap-8" @submit.prevent="handleSubmit(storeDiscussion)">
                <div class="col-span-1">
                    <ValidationProvider rules="required" v-slot="{ errors }">
                        <label for="helper-text" class="block mb-2 text-sm font-medium text-[#4D5D7D]">Название <span class="text-red-600 absolute"></span></label>
                        <input type="text"  v-model="name" id="helper-text" aria-describedby="helper-text-explanation" class="bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 placeholder-[#B3B9C9] text-[#4D5D7D] focus:ring-blue-500 focus:border-blue-500" placeholder="Введите название дискуссии">
                        <p class="text-red-600 absolute">{{errors[0]}}</p>
                    </ValidationProvider>
                </div>
                <div class="mt-5 sm:mt-6">
                  <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-[#00A700] hover:bg-[#5d64a7] text-white text-lg w-full py-3">Добавить</button>
              </div>
            </form>
          </ValidationObserver>
      </div>
    </div>
    </div>
    </div>
</template>
<script>
import { mapState,mapActions } from 'vuex';
export default{
  data() {
    return {
      name:""
    }
  },
  methods: {
    ...mapActions({
            store:"api/store"
    }),

    async storeDiscussion(){
      let payload = {
        request:"discussion",
        form:{
            name:this.name,
            user_id:this.$auth.user.id
        }
      }
      this.store(payload);
    },
  },
  computed:{
    ...mapState({
      modal:(state) => state.api.modal,
    })
  }
}
</script>