<template>
  <v-col cols="12" :md="col">
    <!-- =========== Text || Tel || Number || Email || Password =========== -->
    <div
      class="input_wrapper"
      :class="{ light: light }"
      v-if="
        type == 'text' ||
        type == 'tel' ||
        type == 'number' ||
        type == 'email' ||
        type == 'password'
      "
    >
      <label
        >{{ label }}<span v-if="required" class="requiredAstric">*</span></label
      >
      <div class="_input">
        <input
          :type="type"
          :placeholder="placeholder"
          :value="value"
          @input="updateValue"
          :required="required"
        />
        <span
          v-if="type == 'password'"
          @click="togglePassVisibily"
          class="icon"
        >
          <i v-if="passowrdVisible" class="fas fa-eye"></i
          ><i v-else class="fas fa-eye-slash"></i
        ></span>
      </div>

      <!-- Validation -->
      <transition name="fadeIn">
        <v-alert v-if="showAlert" dense border="left" type="error">{{
          validationMessage
        }}</v-alert>
      </transition>
    </div>

    <!-- =========== Textarea =========== -->
    <div
      class="input_wrapper textarea"
      :class="{ light: light }"
      v-if="type == 'textarea'"
    >
      <label
        >{{ label }}<span v-if="required" class="requiredAstric">*</span></label
      >
      <div class="_input">
        <textarea
          :placeholder="placeholder"
          :value="value"
          @input="updateValue"
          :required="required"
          rows="3"
        ></textarea>
      </div>
    </div>

    <!-- =========== OTB =========== -->
    <div
      class="input_wrapper"
      :class="{ light: light }"
      dir="ltr"
      v-if="type == 'otb'"
    >
      <v-otp-input
        type="text"
        :length="length"
        :value="value"
        @input="updateValue($event)"
      />
    </div>

    <!-- =========== Search =========== -->
    <div
      class="input_wrapper search"
      :class="{ light: light }"
      v-if="type == 'search'"
    >
      <label
        >{{ label }}<span v-if="required" class="requiredAstric">*</span></label
      >
      <div class="_input">
        <input
          :type="type"
          :placeholder="placeholder"
          :value="value"
          @input="updateValue"
          :required="required"
        />
        <span @click="$emit('insideSubmit')" class="icon"
          ><i class="fas fa-search"></i
        ></span>
      </div>

      <!-- Keywords -->
      <div class="keywords">
        <span class="main">{{ $t("search.try") }}: </span>
        <span
          @click="$emit('setSerchTag', keyword.title)"
          class="colored"
          v-for="keyword in keywords"
          :key="keyword.id"
        >
          {{ keyword.title + ", " }}
        </span>
      </div>
    </div>

    <!-- =========== Date =========== -->
    <div class="input_wrapper picker" v-if="type == 'date'">
      <label
        >{{ label }}<span v-if="required" class="requiredAstric">*</span></label
      >
      <div class="_input">
        <v-dialog persistent v-model="dateModel" width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="value"
              @input="updateValue($event)"
              :label="placeholder"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
            <span class="icon"><i class="far fa-calendar-alt"></i></span>
          </template>
          <v-date-picker
            :value="value"
            @input="updateValue($event)"
            scrollable
          ></v-date-picker>
        </v-dialog>
      </div>
      <transition name="fadeIn">
        <v-alert v-if="showAlert" dense border="left" type="error">{{
          validationMessage
        }}</v-alert>
      </transition>
    </div>

    <!-- =========== Time =========== -->
    <div class="input_wrapper picker" v-if="type == 'time'">
      <label
        >{{ label }}<span v-if="required" class="requiredAstric">*</span></label
      >
      <div class="_input">
        <v-dialog persistent v-model="timeModel" width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="value"
              @input="updateValue($event)"
              :label="placeholder"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
            <span class="icon"><i class="fas fa-clock"></i></span>
          </template>
          <v-time-picker
            :value="value"
            @input="updateValue($event)"
            scrollable
          ></v-time-picker>
        </v-dialog>
      </div>
      <transition name="fadeIn">
        <v-alert v-if="showAlert" dense border="left" type="error">{{
          validationMessage
        }}</v-alert>
      </transition>
    </div>

    <!-- =========== Radio =========== -->
    <div class="input_wrapper radio" v-if="type == 'radio'">
      <label
        >{{ label }}<span v-if="required" class="requiredAstric">*</span></label
      >
      <v-radio-group @change="updateValue($event)" :value="value">
        <v-radio
          class="gender"
          v-for="radio in radios"
          :key="radio.id"
          :label="radio.name"
          :value="radio.value"
        ></v-radio>
      </v-radio-group>
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    light: {
      required: false,
      type: Boolean,
    },
    keywords: {
      required: false,
      type: [],
    },
    length: {
      required: false,
      type: String,
    },
    value: {
      required: false,
    },
    type: {
      required: true,
      type: String,
    },
    placeholder: {
      required: false,
      type: String,
    },
    label: {
      required: false,
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
    radios: {
      required: false,
      type: Array,
    },
  },

  data() {
    return {
      // =========> Alert Data
      showAlert: false,
      validationMessage: "errer",

      // =========> Picker Data
      dateModel: false,
      timeModel: false,

      // =========> Passowrd Icon Status
      passowrdVisible: false,
    };
  },

  methods: {
    updateValue(e) {
      this.dateModel = false;
      this.timeModel = false;

      if (
        this.type == "otb" ||
        this.type == "date" ||
        this.type == "time" ||
        this.type == "radio"
      ) {
        this.$emit("input", e);
        this.validateInput(e);
      } else {
        this.$emit("input", e.target.value);
        this.validateInput(e.target.value);
      }
    },

    togglePassVisibily(e) {
      const iconSpan = e.currentTarget;
      const input = iconSpan.previousElementSibling;

      if (input.getAttribute("type") == "text") {
        this.passowrdVisible = false;
        input.setAttribute("type", "password");
      } else {
        this.passowrdVisible = true;
        input.setAttribute("type", "text");
      }
    },

    validateInput(value) {
      if (this.required) {
        let valid = true;

        if (this.type == "email") {
          this.validationMessage = this.$t("validation.email");
          valid = this.helper_validEmail(value);
        } else {
          if (!value) {
            this.validationMessage = this.$t("validation.empty");
            valid = false;
          }
        }

        this.showAlert = !valid;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
