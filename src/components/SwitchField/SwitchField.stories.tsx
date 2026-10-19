import type { Meta, StoryObj } from "@storybook/react-vite";
import { SwitchField } from "./SwitchField";
const meta = {
  title: "Inputs/Switch Field",
  component: SwitchField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SwitchField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    description: "Description",
    hasLabel: true,
    label: "Label",
    hasDescription: true,
  },
};
export const Checked: Story = {
  args: { ...Default.args, defaultChecked: true },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
