<template>
  <span class="search">
    <span @click="show = !show"><i class="fad fa-search"></i></span>

    <search-model
      :show="show"
      :closeIcon="false"
      @close="show = false"
    ></search-model>
  </span>
</template>

<script>
import SearchModel from "../../Modals/SearchModel.vue";
export default {
  components: { SearchModel },
  props: ["url"],

  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  margin-top: 5px !important;
}
</style>
