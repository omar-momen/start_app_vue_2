<template>
  <section class="baseMap">
    <GmapMap
      v-if="markers.length > 0"
      :center="center"
      :zoom="zoom"
      :options="mapStyle"
      map-type-id="terrain"
      :style="{ width: '100%', height: height + 'px' }"
    >
      <!-- ========= Draw Path -->
      <gmap-polyline
        v-if="path"
        :path.sync="path"
        :options="{ strokeColor: strokeColor, strokeWeight: 5 }"
      >
      </gmap-polyline>

      <!-- ========= Custom Markers -->
      <gmap-custom-marker
        v-for="(marker, index) in markers"
        :key="index"
        :marker="marker"
        @click.native="showWindow(index)"
        alignment="top"
        :offsetX="0"
        :offsetY="0"
      >
        <div class="customeMarker">
          <div class="img">
            <img :src="marker.info.img" />
          </div>
          <div :class="{ active: marker.windowActive }" class="markerWindow">
            <span> {{ marker.info.name }} </span>
          </div>
        </div>
      </gmap-custom-marker>
    </GmapMap>
  </section>
</template>

<script>
import GmapCustomMarker from "vue2-gmap-custom-marker";

export default {
  components: { "gmap-custom-marker": GmapCustomMarker },

  props: {
    zoom: {
      type: Number,
      default: 16,
      required: false,
    },
    path: {
      type: Array,
      required: false,
    },
    strokeColor: {
      type: String,
      required: false,
      default: "#1A73E8",
    },
    height: {
      type: String,
      required: false,
      default: "500",
    },
    markers: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      // Map Style
      mapStyle: {},
    };
  },

  computed: {
    center() {
      if (this.path) {
        return this.path[0];
      } else {
        return { lat: this.markers[0].lat, lng: this.markers[0].lng };
      }
    },
  },

  methods: {
    showWindow(index) {
      return;
      this.markers[index].windowActive = !this.markers[index].windowActive;
    },
  },
};
</script>

<style lang="scss">
.baseMap {
  position: relative;
  width: 100%;
  height: 500px;
  margin: 15px auto;
  height: 100%;

  .feature.map {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    iframe {
      height: 100%;
      width: 100%;
      border: 0;
      filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 10+ */
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(99%); /* Chrome 19+ & Safari 6+ */
      -webkit-backface-visibility: hidden; /* Fix for transition flickering */
    }
  }
  .vue-map-container {
    height: 100%;
    position: relative;
    inset: 0;
    width: 100%;
    height: 100%;

    .customeMarker {
      position: relative;

      .img {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
          height: 100;
          border-radius: 50%;
          object-fit: contain;
        }
      }

      .markerWindow {
        position: absolute;
        top: -106px;
        background: #333;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: #fff;
        border-radius: 15px;
        text-align: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease-in;
        &.active {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
}
</style>
