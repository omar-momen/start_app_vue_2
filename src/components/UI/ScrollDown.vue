<template>
  <div class="scroll_down" @click="$emit('clicked')">
    <button>
      <div class="icons">
        <i class="fas fa-mouse"></i>
        <i class="fas fa-chevron-down one"></i>
        <i class="fas fa-chevron-down tow"></i>
      </div>
      <div class="circle_border circle_one"></div>
      <div class="circle_border circle_tow"></div>
      <div class="circle_border circle_three"></div>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes arrow_down {
  100% {
    transform: translateY(8px);
  }
}
@keyframes border_scale_one {
  100% {
    transform: scale(2);
    color: #fff;
    opacity: 0.1;
  }
}
@keyframes border_scale_tow {
  100% {
    transform: scale(1.5);
    color: #fff;
    opacity: 0.1;
  }
}
@keyframes border_scale_three {
  100% {
    transform: scale(1);
    color: #fff;
    opacity: 0.1;
  }
}
.scroll_down {
  color: #75bee8;

  button {
    color: inherit;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;

    &:hover {
      .icons {
        .fa-chevron-down {
          animation: arrow_down 1s ease-in-out infinite alternate;
        }
      }
    }
    .icons {
      color: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .fa-mouse {
        font-size: 1.7rem;
      }
      .fa-chevron-down.one {
        font-size: 1rem;
        opacity: 0.5;
      }
      .fa-chevron-down.tow {
        font-size: 1rem;
        margin-top: -5px;
      }
    }
    .circle_border {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: transparent;
      border: 1px solid #75bee8;
      top: 0;
      left: 0;
      &.circle_one {
        animation: border_scale_one 2s ease-in-out infinite;
      }
      &.circle_tow {
        animation: border_scale_tow 2s ease-in-out 0.5s infinite;
      }
      &.circle_three {
        animation: border_scale_three 2s ease-in-out 1s infinite;
      }
    }
  }
}
</style>
