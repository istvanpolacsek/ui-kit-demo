import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxField } from "./CheckboxField";
const meta = {
  title: "Inputs/Checkbox Field",
  component: CheckboxField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CheckboxField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasDescription: true, description: "Description", label: "Label" },
};
export const Checked: Story = {
  args: { ...Default.args, defaultChecked: true },
};
export const Indeterminate: Story = {
  args: { ...Default.args, indeterminate: true },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
