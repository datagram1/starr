import type { Meta, StoryObj } from '@storybook/react';
import { FormField, FormGroup, FormError, FormHelperText } from './index';
import { DemoForm } from './DemoForm';
import { Input } from '@/components/ui/input';

const meta: Meta = {
  title: 'Form/Components',
};

export default meta;

export const FieldWithLabel: StoryObj = {
  render: () => (
    <FormField label="Email" required>
      <Input type="email" placeholder="Enter your email" />
    </FormField>
  ),
};

export const FieldWithError: StoryObj = {
  render: () => (
    <FormField label="Password" error="Password must be at least 8 characters">
      <Input type="password" />
    </FormField>
  ),
};

export const FieldWithHelp: StoryObj = {
  render: () => (
    <FormField
      label="Username"
      helpText="This will be your public display name"
    >
      <Input placeholder="johndoe" />
    </FormField>
  ),
};

export const GroupDemo: StoryObj = {
  render: () => (
    <FormGroup
      title="Account Settings"
      description="Manage your account information"
    >
      <FormField label="Name">
        <Input placeholder="Your name" />
      </FormField>
      <FormField label="Email">
        <Input type="email" placeholder="Your email" />
      </FormField>
    </FormGroup>
  ),
};

export const CompleteForm: StoryObj = {
  render: () => <DemoForm />,
};
