<template>
  <div class="language" @click="switchLang">
    <img v-if="lang == 'en'" src="@/assets/media/icons/ar.png" />
    <img v-else src="@/assets/media/icons/en.png" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      lang: "lang_module/lang",
    }),
  },
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

  img {
    height: 33px;
  }

  // &.smallScreen {
  //   margin: 15px auto;
  //   width: fit-content;
  // }
}
</style>
