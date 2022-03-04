import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryFilled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

PrimaryFilled.args = {
  type: "primary",
  label: 'button'
};

export const PrimaryOutlined = Template.bind({});

PrimaryOutlined.args = {
  type: "primary",
  label: 'button',
  outlined: true
};

export const Default = Template.bind({});

Default.args = {
  label: 'button'
};

export const Text = Template.bind({});

Text.args = {
  label: 'button',
  type: "text"
};

export const Link = Template.bind({});

Link.args = {
  label: 'button',
  type: "link"
};

export const Gradient = Template.bind({});

Gradient.args = {
  label: 'button',
  gradient: true
};