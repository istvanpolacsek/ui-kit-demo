import type { Meta, StoryObj } from "@storybook/react-vite";
import { _32 } from "./_32";
const meta = {
  title: "Visual asset/3:2",
  component: _32,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof _32>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
