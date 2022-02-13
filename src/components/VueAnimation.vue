<template>
  <div :id="elementId" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import {random} from "../helpers/Random";
import {isOnScreen} from "../helpers/IsOnScreen";

export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'fade-in'
    },
    delay: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {
      elementId: 'vue-animations-' + random(100000, 999999),
      element: null
    }
  },
  computed: {
    classes() {
      let classes = 'vue-animations ' + this.type;
      if (this.delay) {
        classes += 'delay-' + this.delay
      }
      return classes;
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      if (!this.element) {
        this.element = document.getElementById(this.elementId);
        if (!this.element) {
          return;
        }
      }

      if (!this.element.classList.contains('applied') && isOnScreen(this.element)) {
        this.element.classList.add('applied');
      }
    }
  }
}
</script>