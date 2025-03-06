import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '../components/buttons/KozoButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'vue/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    variant: { control: 'select', option: ['primary', 'secondary', 'tertiary', 'outline', 'hover', 'text'] },
    default: { control: 'text' },
  },
  args: {
    onClick: fn(() => console.log('Button clicked')),
  },
  
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">{{ args.default }}</Button>
    `,
  })
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    default: "Button",
    size: "md",
  },
};

export const Variant: Story = {
  args: {
    variant: "secondary",
    default: "Button",
  },
};

export const size: Story = {
  args: {
    size: "xs",
    default: "Button",
  },
};

export const disabled: Story = {
  args: {
    default: "Button",
    disabled: true,
  },
};

