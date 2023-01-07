<template>
  <v-col cols="12" :md="col">
    <div class="input_wrapper autoComplete">
      <label
        >{{ label }}<span v-if="required" class="requiredAstric">*</span></label
      >
      <div class="_input">
        <v-autocomplete
          chips
          :deletable-chips="multiple"
          item-text="name"
          item-value="id"
          :return-object="returnObject"
          :items="isStatic ? _staticItems : items"
          :disabled="disabled"
          :value="value"
          :multiple="multiple"
          @blur="validateInput(value)"
          @input="updateValue($event)"
        ></v-autocomplete>
      </div>
      <transition name="fadeIn">
        <v-alert v-if="showAlert" dense border="left" type="error">{{
          validationMessage
        }}</v-alert>
      </transition>
    </div>
  </v-col>
</template>

<script>
export default {
  name: "BaseSelectInput",

  props: {
    staticItems: {
      required: false,
      type: Array,
    },
    static: {
      required: false,
      type: Boolean,
      default: false,
    },
    returnObject: {
      required: false,
      type: Boolean,
      default: true,
    },
    getUrl: {
      required: false,
      type: String,
    },
    value: {
      required: true,
    },
    label: {
      required: true,
      type: String,
    },
    col: {
      required: false,
      type: String,
      default: "12",
    },
    required: {
      required: false,
      type: Boolean,
      default: false,
    },
    multiple: {
      required: false,
      type: Boolean,
      default: false,
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      // ========== Validation Alert
      showAlert: false,
      validationMessage: "errer",

      // ========== Select Items
      items: [],
    };
  },

  computed: {
    _staticItems() {
      return this.staticItems;
    },

    isStatic() {
      return this.static;
    },
  },

  methods: {
    updateValue(e) {
      this.$emit("input", e);
    },

    validateInput(value) {
      if (this.required) {
        let valid = true;

        if (!value) {
          this.validationMessage = this.$t("validation.empty");
          valid = false;
        }

        this.showAlert = !valid;
      }
    },

    getSelectItems() {
      if (this.static) {
        return;
      }

      this.$axios({
        method: "GET",
        url: `${this.getUrl}`,
      })
        .then((res) => {
          if (this.getUrl == "car") {
            this.items = res.data.data.map((item) => {
              return {
                id: item.id,
                name: item.car_number,
              };
            });
            return;
          }

          this.items = res.data.data.map((item) => {
            return {
              id: item.id,
              name: item.name,
            };
          });
        })
        .catch((err) => {
          console.log(err);
          this.items = [
            { id: 1, name: "Item Default 1" },
            { id: 2, name: "Item Default 2" },
          ];
        });
    },
  },

  created() {
    this.getSelectItems();
  },
};
</script>
