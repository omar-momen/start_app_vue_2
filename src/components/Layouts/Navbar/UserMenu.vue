<template>
  <div class="user">
    <img
      @click="show = !show"
      src="@/assets/media/images/avatars/1.svg"
      alt=""
    />
    <!-- <img class="userImage" @click="show = !show" :src="user.image" alt="" /> -->

    <side-menu
      direction="right"
      v-if="show"
      :show="show"
      @closeMenu="show = false"
    >
    </side-menu>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import UserCard from "../../Global/UserCard.vue";

export default {
  components: { UserCard },

  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.userImage {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  object-fit: cover;
}
.list {
  padding: 30px 15px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.186);

  .item {
    margin: 25px 0;

    a {
      display: flex;
      align-items: center;

      &:hover {
        h5 {
          color: #2435da;
        }
      }

      img {
        height: 50px;
        margin-inline-end: 10px;
      }

      h5 {
        transition: all 0.2s linear;
        margin-top: 10px;
      }
    }
  }
}
</style>
