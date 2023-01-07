<template>
  <div class="notFound">
    <div class="text">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <h4>I think you just went to a non-existing page</h4>
      <router-link to="/">click here to go back</router-link>
    </div>

    <div class="loader">
      <div class="car">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <path
              style="fill: #e38100"
              d="M326.62,370.719l77.178-30.896c6.691-2.675,11.087-9.154,11.096-16.366V300.1l-88.274,35.31V370.719   z"
            />
            <path
              style="fill: #e38100"
              d="M185.381,370.719v-35.31L97.106,300.1v23.357c0.009,7.212,4.405,13.691,11.096,16.366   L185.381,370.719z"
            />
          </g>
          <path
            style="fill: #ffbc05"
            d="M190.898,491.902l30.331,12.994c22.21,9.472,47.333,9.472,69.543,0l30.331-12.95  c34.886-14.839,56.328-50.378,53.185-88.16l-12.358-147.824l12.694-151.699c2.966-35.875-16.251-69.94-48.498-85.944l-6.965-3.469  c-39.776-19.8-86.544-19.8-126.321,0l-6.965,3.469c-32.247,16.004-51.464,50.069-48.498,85.944l12.694,151.699l-12.358,147.86  C134.605,441.577,156.038,477.072,190.898,491.902z"
          />
          <path
            style="fill: #e38100"
            d="M138.33,396.23c49.672,65.508,133.921,94.63,213.439,73.771  c-8.518,9.428-18.979,16.905-30.667,21.901l-30.331,12.994c-22.21,9.472-47.333,9.472-69.543,0l-30.331-12.95  c-34.886-14.839-56.328-50.378-53.185-88.16L138.33,396.23z"
          />
          <path
            style="fill: #23aec8"
            d="M324.36,368.795l2.26-1.474c5.455-3.619,8.457-9.957,7.803-16.472l-7.803-77.337H185.381  l-7.768,77.337c-0.662,6.506,2.33,12.844,7.768,16.472l2.225,1.474C229.032,396.319,282.924,396.319,324.36,368.795z"
          />
          <path
            style="fill: #1967a3"
            d="M323.027,369.607c-41.277,26.668-94.436,26.35-135.386-0.812l-2.26-1.474  c-5.455-3.619-8.457-9.957-7.803-16.472l5.941-59.144C217.389,335.674,267.82,363.834,323.027,369.607z"
          />
          <path
            style="fill: #23aec8"
            d="M326.62,150.033H185.381l-6.779-40.677c-1.227-7.362,2.304-14.707,8.827-18.335l17.116-9.507  c31.991-17.778,70.902-17.778,102.893,0l17.116,9.507c6.523,3.628,10.054,10.972,8.827,18.335L326.62,150.033z"
          />
          <path
            style="fill: #1967a3"
            d="M187.437,91.022l8.624-4.793c34.692,30.605,76.19,52.479,121.042,63.805H185.381l-6.779-40.677  C177.365,101.994,180.905,94.65,187.437,91.022z"
          />
          <g>
            <rect
              x="285.98"
              y="423.671"
              transform="matrix(-0.5547 0.8321 -0.8321 -0.5547 853.9575 407.9586)"
              style="fill: #555160"
              width="63.657"
              height="17.656"
            />

            <rect
              x="185.38"
              y="400.698"
              transform="matrix(-0.8321 0.5547 -0.5547 -0.8321 595.7145 684.6945)"
              style="fill: #555160"
              width="17.656"
              height="63.657"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.notFound {
  overflow: hidden;
  background: #666;
  background-image: radial-gradient(#888, #555);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  .text {
    margin-bottom: 20px;
    text-align: center;

    h1 {
      font-size: 140px;
      margin: 0;
      background: -webkit-linear-gradient(#ff5252, #1e1e1e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      font-size: 70px;
      margin: 0;
    }

    h4 {
      margin: 0;
      font-size: 25px;
      color: #d4d4d4;
    }

    a {
      text-decoration: underline;
    }

    @media (max-width: 600px) {
      h1 {
        font-size: 100px;
      }
      h2 {
        font-size: 40px;
      }
      h4 {
        font-size: 20px;
      }
    }
  }
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: tracks 10s linear forwards;
  }

  &::before {
    width: 265px;
    height: 265px;
    border: 11px solid rgba(0, 0, 0, 0);
  }

  &::after {
    width: 95px;
    height: 95px;
    border: 8px solid rgba(0, 0, 0, 0);
  }
}

.car {
  position: relative;
  z-index: 1;
  transform-origin: bottom bottom;
  animation: drift 3.2s linear infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 10px;
    border-radius: 50%;
  }

  &::before {
    background: #eee;
    animation: smoke 0.5s linear infinite;
  }

  &::after {
    background: #eee;
    animation: smoke 0.5s linear 0.7s infinite;
  }
}

svg {
  position: relative;
  width: 150px;
  padding: 0 0 150px;
  z-index: 1;
}

@keyframes smoke {
  from {
    left: 65px;
    width: 0px;
    height: 0px;
    opacity: 1;
  }
  to {
    left: -10px;
    width: 40px;
    height: 40px;
    opacity: 0;
  }
}

@keyframes drift {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes tracks {
  from {
    border-color: rgba(0, 0, 0, 0);
  }
  to {
    border-color: rgba(0, 0, 0, 1);
  }
}
</style>
