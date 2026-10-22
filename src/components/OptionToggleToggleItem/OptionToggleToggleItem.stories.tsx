import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionToggleToggleItem } from "./OptionToggleToggleItem";
const meta = {
  title: "Input/Option toggle / Toggle item",
  component: OptionToggleToggleItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionToggleToggleItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Selected: Story = { args: { ...Default.args, selected: true } };
