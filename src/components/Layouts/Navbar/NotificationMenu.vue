<template>
  <div class="notification" @click.stop="show = !show">
    <i class="far fa-bell"></i>

    <nav-dropdown :show="show" @close="show = false">
      <template v-slot>
        <ul class="items" v-if="notifications.length > 0">
          <li
            class="item"
            v-for="item in notifications"
            :key="item.id"
            @click.stop="show = false"
          >
            <div class="image">
              <img :src="item.image" alt="" />
            </div>

            <div class="content">
              <h6>{{ item.title }}</h6>
              <p class="desc">{{ item.body.slice(0, 50) }}</p>
            </div>
          </li>
        </ul>
        <div class="noData" v-else>
          <img src="@/assets/media/images/bg/noNotifications.svg" alt="" />
        </div>
      </template>
    </nav-dropdown>
  </div>
</template>

<script>
import NavDropdown from "../../UI/NavDropdown.vue";
export default {
  components: { NavDropdown },
  props: ["url"],

  data() {
    return {
      show: false,

      notifications: [],
    };
  },

  methods: {
    getData() {
      this.$axios({
        method: "GET",
        url: "notifications",
      }).then((res) => {
        this.notifications = res.data.data.notifications;
        console.log(this.notifications);
      });
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.notification {
  position: relative;
  @media (max-width: 800px) {
    position: unset;
  }

  display: flex;
  align-items: center;

  .items {
    width: 300px;

    .item {
      padding: 20px 10px 10px;
      border-bottom: 1px solid #eee;
      display: flex;
      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        background: #eee;
      }

      .image {
        margin-inline-end: 10px;
        img {
          height: 50px;
        }
      }

      .content {
        h6 {
          color: gray;
          font-size: 15px;
        }
        p.desc {
          font-size: 14px;
        }
      }
    }
  }
}

.noData {
  height: 300px;
  width: 300px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    border-radius: 15px;
  }
}
</style>
