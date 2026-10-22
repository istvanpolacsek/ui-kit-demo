import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cursor } from "./Cursor";
const meta = {
  title: "Visual asset/Cursor",
  component: Cursor,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Cursor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
