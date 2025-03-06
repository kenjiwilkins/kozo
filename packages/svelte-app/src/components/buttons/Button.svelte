<script lang="ts">

  
  import type { HTMLButtonAttributes } from "svelte/elements";
  interface $$Props extends HTMLButtonAttributes {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "primary" | "secondary" | "tertiary" | "outline" | "hover" | "text";
  }
  // const props: ButtonProps = $$props;
  let { size = "md", variant = "primary", children, ...rest }: $$Props = $props();
  let classes: string = $state("");
  $effect(() => {
    classes = `kozo-button kozo-button--${variant} kozo-button--${size}`;
  });
</script>
<button class={classes} {...rest}>
  {@render children?.()}
</button>
<style>
  @import './button.css';
</style>