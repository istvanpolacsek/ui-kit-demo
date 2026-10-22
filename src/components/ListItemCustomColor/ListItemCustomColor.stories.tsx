import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemCustomColor } from "./ListItemCustomColor";
const meta = {
  title: "Panel/List item / Custom color",
  component: ListItemCustomColor,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemCustomColor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
export const Selected: Story = { args: { ...Default.args, selected: true } };
