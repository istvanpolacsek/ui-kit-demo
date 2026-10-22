import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemType } from "./ListItemType";
const meta = {
  title: "Panel/List item / Type",
  component: ListItemType,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemType>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Selected: Story = { args: { ...Default.args, selected: true } };
