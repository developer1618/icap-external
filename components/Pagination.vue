<template>
    <div class="flex justify-end">
        <sliding-pagination
              v-if="total > 1"
              :current="currentPage"
              :total="total"
              @page-change="pageChangeHandler"
        ></sliding-pagination>
    </div>
</template>
<script>
import SlidingPagination from "vue-sliding-pagination";
import "../node_modules/vue-sliding-pagination/dist/style/vue-sliding-pagination.css"
export default{
    props:['currentPage',"totalPage"],
 
    components:{
        SlidingPagination
    },
    methods:{
        pageChangeHandler(selected){
            this.$emit('pageChangeHandler',selected)
        }
    },
    computed:{
      total(){
        return Math.ceil(this.totalPage / 10);
      }
    }
  
}
</script>