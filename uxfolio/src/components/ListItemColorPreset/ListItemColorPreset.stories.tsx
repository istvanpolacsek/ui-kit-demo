import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemColorPreset } from "./ListItemColorPreset";
const meta = {
  title: "Panel/List item / Color preset",
  component: ListItemColorPreset,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemColorPreset>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
