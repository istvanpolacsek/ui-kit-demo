import type { Meta, StoryObj } from "@storybook/react-vite";
import { _11 } from "./_11";
const meta = {
  title: "Visual asset/1:1",
  component: _11,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof _11>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
