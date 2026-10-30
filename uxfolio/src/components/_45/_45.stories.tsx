import type { Meta, StoryObj } from "@storybook/react-vite";
import { _45 } from "./_45";
const meta = {
  title: "Visual asset/4:5",
  component: _45,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof _45>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
