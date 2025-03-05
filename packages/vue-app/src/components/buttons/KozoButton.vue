<template>
  <button :class="classes" v-bind="$attrs">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonHTMLAttributes } from 'vue';
import "./button.css"

interface ButtonProps extends /* @vue-ignore */  ButtonHTMLAttributes {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "hover" | "text";
}
const DEFAULT_SIZE = "md";
const DEFAULT_VARIANT = "primary";

const props = defineProps<ButtonProps>();
const classes = computed(() => {
  return {
    'kozo-button': true,
    [`kozo-button--${props.size 
      ? props.size 
      : DEFAULT_SIZE
    }`]: true,
    [`kozo-button--${props.variant
      ? props.variant
      : DEFAULT_VARIANT
    }`]: true,
  }
})
</script>

<!-- <template>
  <button class="button" v-bind="props"><slot></slot></button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */  ButtonHTMLAttributes {}
const props = defineProps<Props>()
</script> -->