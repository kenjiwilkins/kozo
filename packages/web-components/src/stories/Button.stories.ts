import type { Meta, StoryObj } from '@storybook/web-components';

import type { ButtonProps } from '../components/button/button';
import { Button } from '../components/button/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'outline', 'hover', 'text'],
    },
    disabled: {
      control: { type: 'boolean' },
    }
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Variant: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
  },
};

export const Size: Story = {
  args: {
    size: 'lg',
    label: 'Button',
  },
};

export const disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
  }
}

