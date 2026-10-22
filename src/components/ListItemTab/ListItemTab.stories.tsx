import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemTab } from "./ListItemTab";
const meta = {
  title: "Panel/List item / Tab",
  component: ListItemTab,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemTab>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
