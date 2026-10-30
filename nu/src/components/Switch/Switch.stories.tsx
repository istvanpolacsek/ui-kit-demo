import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";
const meta = {
  title: "  ↳ Controls/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Enabled" } };
export const Checked: Story = {
  args: { ...Default.args, defaultChecked: true },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
