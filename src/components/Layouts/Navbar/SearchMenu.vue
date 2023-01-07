<template>
  <span class="search">
    <img src="@/assets/media/icons/search.svg" @click="show = !show" />

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
}
</style>
