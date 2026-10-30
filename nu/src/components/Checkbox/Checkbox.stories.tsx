import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";
const meta = {
  title: "  ↳ Controls/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Checked: Story = {
  args: { ...Default.args, defaultChecked: true },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
