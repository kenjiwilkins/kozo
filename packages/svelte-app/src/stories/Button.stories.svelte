
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from "../components/buttons/Button.svelte"
  import { fn } from '@storybook/test';
  import { createRawSnippet } from 'svelte';
  const snippet = createRawSnippet(() => {
    return {
      render: () => `<span>button</span>`,
    }
  })

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      size: {
        size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
        variant: { control: 'select', option: ['primary', 'secondary', 'tertiary', 'outline', 'hover', 'text'] },
        disabled: { control: 'boolean'}
      },
    },
    args: {
      onclick: fn(),
      children: snippet,
    },
    render: (props) => ({
      props,
      component: Button,
    }),
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default" args={{ size:"md", variant:"primary"}} />
<Story name="Variant" args={{ size:"md", variant:"secondary"}} />
<Story name="Size" args={{ size:"lg", variant:"primary"}} />
<Story name="Disabled" args={{ size:"md", variant:"primary", disabled: true}} />
