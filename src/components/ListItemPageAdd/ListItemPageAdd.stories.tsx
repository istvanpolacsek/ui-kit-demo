import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemPageAdd } from "./ListItemPageAdd";
const meta = {
  title: "Panel/List item / Page add",
  component: ListItemPageAdd,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemPageAdd>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Icon" } };
