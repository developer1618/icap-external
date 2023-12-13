<template>
    <div class="flex items-center text-center h-12 items-baseline">
        <nuxt-link :to="link" class="bg-[#009688] text-white px-3 py-2 hover:px-3 hover:py-2 rounded-md ml-6 h-10">{{ addButton }}</nuxt-link>
    </div>
</template>
<script>
export default {
  props: ["addButton", "link"],
}
</script>