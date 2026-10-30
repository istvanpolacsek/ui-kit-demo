import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemCustomCursors } from "./ListItemCustomCursors";
const meta = {
  title: "Panel/List item / Custom cursors",
  component: ListItemCustomCursors,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemCustomCursors>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
