import type { Meta, StoryObj } from "@storybook/react-vite";
import { Delete } from "./Delete";
const meta = {
  title: "Visual asset/Delete",
  component: Delete,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Delete>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
