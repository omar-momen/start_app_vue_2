<template>
  <div class="language" @click="switchLang">
    <img src="@/assets/media/icons/glope.svg" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      switchLang: "lang_module/switchLang",
    }),
  },
};
</script>

<style lang="scss" scoped>
.language {
  display: flex;
  align-items: center;
}
</style>
