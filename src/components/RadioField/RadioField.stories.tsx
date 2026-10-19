import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioField } from "./RadioField";
const meta = {
  title: "Inputs/Radio Field",
  component: RadioField,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RadioField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasDescription: true, description: "Description", label: "Label" },
};
export const Checked: Story = {
  args: { ...Default.args, defaultChecked: true },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
